// import React, { useState } from "react";
// import ContainerBasic from "../../components/Container/Basic";
// import { Box, Checkbox, Flex, Heading, Input, Stack, Textarea } from "@chakra-ui/react";
// import { useFontSizeAccessibilityContext } from "../../context/fontSizeAccessibility";
// import useWindowDimensions from "../../utils/getWindowSize";
// import DisplayNews from "../../components/News";
// import noticias from '../../../data/noticias.json'
// import PaginationComponent from "../../components/PaginationComponent";
// import PaginationSelector from "../../components/PaginationSelector";



// export const contentOtherInformations = {
//   titlePage: "ÚLTIMAS NOTICIAS",
//   description:
//     "Caso tenha dificuldade em encontrar alguma informação ou dúvida referente ao conteúdo publicado neste portal, você pode entrar em contato conosco preenchendo o formulário abaixo ou dirigir-se pessoalmente à Ouvidoria Geral, localizada no 3º andar do prédio sede da Prefeitura, de segunda a sexta-feira, das 8 às 17 horas.",
// };




// function Screen(PropsInput: any) {
  
//   const title = contentOtherInformations?.titlePage;
//   const description = contentOtherInformations?.description;
//   //const title2 = titleNews?.titlePage;
//   //const description2 = contentOtherInformations?.description;
//   const accessibility = useFontSizeAccessibilityContext();
//   const [checkboxes, setCheckboxes] = useState([false, false, false]);
//   const [text, setText] = useState("");
//   //const {news} = handler
//   const handleTextChange = (event: any) => {
//     const newText = event.target.value;
//     setText(newText);
//   };

//   const handleCheckboxChange = (index: number) => {
//     const updatedCheckboxes = checkboxes.map((checked, i) => i === index);

//     setCheckboxes(updatedCheckboxes);
//   };

//   const translatorCheckbox: any = {
//     0: "TRANSPARÊNCIA (INFORMAÇÕES SOBRE GASTOS PÚBLICOS)",
//     1: "OUVIDORIA (SOLICITAÇÕES E RECLAMAÇÕES)",
//     2: "SEMAE: INFORMAÇÕES OU RECLAMAÇÕES DE ÁGUA OU ESGOTO.",
//   };
//   const hasCheckboxSelected = checkboxes[0] || checkboxes[1] || checkboxes[2];

//   const { height, width } = useWindowDimensions();

//   const[itensPerPage, setItensPerPage] = useState(5)
//   const[currentPage, setCurrentPage] = useState(0)
//   const pages = Math.ceil(noticias.length / itensPerPage )
//   const startIndex = currentPage * itensPerPage;
//   const endIndex = startIndex + itensPerPage; 
//   const currentItens =  noticias.slice(startIndex,endIndex)

  
//   return (
//     <ContainerBasic title={title} description={description}>
     
//       <Flex direction="column">
        
//       <PaginationSelector itensPerPage={itensPerPage} setItensPerPage={setItensPerPage}/>

//       {
//             currentItens.map((info)=>{
//              return( 
             
//               <DisplayNews 
               
//                  key={info.descricao}
//                  data_noticia={info.data_noticia}
//                  descricao={info.descricao}
//                  foto={info.foto} 
//                  titulo={info.titulo} 
//                  link={info.link}    
                 
                        
                         
//             />
//              )
//             })
//           }

//           <PaginationComponent pages={pages} setCurrentPage = {setCurrentPage}/>


//       </Flex>
//      <Box marginTop="50px" width="800px">
      
//        </Box>
//     </ContainerBasic>
    
//   );
// }

// export default Screen;



import React, { useState } from "react";
import ContainerBasic from "../../components/Container/Basic";
import { Box, Checkbox, Flex, Heading, Input, Stack, Textarea,InputGroup, InputLeftElement, Center, useColorModeValue } from "@chakra-ui/react";
import { useFontSizeAccessibilityContext } from "../../context/fontSizeAccessibility";
import useWindowDimensions from "../../utils/getWindowSize";
import DisplayNews from "../../components/News";
import noticias from '../../../data/noticias.json'
import PaginationComponent from "../../components/PaginationComponent";
import PaginationSelector from "../../components/PaginationSelector";
import TableComponent, { TableColumns } from "../../components/Table";
import PaginationComponent2 from "../../components/PaginationComponent";
import { AiOutlineSearch } from "react-icons/ai";
import { isMobile } from "react-device-detect";
import caraga_horaria from '../../../data/carga_horaria.json'


