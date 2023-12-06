import { Stack, Link, Text, useColorModeValue, Icon, Select, Popover, PopoverTrigger, PopoverContent, PopoverBody, Button, Alert, AlertIcon } from "@chakra-ui/react";
import React, { ReactNode, useState } from "react";
import { isMobile } from "react-device-detect";
import { AiOutlineDownload, AiOutlineInfoCircle } from "react-icons/ai";
import Testimonial, { TestimonialContent } from "../../Testimonial";
import { useFontSizeAccessibilityContext } from "../../../context/fontSizeAccessibility";

type Law = {
  name: string;
  link: string;
};

type PropsInput = {
  laws: Law[];
  selectOptions: Array<string | number>;
  selectValue: number;
  handleSelectValue: (value: number) => void;
  children?: ReactNode;
};

const PlanContainerLaw = ({ laws, children, selectOptions, selectValue, handleSelectValue }: PropsInput) => {
  const [downloadLinks, setDownloadLinks] = useState<Record<number, string>>({});
  const [isLoading, setIsLoading] = useState<Record<number, boolean>>({});
  const [isDownloadCompleted, setIsDownloadCompleted] = useState<Record<number, boolean>>({});
  const [selectedItemIndex, setSelectedItemIndex] = useState<number | null>(null);

  const handleDownload = (url: string) => {
    window.open(url, '_blank');
  };

  const accessibility = useFontSizeAccessibilityContext();
  const handleClick = async (link: string, index: number) => {
    setSelectedItemIndex(index);
    setIsLoading((prevIsLoading) => ({
      ...prevIsLoading,
      [index]: true,
    }));

    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ link }),
    };

    try {
      const result = await Promise.race([
        fetch('../../api/download/proxy1', requestOptions),
        new Promise((_, reject) =>
          setTimeout(() => reject(new Error('Timeout after 5 minutes')), 300000)
        ),
      ]);

      if (!(result instanceof Error)) {
        const response = result as Response;
        const data = await response.json();

        if (data.status === 'Download Completed') {
          setDownloadLinks((prevDownloadLinks) => ({
            ...prevDownloadLinks,
            [index]: data.fileName,
          }));

          const downloadUrl = `https://dadosabertos.mogidascruzes.sp.gov.br/api/download/downloadProxy2?filename=${data.fileName}`;
          handleDownload(downloadUrl);

          setIsDownloadCompleted((prevIsDownloadCompleted) => ({
            ...prevIsDownloadCompleted,
            [index]: true,
          }));
        } else {
          console.error('Failed to download file');
        }
      }
    } catch (error) {
      console.error('Error:', error);
    } finally {
      setIsLoading((prevIsLoading) => ({
        ...prevIsLoading,
        [index]: false,
      }));
    }
  };

  return (
    <Stack direction={isMobile ? "column" : "row"} flex={1}>
      <Stack direction="column" flex={3}>
        {children}
        <Select
          minW={90}
          width="20%"
          bg={useColorModeValue("white", "gray.800")}
          value={selectValue}
          textAlign="center"
          mb={5}
          onChange={(event) => {
            handleSelectValue(Number(event.target.value));
          }}
        >
          {selectOptions.map((value: string | number, index: number) => (
            <option key={index} value={value}>
               <Text mb={2} fontWeight="550" fontSize={accessibility?.fonts?.medium}>
              {value}</Text>
            </option>
          ))}
        </Select>
        {laws.map((law, index) => (
  <Stack direction="row" justifyContent="space-between" key={index} >
    <Popover
      isOpen={selectedItemIndex === index}
      onClose={() => setSelectedItemIndex(null)}
      placement='auto'
    >
      <PopoverTrigger>
        <Stack
          direction="row"
          bg={isLoading[index] ? 'gray.200' : 'transparent'}
          color={isLoading[index] ? 'black' : 'gray'}
          p={2}
          borderRadius="md"
          cursor="pointer"
          _hover={{ bg: isLoading[index] ? 'gray.200' : 'gray.200' }}
          onClick={() => handleClick(law.link, index)}
        >
          <Icon as={AiOutlineDownload} />
          <Text>
          <Text fontSize={accessibility?.fonts?.medium}>
            {isLoading[index] ? 'Aguarde! Preparando o arquivo...' : law.name}
          </Text>
          </Text>
        </Stack>
      </PopoverTrigger>
      <PopoverContent boxShadow={'dark-lg'} alignItems={'left'} style={{ width: '340px', height: '150px'}}>
        <PopoverBody alignContent={'center'}>
          {selectedItemIndex === index && isLoading[index] && (
            <Alert status="info" textAlign="center">
              <AlertIcon />
              Aguarde...
            </Alert>
          )}
          {selectedItemIndex === index && !isLoading[index] && isDownloadCompleted[index] && downloadLinks[index] && (
            <>
              <Alert status="success" textAlign="center">
                <AlertIcon />
                Arquivo pronto para download!
              </Alert>
              <Button
                colorScheme="teal"
                variant="outline"
                padding="10px"
                marginTop={"20px"}
                onClick={() => {
                  const downloadUrl = `https://dadosabertos.mogidascruzes.sp.gov.br/api/download/downloadProxy2?filename=${downloadLinks[index]}`;
                  handleDownload(downloadUrl);
                }}
              >
                Acessar o arquivo
              </Button>
              <br />
            </>
          )}
        </PopoverBody>
      </PopoverContent>
    </Popover>
  </Stack>
))}
      </Stack>
      <Stack direction="column" flex={1}>
        <div style={{ height: "30%", width: "100%" }}>
        </div>
      </Stack>
    </Stack>
  );
};

export default PlanContainerLaw;
