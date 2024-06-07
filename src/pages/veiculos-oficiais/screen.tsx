import React from "react";
import ContainerBasic from "../../components/Container/Basic";
import publicRoutes from "../../routes/public";
import { Accordion, AccordionButton, AccordionIcon, AccordionItem, AccordionPanel, Box, Button, Flex, Link, Stack, Text, useColorModeValue } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { isMobile } from "react-device-detect";
import { color } from "highcharts";
import { useFontSizeAccessibilityContext } from "../../context/fontSizeAccessibility";
import Video from "../../components/Videos";

type PropsInput = {
  handler: {};
};

export const contentMapSite = {
  titlePage: "Utilização de Veículos Oficiais",
  description:
    "Confira aqui as informações sobre o uso dos veículos oficiais e a serviço da Administração Direta e Indireta da Prefeitura de Mogi das Cruzes",
};





function Screen({ handler }: PropsInput) {
  const accessibility = useFontSizeAccessibilityContext();
  const title = contentMapSite?.titlePage;
  const description = contentMapSite?.description;
  const url_video = "https://www.youtube.com/embed/K7_TUkedcGA?si=iPxaKODtZnboQT-_";
  const titulo = "O QUE SÃO AS SEIS MEDIDAS?";
  const router = useRouter();
  
  return (
    <ContainerBasic title={title} description={description}>
       <Video 
       url_video={url_video}
        titulo = {titulo}
       />
      <Box
        m={0}
        bg={useColorModeValue("white", "gray.800")}
        
        //padding={"10px"}
        rounded="md"
        overflow="hidden"
        maxWidth="100%"
        
        borderRadius="18px"
        marginBottom="15px"
      >

<Accordion allowToggle borderRadius={4}>
      
      
     
        <AccordionItem 
        bg={"gray.100"}
        pt={4}
        >
          <h2>
        <AccordionButton >
          <Box as="span" flex='1' textAlign='left' >
          Gabinete
          
          </Box>
          <Box marginRight="8px"></Box>
          <AccordionIcon />
        </AccordionButton>
      </h2>
       
      
        
      <AccordionPanel m={4} p={8} bg={"white"} borderRadius={4}>
      
          
         <Flex  >
            <Box flex="end" p={2} marginRight={5}>
           
              <br/></Box>
           
           <Box  maxWidth="100%"  p={2}>
           <Link href="https://dadosadm.mogidascruzes.sp.gov.br/media/arquivos/5c40b003-acee-480d-b4b8-db268a53848a/2022-2023.xlsx" target="_blank"  >Veiculos Oficiais Gabinete 2022 e 2023</Link><p/>
           <Link href="https://dadosadm.mogidascruzes.sp.gov.br/media/arquivos/1cf11d6c-ba1d-4ad6-aaec-d356d8f5f4f8/veiculos_gabinete_set_out_2022.pdf" target="_blank"  >Veiculos Oficiais Gabinete setembro e outubro de 2022</Link><p/> 
           <Link href="https://dadosadm.mogidascruzes.sp.gov.br/media/arquivos/20b6334f-2187-4472-a39f-318fe85b703e/Controle_frota_-_fevereiro_2024.xlsx" target="_blank"  >Veiculos Oficiais Gabinete fevereiro de 2024  </Link><p/>
           <Link href="https://dadosadm.mogidascruzes.sp.gov.br/media/arquivos/405644fe-6719-415d-9235-d398382f0b2e/Controle_frota_-_mar%C3%A7o_2024.xlsx" target="_blank"  >Veiculos Oficiais Gabinete março de 2024 </Link><p/> 
           <Link href="https://dadosadm.mogidascruzes.sp.gov.br/media/arquivos/75afdb6f-c60f-4d23-9142-8dac4059c528/Controle_frota_-_abril_2024.xlsx" target="_blank"  >Veiculos Oficiais Gabinete abril de 2024 </Link><p/>
          
            
            </Box>
                    
            
          </Flex>
          
       
      </AccordionPanel>
    </AccordionItem>

    <AccordionItem 
        bg={"gray.100"}
        pt={4}
        >
          <h2>
        <AccordionButton >
          <Box as="span" flex='1' textAlign='left' >
          SEMAE
          
          </Box>
          <Box marginRight="8px"></Box>
          <AccordionIcon />
        </AccordionButton>
      </h2>
       
      
        
      <AccordionPanel m={4} p={8} bg={"white"} borderRadius={4}>
      
          
         <Flex  >
            <Box flex="end" p={2} marginRight={5}>
           
              <br/></Box>
           
           <Box  maxWidth="100%"  p={2}>
           <Link href="https://dadosadm.mogidascruzes.sp.gov.br/media/arquivos/7a50794d-14d0-4c63-9f0c-1cda64070290/Quilometragem_1semestre_2022.xls" target="_blank"  >Veiculos Oficiais SEMAE 1º semestre de 2022</Link><p/>
           <Link href="https://dadosadm.mogidascruzes.sp.gov.br/media/arquivos/bd708522-d07f-4b8e-a01f-5c8f5d6d1bdd/Quilometragem_2semestre_2022.xls" target="_blank"  >Veiculos Oficiais SEMAE 2º semestre de 2022</Link><p/> 
           <Link href="https://dadosadm.mogidascruzes.sp.gov.br/media/arquivos/3c8cddb4-3bbf-47f1-aebe-c39cedf1bc75/Quilometragem_1semestre_2023.xls" target="_blank"  >Veiculos Oficiais SEMAE 1º semestre de 2023 </Link><p/>
           <Link href="https://dadosadm.mogidascruzes.sp.gov.br/media/arquivos/012f4b62-128c-4b73-b288-2ba81b428416/Quilometragem_2semestre_2023.xls" target="_blank"  >Veiculos Oficiais SEMAE 2º semestre de 2024 </Link><p/> 
           <Link href="https://dadosadm.mogidascruzes.sp.gov.br/media/arquivos/9b6c13f6-a750-487b-a6b9-8967567e9943/Quilometragem_1_jan-2024.xls" target="_blank"  >Veiculos Oficiais SEMAE janeiro de 2024 </Link><p/>
           <Link href="https://dadosadm.mogidascruzes.sp.gov.br/media/arquivos/2ca4b6ed-0e3c-4349-b4fd-dbad4fcd0332/Quilometragem_2_fev-2024.xls" target="_blank"  >Veiculos Oficiais SEMAE fevereiro de 2024</Link><p/>
           <Link href="https://dadosadm.mogidascruzes.sp.gov.br/media/arquivos/be6e3c12-ad24-4fd4-93fc-10d7bc876090/Quilometragem_3_mar-2024.xls" target="_blank"  >Veiculos Oficiais SEMAE março de 2024</Link><p/>
             
            </Box>
                    
            
          </Flex>
          
       
      </AccordionPanel>
    </AccordionItem>      
    <AccordionItem 
        bg={"gray.100"}
        pt={4}
        >
          <h2>
        <AccordionButton >
          <Box as="span" flex='1' textAlign='left' >
          SEPLAG
          
          </Box>
          <Box marginRight="8px"></Box>
          <AccordionIcon />
        </AccordionButton>
      </h2>
       
      
        
      <AccordionPanel m={4} p={8} bg={"white"} borderRadius={4}>
      
          
         <Flex  >
            <Box flex="end" p={2} marginRight={5}>
           
              <br/></Box>
           
           <Box  maxWidth="100%"  p={2}>
           <Link href="https://dadosadm.mogidascruzes.sp.gov.br/media/arquivos/9843e087-9cc1-4472-a32c-2d07351c2239/Abril_-_2022.pdf" target="_blank"  >Veiculos Oficiais SEPLAG abril de 2022</Link><p/>
           <Link href="https://dadosadm.mogidascruzes.sp.gov.br/media/arquivos/40962686-e848-4ea5-88f2-fabd2f9e154c/Abril-_2023.pdf" target="_blank"  >Veiculos Oficiais SEPLAG abril de 2023</Link><p/> 
           <Link href="https://dadosadm.mogidascruzes.sp.gov.br/media/arquivos/85c8390e-76c7-460b-a46c-42db9f263151/2022-2023.pdf" target="_blank"  >Veiculos Oficiais SEPLAG 2022 e 2023</Link><p/>
           <Link href="https://dadosadm.mogidascruzes.sp.gov.br/media/arquivos/d13d600b-68b0-467a-885d-b218e0216ab6/Julho-_2022.pdf" target="_blank"  >Veiculos Oficiais SEPLAG julho de 2022</Link><p/> 
           <Link href="https://dadosadm.mogidascruzes.sp.gov.br/media/arquivos/11b7b892-67a6-4def-9d08-e0d6b2af2410/Mar%C3%A7o-_2022_.pdf" target="_blank"  >Veiculos Oficiais SEPLAG março de 2022</Link><p/>
           <Link href="https://dadosadm.mogidascruzes.sp.gov.br/media/arquivos/c9ce9876-e523-4a47-a5fb-d37ff3034995/Mar%C3%A7o_2022.pdf" target="_blank"  >Veiculos Oficiais SEPLAG março de 2022</Link><p/>
           <Link href="https://dadosadm.mogidascruzes.sp.gov.br/media/arquivos/e362070a-2735-41d9-b17f-18ec0c368e97/Setembro_2023.pdf" target="_blank"  >Veiculos Oficiais SEPLAG setembro de 2023</Link><p/>
            
            </Box>
                    
            
          </Flex>
          
       
      </AccordionPanel>
    </AccordionItem>      
    <AccordionItem 
        bg={"gray.100"}
        pt={4}
        >
          <h2>
        <AccordionButton >
          <Box as="span" flex='1' textAlign='left' >
          SMAA
          
          </Box>
          <Box marginRight="8px"></Box>
          <AccordionIcon />
        </AccordionButton>
      </h2>
       
      
        
      <AccordionPanel m={4} p={8} bg={"white"} borderRadius={4}>
      
          
         <Flex  >
            <Box flex="end" p={2} marginRight={5}>
           
              <br/></Box>
           
           <Box  maxWidth="100%"  p={2}>
            
           <Link href="https://dadosadm.mogidascruzes.sp.gov.br/media/arquivos/ac6ac01c-0e45-4c0f-9275-f3d7160be8df/SMAA_setembro_2022.pdf" target="_blank"  >Veiculos Oficiais SMAA setembro de 2022 </Link><p/>
           <Link href="https://dadosadm.mogidascruzes.sp.gov.br/media/arquivos/ae75b041-3e7a-4232-8549-225bca77cf18/SMAA_outubro_2022.pdf" target="_blank"  >Veiculos Oficiais SMAA  outubro de 2022</Link><p/>
           <Link href="https://dadosadm.mogidascruzes.sp.gov.br/media/arquivos/1738b134-6eff-4beb-868e-e6d07067432a/2023-2024.pdf" target="_blank"  >Veiculos Oficiais SMAA 2023 e 2024</Link><p/>
           <Link href="https://dadosadm.mogidascruzes.sp.gov.br/media/arquivos/04381d99-25c8-4ba5-973e-c99f423e157d/Dezembro_2023.xlsx" target="_blank"  >Veiculos Oficiais SMAA dezembro de 2023 </Link><p/> 
           <Link href="https://dadosadm.mogidascruzes.sp.gov.br/media/arquivos/e482993b-140d-4885-90fa-082089b90465/SMAA_nov_dez_2024.pdf" target="_blank"  >Veiculos Oficiais SMAA novembro e dezembro de 2024 </Link><p/> 
           <Link href="https://dadosadm.mogidascruzes.sp.gov.br/media/arquivos/af3d3b30-edeb-492a-b2de-e3976abe6c6e/Fev_RELAT%C3%93RIO_USO_DE_VE%C3%8DCULO_v2_respostas__g6j93yW.pdf" target="_blank"  >Veiculos Oficiais SMAA janeiro de 2024   </Link><p/>
            
            </Box>
                    
            
          </Flex>
          
       
      </AccordionPanel>
    </AccordionItem>      
    <AccordionItem 
        bg={"gray.100"}
        pt={4}
        >
          <h2>
        <AccordionButton >
          <Box as="span" flex='1' textAlign='left' >
          SMAPA
          
          </Box>
          <Box marginRight="8px"></Box>
          <AccordionIcon />
        </AccordionButton>
      </h2>
       
      
        
      <AccordionPanel m={4} p={8} bg={"white"} borderRadius={4}>
      
          
         <Flex  >
            <Box flex="end" p={2} marginRight={5}>
           
              <br/></Box>
           
           <Box  maxWidth="100%"  p={2}>
           <Link href="https://dadosadm.mogidascruzes.sp.gov.br/media/arquivos/8824e2e9-fb31-40ac-8b2b-37e337e01836/SMAPA_2022.pdf" target="_blank"  >Veiculos Oficiais SMAPA 2022 </Link><p/>
           <Link href="https://dadosadm.mogidascruzes.sp.gov.br/media/arquivos/e87a1325-3752-44e5-b3ca-c5eefb177217/SMAPA_janeiro_2023.pdf" target="_blank"  >Veiculos Oficiais SMAPA janeiro de 2023</Link><p/> 
           <Link href="https://dadosadm.mogidascruzes.sp.gov.br/media/arquivos/81cbf9b7-9c29-4d8c-9d11-f5f20f81746f/SMAPA_fevereiro_2023.pdf" target="_blank"  >Veiculos Oficiais SMAPA fevereiro de 2024  </Link><p/>
           <Link href="https://dadosadm.mogidascruzes.sp.gov.br/media/arquivos/9c4d2589-fbd4-45c3-96b5-fe720b1d8b4e/SMAPA_marco_2023.pdf" target="_blank"  >Veiculos Oficiais SMAPA março de 2023 </Link><p/> 
           <Link href="https://dadosadm.mogidascruzes.sp.gov.br/media/arquivos/9511cd49-19a3-422e-b3f0-ad7ae6843fa6/SMAPA_JAN_2024.pdf" target="_blank"  >Veiculos Oficiais SMAPA janeiro de 2024 </Link><p/>
           <Link href="https://dadosadm.mogidascruzes.sp.gov.br/media/arquivos/67000d63-4fde-4d8e-9b9b-d82d63307333/SMAPA_FEV_2024.pdf" target="_blank"  >Veiculos Oficiais SMAPA fevereiro de 2024</Link><p/>
           <Link href="https://dadosadm.mogidascruzes.sp.gov.br/media/arquivos/bfe24368-ecdb-488a-9458-2e152e7017ca/SMAPA_FEV_MAR_2024.pdf" target="_blank"  >Veiculos Oficiais SMAPA fevereiro e março de 2024 </Link><p/> 
           <Link href="https://dadosadm.mogidascruzes.sp.gov.br/media/arquivos/4d61dedf-0dfb-428e-a296-4841230b8aad/SMAPA_MAR_2024.pdf" target="_blank"  >Veiculos Oficiais SMAPA marçp de 2024 </Link><p/>
           <Link href="https://dadosadm.mogidascruzes.sp.gov.br/media/arquivos/605e5d0b-8ef1-4ada-b6e6-6987ae669229/SMAPA_ABR_2024.pdf" target="_blank"  >Veiculos Oficiais SMAPA abril de 2024</Link><p/>
            
            </Box>
                    
            
          </Flex>
          
       
      </AccordionPanel>
    </AccordionItem>      
    <AccordionItem 
        bg={"gray.100"}
        pt={4}
        >
          <h2>
        <AccordionButton >
          <Box as="span" flex='1' textAlign='left' >
          SME
          
          </Box>
          <Box marginRight="8px"></Box>
          <AccordionIcon />
        </AccordionButton>
      </h2>
       
      
        
      <AccordionPanel m={4} p={8} bg={"white"} borderRadius={4}>
      
          
         <Flex  >
            <Box flex="end" p={2} marginRight={5}>
           
              <br/></Box>
           
           <Box  maxWidth="100%"  p={2}>
           <Link href="https://dadosadm.mogidascruzes.sp.gov.br/media/arquivos/b292d157-8461-4bc4-bba3-60b4f84180ed/Relat%C3%B3rio_-_Ve%C3%ADculos_-_DTE.xlsx" target="_blank"  >Veiculos Oficiais SME - veiculos DTE</Link><p/>
           <Link href="https://dadosadm.mogidascruzes.sp.gov.br/media/arquivos/4d82068f-3d08-46c3-bbbd-422fce0f8ab5/viagens-transporte.xlsx" target="_blank"  >Veiculos Oficiais SME - viagens e trasportes</Link><p/> 
        
            
            </Box>
                    
            
          </Flex>
          
       
      </AccordionPanel>
    </AccordionItem>      
    <AccordionItem 
        bg={"gray.100"}
        pt={4}
        >
          <h2>
        <AccordionButton >
          <Box as="span" flex='1' textAlign='left' >
          SMS
          
          </Box>
          <Box marginRight="8px"></Box>
          <AccordionIcon />
        </AccordionButton>
      </h2>
       
      
        
      <AccordionPanel m={4} p={8} bg={"white"} borderRadius={4}>
      
          
         <Flex  >
            <Box flex="end" p={2} marginRight={5}>
           
              <br/></Box>
           
           <Box  maxWidth="100%"  p={2}>
           <Link href="https://dadosadm.mogidascruzes.sp.gov.br/media/arquivos/391ca9b1-c08d-4b8b-9d2b-656c68504315/SMS_setembro_outubro.pdf" target="_blank"  >Veiculos Oficiais SMS - setembro e outubro de 2022 2022 e 2023</Link><p/>
           <Link href="https://dadosadm.mogidascruzes.sp.gov.br/media/arquivos/e0a2fcbf-c92b-4e16-ae57-24016804be38/Outubro-Novembro_2022.pdf" target="_blank"  >Veiculos Oficiais SMS - outubro e novembro de 2022</Link><p/> 
           <Link href="https://dadosadm.mogidascruzes.sp.gov.br/media/arquivos/8a2b7737-fdd2-4381-b4a5-0e541ed058d5/SMS_novembro_2023.pdf" target="_blank"  >Veiculos Oficiais SMS novembro de 2023  </Link><p/>
           <Link href="https://dadosadm.mogidascruzes.sp.gov.br/media/arquivos/1aea0933-b753-4611-8920-cd1733b27ef0/2023-2024.xlsx" target="_blank"  >Veiculos Oficiais SMS 2023 e 2024</Link><p/> 
          
            
            </Box>
                    
            
          </Flex>
          
       
      </AccordionPanel>
    </AccordionItem>      
    <AccordionItem 
        bg={"gray.100"}
        pt={4}
        >
          <h2>
        <AccordionButton >
          <Box as="span" flex='1' textAlign='left' >
          SMU
          
          </Box>
          <Box marginRight="8px"></Box>
          <AccordionIcon />
        </AccordionButton>
      </h2>
       
      
        
      <AccordionPanel m={4} p={8} bg={"white"} borderRadius={4}>
      
          
         <Flex  >
            <Box flex="end" p={2} marginRight={5}>
           
              <br/></Box>
           
           <Box  maxWidth="100%"  p={2}>
           <Link href="https://dadosadm.mogidascruzes.sp.gov.br/media/arquivos/40657e7c-082e-4e6f-bd23-fe19304ddbd8/Utiliza%C3%A7%C3%A3o_veiculo_13-09_a_13-10.pdf" target="_blank"  >Veiculos oficiais SMU - setembro e outubro 2023</Link><p/>
           <Link href="https://dadosadm.mogidascruzes.sp.gov.br/media/arquivos/9f334c0f-57ca-4919-8d40-273d93f9a759/Utiliza%C3%A7%C3%A3o_v%C3%A9%C3%ADculo_14-10_a_13-11.pdf" target="_blank"  >Veiculos Oficiais - SMU - outubro e novembro 2023</Link><p/> 
           <Link href="https://dadosadm.mogidascruzes.sp.gov.br/media/arquivos/1a6a18e0-687a-452d-979e-cac8594fdff1/14-11_a_08-12.pdf" target="_blank"  >Veiculos oficiais SMU - novembro e dezembro 2023</Link><p/>
           <Link href="https://dadosadm.mogidascruzes.sp.gov.br/media/arquivos/79d76c03-474f-4b69-8dfc-8a14a87f3d6d/14-11_a_08-12_1.pdf" target="_blank"  >Veiculos oficiais SMU - janeiro - fevereiro - março de 2024 </Link><p/> 
           <Link href="https://dadosadm.mogidascruzes.sp.gov.br/media/arquivos/94d71535-7a93-42ce-a434-a188c6e40644/14-01_a_08-02.pdf" target="_blank"  >	Veiculos oficiais SMU - janeiro - fevereiro de 2024</Link><p/>
           <Link href="https://dadosadm.mogidascruzes.sp.gov.br/media/arquivos/79d76c03-474f-4b69-8dfc-8a14a87f3d6d/14-11_a_08-12_1.pdf" target="_blank"  >Veiculos oficiais SMU - dez 2023 - janeiro 2024</Link><p/>
            
            </Box>
                    
            
          </Flex>
          
       
      </AccordionPanel>
    </AccordionItem>    
    <AccordionItem 
        bg={"gray.100"}
        pt={4}
        >
          <h2>
        <AccordionButton >
          <Box as="span" flex='1' textAlign='left' >
          PGM
          
          </Box>
          <Box marginRight="8px"></Box>
          <AccordionIcon />
        </AccordionButton>
      </h2>
       
      
        
      <AccordionPanel m={4} p={8} bg={"white"} borderRadius={4}>
      
          
         <Flex  >
            <Box flex="end" p={2} marginRight={5}>
           
              <br/></Box>
           
           <Box  maxWidth="100%"  p={2}>
           <Link href="https://dadosadm.mogidascruzes.sp.gov.br/media/arquivos/4665f9af-7b8d-4a23-9a85-2c2f963dba6d/6_Medidas_ve%C3%ADculos_oficiais_-_PGM.xlsx" target="_blank"  >Veiculos Oficiais PGM 2024</Link><p/>
          
            
            </Box>
                    
            
          </Flex>
          
       
      </AccordionPanel>
    </AccordionItem>        
      </Accordion>

      </Box>
    </ContainerBasic>
  );
}

export default Screen;
