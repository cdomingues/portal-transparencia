import { useColorModeValue, Box, Button, Stack, Table, Thead, Tr, Th, Tbody, Td, Input, Text,Accordion, AccordionItem, AccordionButton, AccordionIcon, AccordionPanel, Flex, Link } from "@chakra-ui/react";
import React, { useState } from "react";
import ContainerBasic from "../../../components/Container/Basic";
import colors from "../../../styles/colors";
import usePagina from "../../../hooks/usePagina";

function Screen() {
const {paginaData, loadings, error} = usePagina("77");

  if (loadings) {
        return <Text>Carregando conteúdo...</Text>;
      }
    
     if (error) {
      return <Text>Erro ao carregar página: {(error as Error).message}</Text>;
    }
    
      if (!paginaData) {
        return <Text>Página não encontrada</Text>;
      }
    
      const { titulo: titlePage, descricao: description, conteudo } = paginaData;

  return (
    <ContainerBasic title={titlePage} description={description}>
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

      <Accordion allowToggle borderRadius={4} mt='15px'>
                
                  <AccordionItem  pt={4} borderRadius='15px' border='1px solid ' mb='15px'>
                    <h2>
                      <AccordionButton>
                        <Box as="span" flex='1' textAlign='center' fontWeight='bold' fontSize='l'>
                          DOAÇÃO DE ÁREAS COM ENCARGOS
                        </Box>
                        <AccordionIcon />
                      </AccordionButton>
                    </h2>
                    <AccordionPanel m={4} p={8}  borderRadius={4}>
                      <Flex flexDirection='column'>
                       
                    <Text >
                   A Prefeitura de Mogi das Cruzes realizou, ao longo dos anos, <strong>doações de terrenos públicos com encargos</strong> para incentivar a instalação e expansão de empresas no município. Essas doações foram feitas com base em leis municipais específicas que definem as condições e exigências para que as empresas recebam e utilizem os terrenos.
                   
                   <br/>
                   <strong>Base Legal</strong>
                   <br/>
                   As principais leis que regulamentaram as doações com encargos foram: 
                    <ul style={{ paddingLeft: "2em" }}>
                    <li >Lei Municipal nº 5.266, de 24 de setembro de 2001 </li>
                    <li >Lei Municipal nº 5.928, de 26 de outubro de 2006</li>      
                    </ul>              
                    <br/>
Essas normas autorizavam a doação de áreas municipais a empresas comprometidas com o desenvolvimento local, prevendo contrapartidas como geração de empregos e tributos. 
 <br/>
 A doação de áreas públicas foi feita por meio de <strong>leis específicas para cada empresa</strong>. Veja alguns exemplos: 
  <ul style={{ paddingLeft: "2em" }}>
    <li><strong>TROPICAL FRESH ALIMENTOS S/A</strong> – Lei nº 5.948/2006 </li>
    <li><strong> JATOBÁ IND. DE MADEIRAS LTDA </strong>– Lei nº 5.956/2007 </li>
    <li><strong> TECNOCURVA IND. DE PEÇAS AUTOMOBILÍSTICAS LTDA</strong>– Lei nº 6.109/2008</li>
    <li><strong> ARV IND. MAQ. DE EMBALAGENS </strong>– Lei nº 5.557/2003 </li>
    <li><strong> SLOTTER IND. DE EMBALAGENS LTDA </strong>– Leis nº 5.137/2000 e nº 7.880/2022 </li>
    <li>Entre outras (lista completa disponível mediante solicitação). </li>
  </ul>
  <br/>
  As empresas beneficiadas tinham a obrigação de cumprir os <strong>encargos previstos na legislação vigente à época da doação</strong>.
  <br/>
  <strong>Revogação das Leis Anteriores e Nova Regra </strong> 
  Em <strong>2017</strong>, as leis nº 5.266/2001 e nº 5.928/2006 foram revogadas pela <strong>Lei Complementar nº 134, de 26 de dezembro de 2017</strong>. 
<br/>
Atualmente, os encargos e procedimentos para as doações com encargos são regidos pela <strong>Lei Municipal nº 7.492, de 06 de agosto de 2019</strong>, que continua com o objetivo de promover o desenvolvimento econômico, geração de empregos e arrecadação de tributos. 
<br/>
<strong>O Que é a Desoneração? </strong>
<br/>
A <strong>desoneração</strong> é o procedimento pelo qual a empresa que recebeu um imóvel público em doação comprova que cumpriu todos os encargos exigidos. Após essa comprovação, o imóvel passa a ser de propriedade definitiva da empresa, livre de obrigações com o município. 
<br/>
<strong>Requisitos para a Desoneração </strong>
<br/>
De acordo com o <strong>artigo 2º da Lei nº 7.492/2019</strong>, para pedir a desoneração, a empresa deve comprovar que: 
<br/>
<ul style={{ paddingLeft: "2em" }}>
  <li>Está operando no município há pelo menos <strong>10 anos</strong>;</li>
  <li>Mantém <strong>atividade econômica produtiva no local doado</strong>;</li>
  <li>Gera <strong>no mínimo 7 empregos a cada 1.000 m² de área utilizável</strong>;</li>
  <li>Está <strong>em dia com os tributos municipais</strong>;</li>
  <li>Respeita as <strong>normas urbanísticas e ambientais</strong>.</li>
</ul>
<br/>
<strong>Como Solicitar a Desoneração </strong>
<br/>
As empresas interessadas devem realizar o <strong>pedido pelo Sistema de Protocolo Geral da Prefeitura</strong>, apresentando: 
<br/>
<ul style={{paddingLeft: "2em"}}>
  <li>Requerimento de desoneração;</li>
  <li>Documentos da empresa (CNPJ, contrato social, alvarás etc.);</li>
  <li>Lei de doação do imóvel;</li>
  <li>Comprovação de empregos (via CAGED ou SEFIP);</li>
  <li>Certidões negativas de débitos municipais (IPTU, ISSQN, ITBI, taxas);</li>
  <li>“Ocupe-se” (certidão municipal), conclusão de obra e licença da CETESB.</li>
</ul>
<br/>
Outros documentos podem ser solicitados conforme o caso. 
<br/>
<strong>Casos em Que a Lei Não se Aplica </strong>
<br/>
A Lei nº 7.492/2019 <strong>não se aplica</strong> nos seguintes casos: 
<br/>
 <li>Imóveis já desonerados por cumprimento total de exigências anteriores;</li>
  <li>Quando houver <strong>sentença judicial de reversão da doação</strong>; </li>
  <li>Quando o imóvel estiver cumprindo outras obrigações <strong>mais benéficas e regulares do que as previstas na nova lei</strong>. </li>

                    </Text>
      
                   
                      </Flex>
                    </AccordionPanel>
                  </AccordionItem>
                     <AccordionItem  pt={4} borderRadius='15px' border='1px solid ' mb='15px'>
                    <h2>
                      <AccordionButton>
                        <Box as="span" flex='1' textAlign='center' fontWeight='bold' fontSize='l'>
                         RENÚNCIA DE RECEITA
                        </Box>
                        <AccordionIcon />
                      </AccordionButton>
                    </h2>
                    <AccordionPanel m={4} p={8}  borderRadius={4}>
                      <Flex flexDirection='column'>
                       
                    <Text >
<Text>
  A principal norma municipal que trata de incentivos fiscais é a <strong>Lei Municipal nº 7.436, de 2019</strong>, que institui o Programa Mogiano de Atração de Investimentos e Geração de Empregos (PROMAE Emprega Mogi).
  <br />
  <br />
  O objetivo do programa é estimular o <strong>desenvolvimento econômico local</strong>, por meio da instalação de novas empresas e da expansão de negócios já existentes no município, com foco na geração de empregos e arrecadação de tributos.
  <br />
  <br />
  <strong>Benefícios Previstos</strong>
  <br />
  O PROMAE concede incentivos fiscais e tributários, entre eles:
  <ul style={{ paddingLeft: "2em" }}>
    <li>
      <strong>Isenção de IPTU</strong><br />
      Para o imóvel onde funciona a unidade da empresa beneficiada.
    </li>
    <li>
      <strong>Redução de ISS para 2%</strong><br />
      Aplicável às atividades próprias da empresa beneficiada.
    </li>
    <li>
      <strong>Isenção de taxas para aprovação de projetos de construção civil</strong><br />
      Relacionadas às obras das empresas participantes.
    </li>
    <li>
      <strong>Isenção de ISS sobre obras de construção civil</strong><br />
      Relativas aos itens 07.02 e 07.05 da lista de serviços da Lei Complementar nº 26/2003.
    </li>
    <li>
      <strong>Isenção da Taxa de Fiscalização e Instalação de Funcionamento</strong><br />
      Voltada à atividade regular da empresa no município.
    </li>
    <li>
      <strong>Isenção de ITBI</strong><br />
      Do imóvel onde a empresa está localizada.
    </li>
  </ul>
</Text>

                    </Text>
                     
      
                   
                      </Flex>
                    </AccordionPanel>
                  </AccordionItem>

                   <AccordionItem  pt={4} borderRadius='15px' border='1px solid ' mb='15px'>
                    <h2>
                      <AccordionButton>
                        <Box as="span" flex='1' textAlign='center' fontWeight='bold' fontSize='l'>
                         INCENTIVO FISCAL PARA O SETOR DE TECNOLOGIA_
                        </Box>
                        <AccordionIcon />
                      </AccordionButton>
                    </h2>
                    <AccordionPanel m={4} p={8}  borderRadius={4}>
                      <Flex flexDirection='column'>
                       
                  <Text>
  <strong>O que é a Lei nº 7.912/2023?</strong>
  <br />
  A <strong>Lei Municipal nº 7.912, de 18 de abril de 2023</strong>, institui uma política de redução da alíquota do ISSQN (Imposto Sobre Serviços de Qualquer Natureza) para empresas do setor de Tecnologia da Informação e Comunicação (TIC).
  <br />
  <br />
  <strong>Qual é o objetivo?</strong>
  <br />
  A medida tem como finalidade:
  <ul style={{ paddingLeft: "2em" }}>
    <li>Estimular as atividades econômicas ligadas à tecnologia;</li>
    <li>Atrair novas empresas da área para o município;</li>
    <li>Incentivar o desenvolvimento local;</li>
    <li>Promover a geração de empregos qualificados.</li>
  </ul>
  <br />
  <strong>Qual o benefício concedido?</strong>
  <br />
  Empresas enquadradas nos CNAEs e itens de serviço específicos podem ter a <strong>alíquota do ISSQN reduzida para 2% (dois por cento)</strong>.
  <br />
  <br />
  <strong>Quem pode receber o benefício?</strong>
  <br />
  Para usufruir da redução de alíquota, a empresa deve:
  <ul style={{ paddingLeft: "2em" }}>
    <li>Atuar em atividades relacionadas à Tecnologia da Informação e Comunicação (TIC);</li>
    <li>Estar enquadrada nos CNAEs e itens da Lei de Serviços previstos na legislação;</li>
    <li>Ter sua solicitação aprovada pelo Conselho Municipal de Inovação e Tecnologia (CMIT);</li>
    <li>Passar pela análise da Secretaria de Desenvolvimento Econômico e Trabalho e da Secretaria de Finanças.</li>
  </ul>
</Text>                      </Flex>
                    </AccordionPanel>
                  </AccordionItem>
                  </Accordion>
      
      </Box>
    </ContainerBasic>
  );
}

export default Screen;
