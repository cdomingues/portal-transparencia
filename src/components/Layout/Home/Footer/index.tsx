import React, { ReactNode } from "react";
import {
  Box,
  Container,
  Link,
  SimpleGrid,
  Stack,
  Text,
  Flex,
  useColorModeValue,
  Image,
  useColorMode,
} from "@chakra-ui/react";
import logo from "../../../../assets/images/Brasao_horizontal_normal.png";
import logoDark from "../../../../assets/images/Brasao_horizontal_branco.png";
import { useFontSizeAccessibilityContext } from "../../../../context/fontSizeAccessibility";
import seloTansparencia2022 from "../../../../assets/images/selo_ouro (1).png"
import seloTansparencia2023 from "../../../../assets/images/selo_transparencia_ouro-2023.png"
import seloTansparencia2024 from "../../../../assets/images/selo_transparencia_ouro-2024.png"
import pnpc from "../../../../assets/images/logo-PNPC.png"
//import PageViewCounter from "../../../PageView";

function ListHeader({ children }: { children: ReactNode }) {
  const accessibility = useFontSizeAccessibilityContext();
  return (
    
    <Text fontSize={accessibility?.fonts?.large}  fontWeight="500"  mb={2}>
      {children}
    </Text>
  );
}

export default function LargeWithLogoCentered() {
  const accessibility = useFontSizeAccessibilityContext();
  const { colorMode } = useColorMode();
  return (
    <Box
      bg={useColorModeValue("white", "gray.900")}
      color={useColorModeValue("gray.700", "gray.200")}
    >
      <Container
        as={Stack}
        maxW="7xl"
        py={5}
        borderTop="1px"
        borderTopColor={useColorModeValue("gray.200", "gray.700")}
        fontSize={accessibility?.fonts?.regular}
        
      >
        <SimpleGrid columns={{ base: 1, sm: 2, md: 4 }} spacing={10}>
          <Stack align="flex-start"></Stack>
         
          <Stack align="flex-start">
            <ListHeader>Endereço</ListHeader>
            <Text>  Prefeitura de Mogi das Cruzes</Text>
            <Text>
          
              Av. Ver. Narciso Yague Guimarães, 277  Centro Cívico -
              08780-900
            </Text>
           
          </Stack>
          <Stack align="flex-start">
            <ListHeader>Fale Conosco</ListHeader>
            <Text>Funcionamento: Segunda a sexta, das 8 às 17 horas</Text>
            <Text>Telefone: 4798-5000</Text>
            <Text>Serviços: 162</Text>
            <Text>Ouvidoria: 156</Text>
            <Text>Semae: 115</Text>
            <Text>Saúde: 160</Text>
            <Text>Guarda Municipal: 153</Text>
           
            
          </Stack>
        </SimpleGrid>
      </Container>
      <Box py={10}>
        <Flex
          align="center"
          _before={{
            content: '""',
            borderBottom: "1px solid",
            borderColor: useColorModeValue("gray.200", "gray.700"),
            flexGrow: 1,
            mr: 8,
          }}
          _after={{
            content: '""',
            borderBottom: "1px solid",
            borderColor: useColorModeValue("gray.200", "gray.700"),
            flexGrow: 1,
            ml: 8,
          }}
        >
          <Image alt="logo" width="250px"  src={colorMode === "dark" ? logoDark.src : logo.src} />
        </Flex>

        <Text pt={6} fontSize="sm" textAlign="center">
          © {new Date().getFullYear()} PMMC. Todos os direitos reservados
        </Text> 
        <Flex
          align="center"
          mt="20px"
          _before={{
            content: '""',
            borderBottom: "1px solid",
            borderColor: useColorModeValue("white", "gray.700"),
            flexGrow: 1,
            mr: 8,
          }}
          _after={{
            content: '""',
            borderBottom: "1px solid",
            borderColor: useColorModeValue("white", "gray.700"),
            flexGrow: 1,
            ml: 8,
          }}
        >
          
          <Image alt="logo" width="160px" pr="30px" src={seloTansparencia2022.src}/>
        <Image alt="logo" width="160px" pr="30px"  src={seloTansparencia2023.src} />
        <Image alt="logo" width="160px" pr="30px"  src={seloTansparencia2024.src} />
        <Image alt="logo" width="160px" pr="30px" src={pnpc.src} />
        
        </Flex>
       
      </Box>
    </Box>
  );
}
