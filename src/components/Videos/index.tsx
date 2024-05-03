import { Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalCloseButton,
    ModalBody,
    ModalFooter,
    useDisclosure, Text,
    Button,
    Box,
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    Spacer} from "@chakra-ui/react";
import { isMobile } from "react-device-detect";
import { useFontSizeAccessibilityContext } from "../../context/fontSizeAccessibility";
import { useState } from "react";
import { CsvItem, DisplayFlex } from "../Table/styles";
import { BiCameraMovie } from "react-icons/bi";
import colors from "../../styles/colors";
import { AiOutlineDatabase, AiOutlineFileText } from "react-icons/ai";
import CsvDownload from "react-json-to-csv";
interface VideoProps {
    loading?: boolean;
    url_video: string; 
    titulo: string;
  }

function Video ({loading = false, url_video, titulo}:VideoProps){
    const accessibility = useFontSizeAccessibilityContext();
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [modelType, setModelType] = useState("");
    const urlVideo = url_video
    const tituloVideo = titulo
   
    return(
        <>
        <Modal onClose={onClose} size={"xs"} isOpen={isOpen}>
        <ModalOverlay />
         (
          <ModalContent maxH="750" maxW="50%" alignSelf="center">
            <ModalHeader><Text fontSize={accessibility.fonts.large}>{tituloVideo}</Text></ModalHeader>
            <ModalCloseButton />
            <ModalBody height={450} width={600} bg="white">
             {/*  <iframe
                style={{ paddingLeft: "8%", textAlign: "center" }}
                width="600"
                height="450"
                src={urlVideo}
                
              ></iframe> */}
              <iframe width="560" height="315" src={urlVideo} 
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                referrerPolicy="strict-origin-when-cross-origin" 
                allowFullScreen></iframe>
              
            </ModalBody>
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
        )
      </Modal>
      <DisplayFlex color="white" direction={isMobile ? "column" : "row"}>
        <Box p="4" pl={0}>
          <Button
            _hover={{ bg: "gray.200", color: "white" }}
            size="sm"
            bg="primary"
            color="white"
            leftIcon={<BiCameraMovie />}
            onClick={() => {
              setModelType("movie");
              onOpen();
            }}
            disabled={loading}
            style={{ width: 180 }}
          >
            <Text fontSize={accessibility.fonts.medium} color={colors.white}>Vídeo explicativo</Text>
           
          </Button>
        </Box>
       
        <Spacer />
      </DisplayFlex>
        </>
    )
}
export default Video