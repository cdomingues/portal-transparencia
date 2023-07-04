import React, { useState } from "react";
import ContainerBasic from "../../components/Container/Basic";
import { Box, Checkbox, Flex, Heading, Input, Stack, Textarea } from "@chakra-ui/react";
import { useFontSizeAccessibilityContext } from "../../context/fontSizeAccessibility";
import useWindowDimensions from "../../utils/getWindowSize";
import DisplayNews from "../../components/News";
import noticias from '../../../data/noticias.json'
import PaginationComponent from "../../components/PaginationComponent";
import PaginationSelector from "../../components/PaginationSelector";



export const contentOtherInformations = {
  titlePage: "ÚLTIMAS NOTICIAS",
  description:
    "Caso tenha dificuldade em encontrar alguma informação ou dúvida referente ao conteúdo publicado neste portal, você pode entrar em contato conosco preenchendo o formulário abaixo ou dirigir-se pessoalmente à Ouvidoria Geral, localizada no 3º andar do prédio sede da Prefeitura, de segunda a sexta-feira, das 8 às 17 horas.",
};




function Screen(PropsInput: any) {
  
  const title = contentOtherInformations?.titlePage;
  const description = contentOtherInformations?.description;
  //const title2 = titleNews?.titlePage;
  //const description2 = contentOtherInformations?.description;
  const accessibility = useFontSizeAccessibilityContext();
  const [checkboxes, setCheckboxes] = useState([false, false, false]);
  const [text, setText] = useState("");
  //const {news} = handler
  const handleTextChange = (event: any) => {
    const newText = event.target.value;
    setText(newText);
  };

  const handleCheckboxChange = (index: number) => {
    const updatedCheckboxes = checkboxes.map((checked, i) => i === index);

    setCheckboxes(updatedCheckboxes);
  };

  const translatorCheckbox: any = {
    0: "TRANSPARÊNCIA (INFORMAÇÕES SOBRE GASTOS PÚBLICOS)",
    1: "OUVIDORIA (SOLICITAÇÕES E RECLAMAÇÕES)",
    2: "SEMAE: INFORMAÇÕES OU RECLAMAÇÕES DE ÁGUA OU ESGOTO.",
  };
  const hasCheckboxSelected = checkboxes[0] || checkboxes[1] || checkboxes[2];

  const { height, width } = useWindowDimensions();

  const[itensPerPage, setItensPerPage] = useState(5)
  const[currentPage, setCurrentPage] = useState(0)
  const pages = Math.ceil(noticias.length / itensPerPage )
  const startIndex = currentPage * itensPerPage;
  const endIndex = startIndex + itensPerPage; 
  const currentItens =  noticias.slice(startIndex,endIndex)

  
  return (
    <ContainerBasic title={title} description={description}>
     
      <Flex direction="column">
        
      <PaginationSelector itensPerPage={itensPerPage} setItensPerPage={setItensPerPage}/>

      {
            currentItens.map((info)=>{
             return( 
             
              <DisplayNews 
               
                 key={info.descricao}
                 data_noticia={info.data_noticia}
                 descricao={info.descricao}
                 foto={info.foto} 
                 titulo={info.titulo} 
                 link={info.link}    
                 
                        
                         
            />
             )
            })
          }

          <PaginationComponent pages={pages} setCurrentPage = {setCurrentPage}/>


      </Flex>
     <Box marginTop="50px" width="800px">
      
       </Box>
    </ContainerBasic>
    
  );
}

export default Screen;

