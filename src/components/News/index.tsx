import {Box,Text,useColorModeValue,Image, Button, border } from "@chakra-ui/react";
import { isMobile } from "react-device-detect";
import { useFontSizeAccessibilityContext } from "../../context/fontSizeAccessibility";
//import JsonData from '../../../data/noticias.json'


type PropsInput = {
    titulo: string;
    descricao: string;
    link: string;
    foto: string;
    data_noticia: string;
     
    
    
}
//

function DisplayNews({titulo,descricao,link, foto,data_noticia,...rest}:PropsInput){
  const accessibility = useFontSizeAccessibilityContext();
            return(

              <a href={link} target="_blank" rel="noopener noreferrer">
                
                <Box 
                key={titulo}
      display="flex" justifyContent="flex-start" 
        m={0}
       bg={useColorModeValue("white", "gray.800")}
       boxShadow="2xl"
       rounded="md"
       overflow="hidden"
       maxWidth = "'100%'"
       borderRadius="18px"
       marginBottom="15px"
       _hover={{ bg: 'gray.100'}}
       >
        
        <Box display={{ base: "none", md: "flex" }} >
         <Image maxWidth={isMobile ? '400px' : '350px'}  alt="image" objectFit="cover" src={foto}></Image>
        </Box>

          
   <Box>
  
       <Text
            color={useColorModeValue("gray.700", "white")}
            fontSize={accessibility?.fonts?.large}
            fontFamily="body"
            padding="10px"
            flex="1"
          >
           {titulo}

          </Text>
          <Text
            color={useColorModeValue("gray.700", "white")}
            fontSize={accessibility?.fonts?.small}
            fontFamily="body"
            flex="end"
            padding="10px"
          >{descricao}
          
          </Text>
          
          <Box display="flex" alignItems="right" flexDirection="column" >
          <Text color="gray.500" fontSize={accessibility?.fonts?.regular} padding="10px">
          {data_noticia}
          </Text>

           <Box display={{ base: "flex", md: "none" }} flexDirection="column" alignItems="center">
  <Image justifyContent={'center'} maxWidth="380px" alt="image" objectFit="cover" src={foto}></Image>
</Box>
          </Box>
    </Box>
   </Box>
   </a>
            );
}

export default DisplayNews