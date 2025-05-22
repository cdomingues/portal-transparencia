import React from "react";

//import { PublicPolicyData } from "../../api/totalizador/politicas-publicas";

import {
  Box,
  Divider,
  Flex,
  Heading,
  Icon,
  Skeleton,
  Stack,
  Stat,
  StatGroup,
  StatHelpText,
  StatLabel,
  StatNumber,
  Button,
  Text,
  useColorModeValue,
  UnorderedList,
  ListItem,

} from "@chakra-ui/react";

import { isMobile } from "react-device-detect";


import useWindowDimensions from "../../../utils/getWindowSize";
import { useFontSizeAccessibilityContext } from "../../../context/fontSizeAccessibility";
import noticias from '../../../../data/noticias.json'

import DisplayNews from "../../../components/NewsHome";
import ContainerBasic from "../../../components/Container/Basic";
import Link from "next/link";





export const contentInitial = {
  titlePage: "Glossário de Termos Técnicos da LGPD ",
  description:
    "",
};

 function Aside() {
  return (
    <div style={{ width:"380px", justifyContent:"left"}}>

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

    
</Box>

    </div>
    

  );
} 


function HomeScreen() {
  
  const accessibility = useFontSizeAccessibilityContext();
  const titlePage = contentInitial?.titlePage;
  const description = contentInitial?.description;

  

  const { height, width } = useWindowDimensions();

  return (
     <ContainerBasic  title={titlePage} description={description}>
      <Box m={0}
bg={useColorModeValue("white", "gray.800")}

padding={"15px"}
rounded="md"
overflow="hidden"
maxWidth="100%"
borderRadius="18px"
marginBottom="15px">
     
      <Text align={isMobile ? "justify" : "left"} color="gray.500" fontSize={accessibility?.fonts?.regular} mb={1}>
  <strong>Agentes de tratamento:</strong> o Controlador e o Operador.
</Text>
<Text align={isMobile ? "justify" : "left"} color="gray.500" fontSize={accessibility?.fonts?.regular} mb={1}>
  <strong>Anonimização:</strong> utilização de meios técnicos razoáveis e disponíveis no momento do tratamento, por meio dos quais um dado perde a possibilidade de associação, direta ou indireta, a um indivíduo.
</Text>
<Text align={isMobile ? "justify" : "left"} color="gray.500" fontSize={accessibility?.fonts?.regular} mb={1}>
  <strong>Autoridade Nacional:</strong> órgão da administração pública responsável por zelar, implementar e fiscalizar o cumprimento desta Lei em todo o território nacional.
</Text>
<Text align={isMobile ? "justify" : "left"} color="gray.500" fontSize={accessibility?.fonts?.regular} mb={1}>
  <strong>Banco de dados:</strong> conjunto estruturado de dados pessoais, estabelecido em um ou em vários locais, em suporte eletrônico ou físico.
</Text>
<Text align={isMobile ? "justify" : "left"} color="gray.500" fontSize={accessibility?.fonts?.regular} mb={1}>
  <strong>Bloqueio:</strong> suspensão temporária de qualquer operação de tratamento, mediante guarda do dado pessoal ou do banco de dados.
</Text>
<Text align={isMobile ? "justify" : "left"} color="gray.500" fontSize={accessibility?.fonts?.regular} mb={1}>
  <strong>Consentimento:</strong> manifestação livre, informada e inequívoca pela qual o(a) titular concorda com o tratamento de seus dados pessoais para uma finalidade determinada. Esse é um fundamento essencial à LGP, sendo que o não consentimento é a exceção, pois só é possível processar dados, sem autorização do(a) cidadão(ã) quando essa ação for indispensável para o cumprimento de situações legais, previstas na LGPD e/ou em legislações anteriores, como a Lei de Acesso à Informação (LAI).
</Text>
<Text align={isMobile ? "justify" : "left"} color="gray.500" fontSize={accessibility?.fonts?.regular} mb={1}>
  <strong>Controlador:</strong> pessoa natural ou jurídica, de direito público ou privado, a quem competem as decisões referentes ao tratamento de dados pessoais.
</Text>
<Text align={isMobile ? "justify" : "left"} color="gray.500" fontSize={accessibility?.fonts?.regular} mb={1}>
  <strong>Dado anonimizado:</strong> dado relativo a titular que não possa ser identificado, considerando a utilização de meios técnicos razoáveis e disponíveis na ocasião de seu tratamento.
</Text>
<Text align={isMobile ? "justify" : "left"} color="gray.500" fontSize={accessibility?.fonts?.regular} mb={1}>
  <strong>Dado pessoal:</strong> informação relacionada à pessoa natural identificada ou identificável.
</Text>
<Text align={isMobile ? "justify" : "left"} color="gray.500" fontSize={accessibility?.fonts?.regular} mb={1}>
  <strong>Dado pessoal de criança e de adolescente:</strong> <Link href='http://www.planalto.gov.br/ccivil_03/leis/l8069.htm'><strong>o Estatuto da Criança e do Adolescente (ECA)</strong> </Link>considera criança a pessoa até 12 anos de idade incompletos e adolescente aquela entre 12 e 18 anos de idade. Em especial, a LGPD determina que as informações sobre o tratamento de dados pessoais de crianças e de adolescentes deverão ser fornecidas de maneira simples, clara e acessível, de forma a proporcionar a informação necessária aos pais ou ao(à) responsável legal e adequada ao entendimento da criança.
</Text>
<Text align={isMobile ? "justify" : "left"} color="gray.500" fontSize={accessibility?.fonts?.regular} mb={1}>
  <strong>Dado pessoal sensível:</strong> dado pessoal sobre origem racial ou étnica, convicção religiosa, opinião política, filiação a sindicato ou à organização de caráter religioso, filosófico ou político, dado referente à saúde ou à vida sexual, dado genético ou biométrico, quando vinculado a uma pessoa natural.
</Text>
<Text align={isMobile ? "justify" : "left"} color="gray.500" fontSize={accessibility?.fonts?.regular} mb={1}>
  <strong>Eliminação:</strong> exclusão de dado ou de conjunto de dados armazenados em banco de dados, independentemente do procedimento empregado.
</Text>
<Text align={isMobile ? "justify" : "left"} color="gray.500" fontSize={accessibility?.fonts?.regular} mb={1}>
  <strong>Encarregado:</strong> pessoa indicada pelo Controlador e Operador para atuar como canal de comunicação entre o controlador, os titulares dos dados e a Autoridade Nacional de Proteção de Dados (ANPD).
</Text>
<Text align={isMobile ? "justify" : "left"} color="gray.500" fontSize={accessibility?.fonts?.regular} mb={1}>
  <strong>Garantia da segurança da informação:</strong> capacidade de sistemas e organizações assegurarem a disponibilidade, a integridade, a confidencialidade e a autenticidade da informação.
</Text>
<Text align={isMobile ? "justify" : "left"} color="gray.500" fontSize={accessibility?.fonts?.regular} mb={1}>
  <strong>Interoperabilidade:</strong> é a capacidade de um sistema, informatizado ou não, de se comunicar de forma transparente com outro sistema, semelhante ou não a ele. A autoridade nacional poderá dispor sobre padrões de interoperabilidade para fins de portabilidade, livre acesso aos dados e segurança, assim como sobre o tempo de guarda dos registros, tendo em vista especialmente a necessidade e a transparência.
</Text>
<Text align={isMobile ? "justify" : "left"} color="gray.500" fontSize={accessibility?.fonts?.regular} mb={1}>
  <strong>Operador:</strong> pessoa natural ou jurídica, de direito público ou privado, que realiza o tratamento de dados pessoais em nome do controlador.
</Text>
<Text align={isMobile ? "justify" : "left"} color="gray.500" fontSize={accessibility?.fonts?.regular} mb={1}>
  <strong>Órgão de pesquisa:</strong> órgão ou entidade da administração pública direta ou indireta ou pessoa jurídica de direito privado sem fins lucrativos legalmente constituída sob as leis brasileiras, com sede e foro no País, que inclua em sua missão institucional ou em seu objetivo social ou estatutário a pesquisa básica ou aplicada de caráter histórico, científico, tecnológico ou estatístico.
</Text>
<Text align={isMobile ? "justify" : "left"} color="gray.500" fontSize={accessibility?.fonts?.regular} mb={1}>
  <strong>Relatório de impacto à proteção de dados pessoais:</strong> documentação do Controlador que contém a descrição dos processos de tratamento de dados pessoais que podem gerar riscos às liberdades civis e aos direitos fundamentais, bem como medidas, salvaguardas e mecanismos de mitigação de risco.
</Text>
<Text align={isMobile ? "justify" : "left"} color="gray.500" fontSize={accessibility?.fonts?.regular} mb={1}>
  <strong>Titular:</strong> pessoa natural a quem se referem os dados pessoais que são objeto de tratamento.
</Text>
<Text align={isMobile ? "justify" : "left"} color="gray.500" fontSize={accessibility?.fonts?.regular} mb={1}>
  <strong>Transferência internacional de dados:</strong> transferência de dados pessoais para país estrangeiro ou organismo internacional do qual o país seja membro.
</Text>
<Text align={isMobile ? "justify" : "left"} color="gray.500" fontSize={accessibility?.fonts?.regular} mb={1}>
  <strong>Tratamento:</strong> toda operação realizada com dados pessoais; como as que se referem a: acesso, armazenamento, arquivamento, avaliação, classificação, coleta, comunicação, controle, difusão, distribuição, eliminação, extração, modificação, processamento, produção, recepção, reprodução, transferência, transmissão e utilização.
</Text>
<UnorderedList spacing={3} color="gray.500" fontSize={accessibility?.fonts?.regular} ml={10} mb={1}>
  <ListItem><strong>Acesso:</strong> possibilidade de comunicar-se com um dispositivo, meio de armazenamento, unidade de rede, memória, registro, arquivo etc., visando receber, fornecer ou eliminar dados.</ListItem>
  <ListItem><strong>Armazenamento:</strong> ação ou resultado de manter ou conservar em repositório um dado.</ListItem>
  <ListItem><strong>Arquivamento:</strong> ato ou efeito de manter registrado um dado embora já tenha perdido a validade ou esgotada a sua vigência.</ListItem>
  <ListItem><strong>Avaliação:</strong> ato ou efeito de calcular valor sobre um ou mais dados.</ListItem>
  <ListItem><strong>Classificação:</strong> maneira de ordenar os dados conforme algum critério estabelecido.</ListItem>
  <ListItem><strong>Coleta:</strong> recolhimento de dados com finalidade específica.</ListItem>
  <ListItem><strong>Comunicação:</strong> transmitir informações pertinentes a políticas de ação sobre os dados.</ListItem>
  <ListItem><strong>Controle:</strong> ação ou poder de regular, determinar ou monitorar as ações sobre o dado.</ListItem>
  <ListItem><strong>Difusão:</strong> ato ou efeito de divulgação, propagação, multiplicação dos dados.</ListItem>
  <ListItem><strong>Distribuição:</strong> ato ou efeito de dispor de dados de acordo com algum critério estabelecido.</ListItem>
  <ListItem><strong>Eliminação:</strong> ato ou efeito de excluir ou destruir dado do repositório.</ListItem>
  <ListItem><strong>Extração:</strong> ato de copiar ou retirar dados do repositório em que se encontrava.</ListItem>
  <ListItem><strong>Modificação:</strong> ato ou efeito de alteração do dado.</ListItem>
  <ListItem><strong>Processamento:</strong> ato ou efeito de processar dados.</ListItem>
  <ListItem><strong>Produção:</strong> criação de bens e de serviços a partir do tratamento de dados.</ListItem>
  <ListItem><strong>Recepção:</strong> ato de receber os dados ao final da transmissão.</ListItem>
  <ListItem><strong>Reprodução:</strong> cópia de dado preexistente obtido por meio de qualquer processo.</ListItem>
  <ListItem><strong>Transferência:</strong> mudança de dados de uma área de armazenamento para outra, ou para terceiro.</ListItem>
  <ListItem><strong>Transmissão:</strong> movimentação de dados entre dois pontos por meio de dispositivos elétricos, eletrônicos, telegráficos, telefônicos, radioelétricos, pneumáticos etc.</ListItem>
  <ListItem><strong>Utilização:</strong> ato ou efeito do aproveitamento dos dados.</ListItem>
</UnorderedList>

<Text align={isMobile ? "justify" : "left"} color="gray.500" fontSize={accessibility?.fonts?.regular} mb={1}>
  <strong>Uso compartilhado de dados:</strong> comunicação, difusão, transferência internacional, interconexão de dados pessoais ou tratamento compartilhado de bancos de dados pessoais por órgãos e entidades públicas no cumprimento de suas competências legais, ou entre esses e entes privados, reciprocamente, com autorização específica, para uma ou mais modalidades de tratamento permitidas por esses entes públicos, ou entre entes privados.
</Text>
<Text align={isMobile ? "justify" : "left"} color="gray.500" fontSize={accessibility?.fonts?.regular} mb={1}>
  <strong>Violação de dados pessoais:</strong> é uma violação de segurança que provoca, de modo acidental ou ilícito, a destruição, a perda, a alteração, a divulgação ou o acesso não autorizado a dados pessoais transmitidos, conservados ou sujeitos a qualquer outro tipo de tratamento.
</Text>
<Text align={isMobile ? "justify" : "left"} color="gray.500" fontSize={accessibility?.fonts?.regular} mb={1}>
  <em>Fonte: Texto da CGU com base na Lei Federal nº 13.709/2018.</em>
</Text>

      </Box>
    
        </ContainerBasic>

  
  );
}

export default HomeScreen;
