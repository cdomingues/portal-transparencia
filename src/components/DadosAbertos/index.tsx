import CsvDownload from "react-json-to-csv";
import {
   
    Menu,
    MenuButton,
    Button,
    MenuList,
    MenuItem,
    Flex,
    Box,
    Spacer,
    Text,
    useDisclosure,
    SkeletonText,
    Skeleton,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalCloseButton,
    ModalBody,
    ModalFooter,
    Link,
    useColorMode,
    useColorModeValue,
  } from "@chakra-ui/react";
import { useState } from "react";
import { useFontSizeAccessibilityContext } from "../../context/fontSizeAccessibility";
import { CsvItem, DisplayFlex } from "../Table/styles";
import colors from "../../styles/colors";
import { isMobile } from "react-device-detect";
import { AiOutlineDatabase, AiOutlineFileText } from "react-icons/ai";
import { BiCameraMovie } from "react-icons/bi";


type Props = {
    
    data: Array<any>;
    loading?: boolean;
    withFilter?: boolean;
    openModal?: (value?: any) => void;
  };

  function DadosAbertos( {data, loading = false}: Props){
    const [modelType, setModelType] = useState("");
  const { isOpen, onOpen, onClose } = useDisclosure();

  const accessibility = useFontSizeAccessibilityContext();

  const exportJson = () => {
    const jsonString = `data:text/json;chatset=utf-8,${encodeURIComponent(
      JSON.stringify(data)
    )}`;
    const link = document.createElement("a");
    link.href = jsonString;
    link.download = 'obras.json';

    link.click();
  };


return(
    <>
<Modal onClose={onClose} size={"xs"} isOpen={isOpen}>
        <ModalOverlay />
        {modelType !== "movie" ? (
          <ModalContent alignSelf="center">
          
            <ModalCloseButton />
           
            <ModalFooter>
              
            </ModalFooter>
          </ModalContent>
        ) : (
          <ModalContent maxH="750" maxW="100%" alignSelf="center">
            <ModalHeader><Text fontSize={accessibility.fonts.large}>Video Explicativo</Text></ModalHeader>
            <ModalCloseButton />
           
            <ModalFooter>
              <Button
                _hover={{ bg: "gray.200", color: "white" }}
                onClick={onClose}
                bg="primary"
                color="white"
              >
                Fechar
              </Button>
            </ModalFooter>
          </ModalContent>
        )}
      </Modal>
      <DisplayFlex color="white" direction={isMobile ? "column" : "row"}>
       
        <Box p="4" pl={0}>
          <Menu>
            <MenuButton
              _hover={{ bg: "table.button.hover" }}
              size="sm"
              bg="table.primary"
              color="white"
              variant="solid"
              as={Button}
              leftIcon={<AiOutlineDatabase />}
              disabled={loading}
              style={{ width: 180 }}
              title="Clique para baixar os arquivos em formato csv ou json"
            >
              <Text fontSize={accessibility.fonts.medium} color={colors.white}>Dados Abertos</Text>
            </MenuButton>
            <MenuList color="table.primary" bg="white">
              <CsvItem>
                {!loading && (
                  <CsvDownload
                    style={{ width: "100%", textAlign: "left" }}
                    filename={'obras.csv'}
                    data={data}
                  >
                    <Text fontSize={accessibility.fonts.large}>.CSV</Text>
                  </CsvDownload>
                )}
              </CsvItem>
              <MenuItem onClick={() => exportJson()}><Text fontSize={accessibility.fonts.large}>.JSON</Text></MenuItem>
            </MenuList>
          </Menu>
        </Box>
        <Spacer />
      </DisplayFlex>

</>
)

  }

  export default DadosAbertos