export const contentOtherInformations = {
  titlePage: "Últimas Notícias",
  description:
    "Fique por dentro de tudo que acontece na Prefeitura de Mogi das Cruzes sobre Transparência Pública, Governo Aberto, Lei Geral de Proteção de Dados (LGPD), Lei de Acesso à Informação (LAI) e muito mais!",
};

function removeDiacritics(str: string) {
  return str.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
}


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

  
  

  const[itensPerPage, setItensPerPage] = useState(5)  //itens por pagina
  const[currentPage, setCurrentPage] = useState(0)    // pagina que vai iniciar vendo
  const pages = Math.ceil(noticias.length / itensPerPage )  // quantidade de páginas 
  
  const startIndex = currentPage * itensPerPage; // pagina atual x os itens por página.length;
  const endIndex = startIndex + itensPerPage;  // starIndex + itens por página
  const currentItens =  noticias.slice(startIndex,endIndex) //
  const [pageNumberLimit, setPageNumberLimit]= useState(5)
  const [maxpageNumberLimit,setMaxpageNumberLimit]= useState(5)
  const [minpageNumberLimit,setMinpageNumberLimit]= useState(0)

  const onPrevClick = ()=>{
    setCurrentPage (currentPage -1)
        if((currentPage-1)%pageNumberLimit==0){
          setMaxpageNumberLimit(maxpageNumberLimit - pageNumberLimit);
          setMinpageNumberLimit(minpageNumberLimit - pageNumberLimit)
        }
  }
  
  const onNextClick = ()=>{
        setCurrentPage (currentPage +1)
        if(currentPage+1 > maxpageNumberLimit){
          setMaxpageNumberLimit(maxpageNumberLimit + pageNumberLimit);
          setMinpageNumberLimit(minpageNumberLimit + pageNumberLimit)
        }
       
        
        
        
  }

  const [search, setSearch]= useState('')
  

  const filteredItems = currentItens.filter(
    (info) =>
    removeDiacritics(info.descricao.toLowerCase()).includes(removeDiacritics(search.toLowerCase()))||
    removeDiacritics(info.titulo.toLowerCase()).includes(removeDiacritics(search.toLowerCase()))
  );

  return (
    <ContainerBasic title={title} description={description}>
       <Box
          m={0}
          bg={useColorModeValue("white", "gray.800")}
          boxShadow="2xl"
          padding={"15px"}
          rounded="md"
          overflow="hidden"
          maxWidth="100%"
          borderRadius="18px"
          marginBottom="15px"
        >
       <Input
       size="md" 
     value={search}
     onChange={(ev) => {
       const inputValue = ev.target.value;
       setSearch(inputValue);
       
   
       if (inputValue.trim() === '') {
         setItensPerPage(5);
       } else {
         setItensPerPage(20);
       }
     }}
     maxWidth="50%"
      mt={1}
      color="text.dark"
      bg="white"
      //size="xs"
      marginBottom="15px"
      borderRadius="7px"
      placeholder="Pesquisar"
      type="search"
    /> 

      <Box display="flex" alignContent="center" flexDirection={isMobile ?  "column" : "column"}>
      {
            filteredItems.map((info)=>{
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
      
        </Box>
        
     <Center mt={5} display="flex" flexWrap="wrap">
     <Center minW="350px" mb={5} width="200px">
     <PaginationComponent2 pages={pages} setCurrentPage = {setCurrentPage} currentPage = {currentPage} onNextClick={onNextClick} onPrevClick={onPrevClick} />
        <PaginationSelector itensPerPage={itensPerPage} setItensPerPage={setItensPerPage}/>
        
        </Center>
       </Center>
       
       </Box>
    </ContainerBasic>
    
  );
}

export default Screen;