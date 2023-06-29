import {Box,Text,useColorModeValue,Image, Button } from "@chakra-ui/react";
import JsonData from '../../../data/noticias.json'

type PropsInput = {
    titulo: string;
    descricao: string;
    link: string;
    foto: string;
    data_noticia: string;
}

function DisplayNews({}:PropsInput){
    const display = JsonData.map(
        (info)=>{
            return(
                
                <Box 
                key={info.titulo}
       display="flex" justifyContent="flex-start" 
       m={0}
       bg={useColorModeValue("white", "gray.800")}
       boxShadow="2xl"
       rounded="md"
       p={3}
       overflow="hidden"
       maxWidth="90%"
       borderRadius="18px"
       marginBottom="15px"
       >
          <Box display="flex" justifyContent="flex-start" >
            <Image width="350px" borderRadius="20px" alt="image" objectFit="cover" src={info.foto}></Image>
          </Box>
        <tr>
       
       
       
   </tr>
   <Box paddingLeft="10px">
       <Text
            color={useColorModeValue("gray.700", "white")}
            fontSize="medium"
            fontFamily="body"
            paddingBottom="10px"
            flex="1"
          >
           {info.titulo}

          </Text>
          <Text
            color={useColorModeValue("gray.700", "white")}
            fontSize="small"
            fontFamily="body"
            flex="end"
            paddingBottom="10px"
          >{info.descricao}
          
          </Text>
          
          <Box display="flex" flexDirection="row" >
          <Text color="gray.500" fontSize="smaller" paddingBottom="10px">
          {info.data_noticia}
          </Text>
          <Button  
          marginLeft="auto" 
          onClick={() => window.open(info.link,"_blank")}
          >
            <Text color="gray.500">Leia mais ...</Text>
          </Button></Box>

          
    
    
    </Box>
   </Box>
            )
        }
    )

    return( 
        display
    )
}

export default DisplayNews