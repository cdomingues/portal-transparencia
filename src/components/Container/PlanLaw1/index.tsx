import { Stack, Link, Text, useColorModeValue, Icon, Select } from "@chakra-ui/react";
import React, { ReactNode } from "react";
import { isMobile } from "react-device-detect";
import { AiOutlineDownload } from "react-icons/ai";

type Law = {
  name: string;
  file: string;  // Usando 'file' em vez de 'link'
};

type PropsInput = {
  laws: Law[];
  selectOptions: Array<string | number>;
  selectValue: number;
  handleSelectValue: (value: number) => void;
  children?: ReactNode;
};

const PlanContainerLaw = ({ laws, selectOptions, selectValue, handleSelectValue }: PropsInput) => {
  const bgColor = useColorModeValue("white", "gray.800");
  const color = useColorModeValue("gray", "white");
  const hoverBgColor = useColorModeValue("gray.200", "gray.700");

  return (
    <Stack direction={isMobile ? "column" : "row"} flex={1}>
      <Stack direction="column" flex={3}>
        <Select
          minW={90}
          width="20%"
          bg={bgColor}
          value={selectValue}
          textAlign="center"
          mb={5}
          onChange={(event) => handleSelectValue(Number(event.target.value))}
        >
          {selectOptions.map((value, index) => (
            <option key={index} value={value}>{value}</option>
          ))}
        </Select>
        {laws.map((law, index) => (
          <Link
            key={index}
            href={law.file}
            isExternal
            style={{ textDecoration: 'none' }}
          >
            <Stack
              direction="row"
              align="center"
              bg={bgColor}
              color={color}
              p={2}
              borderRadius="md"
              cursor="pointer"
              _hover={{ bg: hoverBgColor }}
            >
              <Icon as={AiOutlineDownload} />
              <Text>{law.name}</Text>
            </Stack>
          </Link>
        ))}
      </Stack>
      <Stack direction="column" flex={1}>
        {/* Outros componentes ou conteúdo */}
      </Stack>
    </Stack>
  );
};

export default PlanContainerLaw;
