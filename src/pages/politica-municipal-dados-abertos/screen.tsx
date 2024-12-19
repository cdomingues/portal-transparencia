import React from "react";
import ContainerBasic from "../../components/Container/Basic";
import publicRoutes from "../../routes/public";
import { Box, Divider, Link, ListItem, Stack, Text, UnorderedList, useColorModeValue } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { isMobile } from "react-device-detect";
import { color } from "highcharts";
import { useFontSizeAccessibilityContext } from "../../context/fontSizeAccessibility";
import { FaDownload } from "react-icons/fa";

type PropsInput = {
  handler: {};
};

export const contentMapSite = {
  titlePage: "Política Municipal de Dados Abertos",
  description:
    "   ",
};





function Screen({ handler }: PropsInput) {
  const accessibility = useFontSizeAccessibilityContext();
  const title = contentMapSite?.titlePage;
  const description = contentMapSite?.description;
  const router = useRouter();
  
  return (
    <ContainerBasic title={title} description={description}>
      <Box
        m={0}
        bg={useColorModeValue("white", "gray.800")}
        
        padding={"15px"}
        rounded="md"
        overflow="hidden"
        maxWidth="100%"
        
        borderRadius="18px"
        marginBottom="15px"
      >
      
        
        
        

                          
<Link pl="7px" href='http://leismunicipa.is/1uwq2' target="blank" style={{ color: "#db334f" }}> 
            
http://leismunicipa.is/1uwq2
                
              </Link>
                          
                          
                      



                        

<Text fontSize="large"  paddingLeft="5px" pb="15px">
Normativa que institui a Política Municipal de Dados Abertos do Município de Mogi das Cruzes.
</Text>


       

      </Box>
    </ContainerBasic>
  );
}

export default Screen;
