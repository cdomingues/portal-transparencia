import {Box,Text,useColorModeValue,Image, Button } from "@chakra-ui/react";
import { isMobile } from "react-device-detect";
//import JsonData from '../../../data/noticias.json'


type PropsInput = {
    titulo: string;
    descricao: string;
    link: string;
    foto: string;
    data_noticia: string;
     
    
    
}

function DisplayNews({titulo,descricao,link, foto,data_noticia,...rest}:PropsInput){
   
            return(
                
                <Box 
                key={titulo}
      display="flex" justifyContent="flex-start" 
        m={0}
       bg={useColorModeValue("white", "gray.800")}
       boxShadow="2xl"
       rounded="md"
       p={3}
       overflow="hidden"
       maxWidth = {isMobile ? '100%' : '80%'}
       borderRadius="18px"
       marginBottom="15px"
       >
        
        <Box display={{ base: "none", md: "flex" }} >
         <Image maxWidth="350px"  borderRadius="20px" alt="image" objectFit="cover" src={foto}></Image>
        </Box>

          
   <Box paddingLeft="10px" >
  
       <Text
            color={useColorModeValue("gray.700", "white")}
            fontSize="medium"
            fontFamily="body"
            paddingBottom="10px"
            flex="1"
          >
           {titulo}

          </Text>
          <Text
            color={useColorModeValue("gray.700", "white")}
            fontSize="small"
            fontFamily="body"
            flex="end"
            paddingBottom="10px"
          >{descricao}
          
          </Text>
          
          <Box display="flex" alignItems="right" flexDirection="column" >
          <Text color="gray.500" fontSize="smaller" paddingBottom="10px">
          {data_noticia}
          </Text>

           <Box display={{ base: "flex", md: "none" }} flexDirection="column" alignItems="center" paddingBottom="10px">
  <Image justifyContent={'center'} maxWidth="280px" borderRadius="20px" alt="image" objectFit="cover" src={foto}></Image>
</Box> 

          <Button
           minW={55}
           w={'100%'}
           _hover={{ bg: "gray.500", color: "white" }}
           bg="table.primary"
           color="white"
          onClick={() => window.open(link,"_blank")}
          >
            <Text>Leia mais ...</Text>
          </Button></Box>

          
    
    
    </Box>
   </Box>
            )
        
    

}

export default DisplayNews