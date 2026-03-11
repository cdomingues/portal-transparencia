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
  Divider,
} from "@chakra-ui/react";
import logo from "../../../../assets/images/Brasao_horizontal_normal.png";
import logoDark from "../../../../assets/images/Brasao_horizontal_branco.png";
import { useFontSizeAccessibilityContext } from "../../../../context/fontSizeAccessibility";
import timebrasil from "../../../../assets/images/SELO - MUNICIPIO PARTICIPANTE.png"
import seloTansparencia2023 from "../../../../assets/images/selo_transparencia_ouro-2023.png"
import seloTansparencia2024 from "../../../../assets/images/selo_transparencia_ouro-2024.png"
import pnpc from "../../../../assets/images/logo-PNPC.png"
import ccomon from '../../../../assets/images/creative_commons.png'
import radar_transparencia from '../../../../assets/images/RadardaTransparnciapublica.png'
import colors from "../../../../styles/colors";
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
         <Flex
  wrap="wrap"
  justify="center"
  align="center"
  mt={10}
  gap={6}
  px={[4, 8]}
>
  <Image
    alt="Creative Commons"
    src={ccomon.src}
    width={["120px", "160px", "180px"]}
    border="1px solid lightgrey"
    p={4}
    borderRadius="12px"
    bg="white"
  />
  <Link href="https://radardatransparencia.atricon.org.br/radar-da-transparencia-publica.html" target="_blank">
    <Image
      alt="Radar da Transparência"
      src={radar_transparencia.src}
      //width={["180px", "220px", "260px"]}
      height={"80px"}
      border="1px solid lightgrey"
      borderRadius="12px"
    />
  </Link>
  
  {/* <Image alt="Selo 2023" src={seloTansparencia2023.src} width={["120px", "140px", "160px"]} /> */}
  <Image alt="Selo 2024" src={seloTansparencia2024.src} height={"120px"} />
  <Image alt="PNPC" src={timebrasil.src} height={"120px"}  />
</Flex>
        <Divider />
        
      </Container>
      <Box py={10} bgColor={colors.transparenciaBlack} color={colors.white}>
      <SimpleGrid columns={{ base: 1, sm: 2, md: 4 }} spacing={10} mx='50px'>
        <Stack align="flex-start" > 
          <ListHeader>Canais Oficiais</ListHeader>
          <p>Siga-nos nas redes sociais</p>
          <Box display='flex' flexDirection='row' gap={2}>
             
                <a href="https://www.facebook.com/prefeituramogi" target="_blank">
                  <img src="https://www.mogidascruzes.sp.gov.br/public/site/img/rod-face.png" alt="Facebook"/>
                </a>
              

              
                <a href="https://www.instagram.com/prefeituramogi/" target="_blank">
                  <img src="https://www.mogidascruzes.sp.gov.br/public/site/img/icone_instagram_26.png" alt="Instagram"/>
                </a>
             

             
                <a href="https://twitter.com/PrefeituraMogi" target="_blank">
                  <img src="https://www.mogidascruzes.sp.gov.br/public/site/img/rod-twitter.png" alt="Twitter"/>
                </a>
              

             
                <a href="https://www.youtube.com/user/PrefeituraMogi" target="_blank">
                  <img src="https://www.mogidascruzes.sp.gov.br/public/site/img/rod-youtube.png" alt="YouTube"/>
                </a>
                </Box>


        </Stack>

          <Stack align="flex-start">
            <ListHeader>Prefeitura</ListHeader>
            <Text><a href="https://www.mogidascruzes.sp.gov.br/servicos">Carta de Serviços</a></Text>
            <Text><a href="https://www.mogidascruzes.sp.gov.br/noticias">Arquivo de Noticias</a></Text>
            <Text><a href="https://www.mogidascruzes.sp.gov.br/unidades-e-equipamentos">Mapa de Unidades</a></Text>
            <Text><a href="https://www.mogidascruzes.sp.gov.br/agenda-da-cidade/atracoes">Agenda da Cidade</a></Text>
            <Text><a href="https://www.mogidascruzes.sp.gov.br/pontos-turisticos">Pontos Turísticos</a></Text>
            <Text><a href=""></a></Text>



          </Stack>
         
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

        <Text pt={6} fontSize="sm" textAlign="center">
          © {new Date().getFullYear()} PMMC. Todos os direitos reservados
        </Text> 
       
       
      </Box>
    </Box>
  );
}
