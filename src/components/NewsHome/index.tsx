import {Box,Text,useColorModeValue,Image, Button } from "@chakra-ui/react";
//import JsonData from '../../../data/noticias.json'


type PropsInput = {
    titulo: string;
    descricao: string;
    link: string;
    foto: string;
    data_noticia: string;
       
    
}

function DisplayNews({titulo,descricao,link, foto,data_noticia,}:PropsInput){
   
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
       maxWidth="100%"
       borderRadius="18px"
       marginBottom="15px"
       >
        
       

          
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
          
          <Box display="flex" alignItems="center" flexDirection="column" >
          <Text color="gray.500" fontSize="smaller" paddingBottom="10px">
          {data_noticia}
          </Text>

           <Box display=  "flex" flexDirection="column" alignItems="flex-end" paddingBottom="10px">
  <Image maxWidth="280px" borderRadius="20px" alt="image" objectFit="cover" src={foto}></Image>
</Box> 

          <Button  
          
          onClick={() => window.open(link,"_blank")}
          >
            <Text color="gray.500">Leia mais ...</Text>
          </Button></Box>

          
    
    
    </Box>
   </Box>
            )
        
    

}

export default DisplayNews