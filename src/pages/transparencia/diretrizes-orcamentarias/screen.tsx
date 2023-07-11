// import { Select, Stack, useColorModeValue } from "@chakra-ui/react";
// import React from "react";
// import { Laws } from ".";
// import ContainerBasic from "../../../components/Container/Basic";
// import PlanContainer from "../../../components/Container/Plan";

// type PropsInput = {
//   handler: {
//     laws: Laws;
//     handleSelectValue: (value: number) => void;
//     selectOptions: Array<string | number>;
//     selectValue: number;
//   };
// };

// export const contentGuidelines = {
//   titlePage: "Lei de Diretrizes Orçamentárias",
//   description: "A Lei de Diretrizes Orçamentárias (LDO) permite a ligação entre o planejamento de curto prazo, no caso o Orçamento Anual, e o planejamento de longo prazo, que é o Plano Plurianual (PPA). A LDO define metas e prioridades da Administração Pública, além de estabelecer metas fiscais e apontar os riscos que poderão afetar as contas públicas. O projeto deve ser enviado até dia 15 de abril de cada ano à Câmara Municipal, que deve concluir sua votação até 30 de junho. São realizadas duas audiências públicas até a votação. Os trabalhos legislativos do primeiro semestre não podem terminar sem a aprovação da LDO.",
// }

// function Screen({ handler }: PropsInput) {
//   const { handleSelectValue, selectOptions, laws, selectValue } = handler;

//   const handleOpenLink = (link: string) => {
//     window.open(link, '_blank', 'height=600,width=600');
//   };


 

//   const title = contentGuidelines?.titlePage;
//   const description = contentGuidelines?.description;
//   return (
//     <ContainerBasic title={title} description={description}>
//       <PlanContainer laws={laws}>
//        <Select
//           minW={90}
//          width="20%"
//           bg={useColorModeValue("white", "gray.800")}
//          value={selectValue}
//          textAlign="center"
//          mb={5}
//          onChange={(event) => {
//            handleSelectValue(Number(event.target.value));
//        }}
          
//          >
//        {selectOptions.map((value, index) => (
//              <option key={index} value={value}>
//               {value}
//            </option>
//         ))}


//         </Select>

//         <div>
//         <a onClick={() => handleOpenLink('https://uol.com.br')}>
//     Clique aqui para abrir o link
//   </a>
//         </div>
//       </PlanContainer>
//     </ContainerBasic>
//   );
// }

// export default Screen;

import { Select, Stack, useColorModeValue, Button, Link, Alert, AlertIcon } from "@chakra-ui/react";
import React, { useState } from "react";
import { Laws } from ".";
import ContainerBasic from "../../../components/Container/Basic";
import PlanContainer from "../../../components/Container/Plan";

type PropsInput = {
  handler: {
    laws: Laws;
    handleSelectValue: (value: number) => void;
    selectOptions: Array<string | number>;
    selectValue: number;
  };
};

export const contentGuidelines = {
  titlePage: "Lei de Diretrizes Orçamentárias",
  description: "A Lei de Diretrizes Orçamentárias (LDO) permite a ligação entre o planejamento de curto prazo, no caso o Orçamento Anual, e o planejamento de longo prazo, que é o Plano Plurianual (PPA). A LDO define metas e prioridades da Administração Pública, além de estabelecer metas fiscais e apontar os riscos que poderão afetar as contas públicas. O projeto deve ser enviado até dia 15 de abril de cada ano à Câmara Municipal, que deve concluir sua votação até 30 de junho. São realizadas duas audiências públicas até a votação. Os trabalhos legislativos do primeiro semestre não podem terminar sem a aprovação da LDO.",
}

function Screen({ handler }: PropsInput) {
  const { handleSelectValue, selectOptions, laws, selectValue } = handler;

  const handleOpenLink = (link: string) => {
    window.open(link, '_blank', 'height=600,width=600');
  };

  
  const [downloadLink, setDownloadLink] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleClick = async () => {
    setIsLoading(true);

    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ link: 'http://www.licitacao.pmmc.com.br/Transparencia/download?arquivo=c296c80128dacf95862399dfcb0b4bd5' })
    };

    try {
      const result = await Promise.race([
        fetch('../../api/download/proxy1', requestOptions),
        new Promise((_, reject) =>
          setTimeout(() => reject(new Error('Timeout after 5 minutes')), 300000)
        ),
      ]);

      if (!(result instanceof Error)) {
        const response = result as Response;
        const data = await response.json();

        if (data.status === 'Download Completed') {
          setDownloadLink(data.downloadLink);
        } else {
          console.error('Failed to download file');
        }
      }
    } catch (error) {
      console.error('Error:', error);
    } finally {
      setIsLoading(false);
    }
  };
  

  const title = contentGuidelines?.titlePage;
  const description = contentGuidelines?.description;
  
  return (
    <ContainerBasic title={title} description={description}>
      <PlanContainer laws={laws}>
        <Select
          minW={90}
          width="20%"
          bg={useColorModeValue("white", "gray.800")}
          value={selectValue}
          textAlign="center"
          mb={5}
          onChange={(event) => {
            handleSelectValue(Number(event.target.value));
          }}
        >
        {selectOptions.map((value, index) => (
          <option key={index} value={value}>
            {value}
          </option>
        ))}
        </Select>

        <Button onClick={handleClick} isDisabled={isLoading}>
          {isLoading ? "Aguarde..." : "Download File"}
        </Button>

        {downloadLink && !isLoading && (
          <Button colorScheme="teal" onClick={() => window.open(downloadLink, '_blank')}>
            Baixar Arquivo
          </Button>
        )}

        {isLoading && (
          <Alert status="info">
            <AlertIcon />
            A requisição está em andamento, por favor aguarde até 5 minutos...
          </Alert>
        )}
      </PlanContainer>
    </ContainerBasic>
  );
}

export default Screen;
