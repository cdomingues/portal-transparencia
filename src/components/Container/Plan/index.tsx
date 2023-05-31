// import { Stack, Link, Text, useColorModeValue, Icon } from "@chakra-ui/react";
// import React, { ReactNode } from "react";
// import { isMobile } from "react-device-detect";
// import { AiOutlineDownload, AiOutlineInfoCircle } from "react-icons/ai";
// import DownloadOff from "../../../pages/downloadOff/downloadOff";
// import Testimonial, { TestimonialContent } from "../../Testimonial";

// type PropsInput = {
//   laws: Array<{ name: string; link: string }>;
//   children?: ReactNode;
// };

// const PlanContainer = ({ laws, children }: PropsInput) => {
//   return (
//     <Stack direction={isMobile ? "column" : "row"} flex={1}>
//       <Stack direction="column" flex={3}>
//         {children}
//         {laws?.map((law, index) => (
//           <div style={{ marginBottom: "20px" }} key={index}>
//             <Link key={index} target="_blank" href={law.link}>
//               <Stack direction="row">
//                 <Icon
//                   color="table.primary"
//                   fontSize={20}
//                   as={AiOutlineDownload}
//                 />
//                 <Text fontSize="sm">{law.name}</Text>
//               </Stack>
//             </Link>
//           </div>
//         ))}
//       </Stack>
//       <Stack direction="column" flex={1}>
//         <div style={{ height: "30%", width: "100%" }}>
          
//             <TestimonialContent>
//               <Icon
//                 color="table.primary"
//                 w={"15%"}
//                 h={"15%"}
//                 as={AiOutlineInfoCircle}
//               />
//               <Text mb={2} fontWeight="550" fontSize="md">
//                 ACESSO A INFORMAÇÃO
//               </Text>
//               <Link
//                 textAlign="center"
//                 color={useColorModeValue("gray.600", "gray.400")}
//                 fontSize="sm"
//                 href="/acesso-a-informacao"
//                 target="_blank"
//               >
//                 A Lei nº 12.527/2011 regulamenta o direito constitucional de
//                 acesso às informações públicas.
//               </Link>
//               <DownloadOff />
//             </TestimonialContent>
          
//         </div>
//       </Stack>
//     </Stack>
//   );
// };

// export default PlanContainer;


import React, { useState } from 'react';
import axios from 'axios';
import { Button, Input, VStack } from '@chakra-ui/react';
import { baseUrl } from '../../../config';

const DownloadOff = () => {
  const [inputValue, setInputValue] = useState('');
  const [isInputVisible, setInputVisible] = useState(false);

  const handleButtonClick = () => {
    setInputVisible(true);
  };

  const handleDownload = () => {
    axios.get(`/api/download/${inputValue}`)
      .then(response => {
        const caminhoArquivo = `/api/download/${inputValue}`;
        const mensagem = `Arquivo baixado com sucesso!\nCaminho do arquivo: ${baseUrl}${caminhoArquivo}`;
        alert(mensagem);
      })
      .catch(error => {
        console.error("Download Error", error);
        alert('Erro ao baixar o arquivo. Por favor, tente novamente mais tarde.');
      });
  };
  

  return (
    <VStack spacing={4}>
      <Button onClick={handleButtonClick}>Mostrar Campo</Button>
      {isInputVisible && (
        <div>
          <Input 
            type="number" 
            value={inputValue} 
            onChange={(e) => setInputValue(e.target.value)} 
          />
          <Button onClick={handleDownload}>DownloadOff</Button>
        </div>
      )}
    </VStack>
  );
};

export default DownloadOff;
