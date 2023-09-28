// import { Select, Stack, useColorModeValue } from "@chakra-ui/react";
// import React from "react";
// import { Laws } from ".";
// import ContainerBasic from "../../../components/Container/Basic";
// import PlanContainerLaw from "../../../components/Container/PlanLaw";

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

// import { Select, Stack, useColorModeValue, Button, Link, Alert, AlertIcon } from "@chakra-ui/react";
// import React, { useState } from "react";
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

  
//   const [downloadLink, setDownloadLink] = useState<string | null>(null);
//   const [isLoading, setIsLoading] = useState(false);

//   const [isDownloadCompleted, setIsDownloadCompleted] = useState(false);


//   const handleClick = async () => {
//     setIsLoading(true);
  
//     const requestOptions = {
//       method: 'POST',
//       headers: { 'Content-Type': 'application/json' },
//       body: JSON.stringify({ link: 'http://www.licitacao.pmmc.com.br/Transparencia/download?arquivo=c296c80128dacf95862399dfcb0b4bd5' })
//     };
  
//     try {
//       const result = await Promise.race([
//         fetch('../../api/download/proxy1', requestOptions),
//         new Promise((_, reject) =>
//           setTimeout(() => reject(new Error('Timeout after 5 minutes')), 300000)
//         ),
//       ]);
  
//       if (!(result instanceof Error)) {
//         const response = result as Response;
//         const data = await response.json();
  
//         if (data.status === 'Download Completed') {
//           setDownloadLink(data.downloadLink);
//           setIsDownloadCompleted(true);  // Adicionado aqui
//         } else {
//           console.error('Failed to download file');
//         }
//       }
//     } catch (error) {
//       console.error('Error:', error);
//     } finally {
//       setIsLoading(false);
//     }
//   };
  

  

//   const title = contentGuidelines?.titlePage;
//   const description = contentGuidelines?.description;
  
//   return (
//     <ContainerBasic title={title} description={description}>
//       <PlanContainer laws={laws}>
//         <Select
//           minW={90}
//           width="20%"
//           bg={useColorModeValue("white", "gray.800")}
//           value={selectValue}
//           textAlign="center"
//           mb={5}
//           onChange={(event) => {
//             handleSelectValue(Number(event.target.value));
//           }}
//         >
//         {selectOptions.map((value, index) => (
//           <option key={index} value={value}>
//             {value}
//           </option>
//         ))}
//         </Select>

//         <Button onClick={handleClick} isDisabled={isLoading}>
//           {isLoading ? "Aguarde..." : "Download File"}
//         </Button>

//         {downloadLink && isDownloadCompleted && !isLoading && (
//     <Button colorScheme="teal" onClick={() => window.open(`/api/download/proxy1?file=${downloadLink}`, '_blank')}>
//       Baixar Arquivo
//     </Button>
//   )}

//         {isLoading && (
//           <Alert status="info">
//             <AlertIcon />
//             A requisição está em andamento, por favor aguarde até 5 minutos...
//           </Alert>
//         )}
//       </PlanContainer>
//     </ContainerBasic>
//   );
// }

// export default Screen;

// import { Select, Stack, useColorModeValue, Button, Link, Alert, AlertIcon } from "@chakra-ui/react";
// import React, { useState } from "react";
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

//   const [downloadLink, setDownloadLink] = useState<string | null>(null);
//   const [isLoading, setIsLoading] = useState(false);
//   const [isDownloadCompleted, setIsDownloadCompleted] = useState(false);

//   const handleClick = async (link: string) => {
//     setIsLoading(true);
  
//     const requestOptions = {
//       method: 'POST',
//       headers: { 'Content-Type': 'application/json' },
//       body: JSON.stringify({ link })
//     };
  
//     try {
//       const result = await Promise.race([
//         fetch('../../api/download/proxy1', requestOptions),
//         new Promise((_, reject) =>
//           setTimeout(() => reject(new Error('Timeout after 5 minutes')), 300000)
//         ),
//       ]);
  
//       if (!(result instanceof Error)) {
//         const response = result as Response;
//         const data = await response.json();
  
//         if (data.status === 'Download Completed') {
//           setDownloadLink(data.fileName);
//           setIsDownloadCompleted(true);
//         } else {
//           console.error('Failed to download file');
//         }
//       }
//     } catch (error) {
//       console.error('Error:', error);
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   const title = contentGuidelines?.titlePage;
//   const description = contentGuidelines?.description;
  
//   return (
//     <ContainerBasic title={title} description={description}>
//       <PlanContainer laws={laws}>
//         <Select
//           minW={90}
//           width="20%"
//           bg={useColorModeValue("white", "gray.800")}
//           value={selectValue}
//           textAlign="center"
//           mb={5}
//           onChange={(event) => {
//             handleSelectValue(Number(event.target.value));
//           }}
//         >
//           {selectOptions.map((value: string | number, index: number) => (
//             <option key={index} value={value}>
//               {value}
//             </option>
//           ))}
//         </Select>

//         {laws.map((law, index) => (
//           <Stack direction="row" justifyContent="space-between" key={index}>
//             <Button colorScheme="teal" variant="outline" onClick={() => handleClick(law.link)}>
//               {isLoading ? 'Downloading...' : '{laws.name}'}
//             </Button>
//             {isDownloadCompleted && (
//               <Link href={`https://dadosabertos.mogidascruzes.sp.gov.br/api/download/downloadProxy2?filename=${downloadLink}`} isExternal>
//                 Click here to download
//               </Link>
//             )}
//             {isDownloadCompleted && (
//               <Alert status="success">
//                 <AlertIcon />
//                 Download completo!
//               </Alert>
//             )}
//           </Stack>
//         ))}
//       </PlanContainer>
//     </ContainerBasic>
//   );
// }

// export default Screen;

// import { Select, Stack, useColorModeValue, Button, Link, Alert, AlertIcon } from "@chakra-ui/react";
// import React, { useState } from "react";
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

//   const [downloadLink, setDownloadLink] = useState<string | null>(null);
//   const [isLoading, setIsLoading] = useState(false);
//   const [isDownloadCompleted, setIsDownloadCompleted] = useState(false);

//   const handleClick = async (link: string) => {
//     setIsLoading(true);
  
//     const requestOptions = {
//       method: 'POST',
//       headers: { 'Content-Type': 'application/json' },
//       body: JSON.stringify({link})
//     };
  
//     try {
//       const result = await Promise.race([
//         fetch('../../api/download/proxy1', requestOptions),
//         new Promise((_, reject) =>
//           setTimeout(() => reject(new Error('Timeout after 5 minutes')), 300000)
//         ),
//       ]);
  
//       if (!(result instanceof Error)) {
//         const response = result as Response;
//         const data = await response.json();
  
//         if (data.status === 'Download Completed') {
//           setDownloadLink(data.fileName);
//           setIsDownloadCompleted(true);
//         } else {
//           console.error('Failed to download file');
//         }
//       }
//     } catch (error) {
//       console.error('Error:', error);
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   const title = contentGuidelines?.titlePage;
//   const description = contentGuidelines?.description;
  
//   return (
//     <ContainerBasic title={title} description={description}>
//       <PlanContainer laws={laws}>
//         <Select
//           minW={90}
//           width="20%"
//           bg={useColorModeValue("white", "gray.800")}
//           value={selectValue}
//           textAlign="center"
//           mb={5}
//           onChange={(event) => {
//             handleSelectValue(Number(event.target.value));
//           }}
//         >
//           {selectOptions.map((value: string | number, index: number) => (
//             <option key={index} value={value}>
//               {value}
//             </option>
//           ))}
//         </Select>

//         {laws.map((law, index) => (
//           <Stack direction="row" justifyContent="space-between" key={index}>
//             <Button colorScheme="teal" variant="outline" onClick={() => handleClick(law.link)}>
//               {isLoading ? 'Downloading...' : law.name}
//             </Button>
//             {isDownloadCompleted && (
//               <Link href={`https://dadosabertos.mogidascruzes.sp.gov.br/api/download/downloadProxy2?filename=${downloadLink}`} isExternal>
//                 Click here to download
//               </Link>
//             )}
//             {isDownloadCompleted && (
//               <Alert status="success">
//                 <AlertIcon />
//                 Download completo!
//               </Alert>
//             )}
//           </Stack>
//         ))}
//       </PlanContainer>
//     </ContainerBasic>
//   );
// }

// export default Screen;


// import { Select, Stack, useColorModeValue, Button, Link, Alert, AlertIcon } from "@chakra-ui/react";
// import React, { useState } from "react";
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
// };

// function Screen({ handler }: PropsInput) {
//   const { handleSelectValue, selectOptions, laws, selectValue } = handler;

//   const [downloadLinks, setDownloadLinks] = useState<Record<number, string>>({});
//   const [isLoading, setIsLoading] = useState(false);
//   const [isDownloadCompleted, setIsDownloadCompleted] = useState(false);

//   const handleClick = async (link: string, index: number) => {
//     setIsLoading(true);

//     const requestOptions = {
//       method: 'POST',
//       headers: { 'Content-Type': 'application/json' },
//       body: JSON.stringify({ link }),
//     };

//     try {
//       const result = await Promise.race([
//         fetch('../../api/download/proxy1', requestOptions),
//         new Promise((_, reject) =>
//           setTimeout(() => reject(new Error('Timeout after 5 minutes')), 300000)
//         ),
//       ]);

//       if (!(result instanceof Error)) {
//         const response = result as Response;
//         const data = await response.json();

//         if (data.status === 'Download Completed') {
//           setDownloadLinks((prevDownloadLinks) => ({
//             ...prevDownloadLinks,
//             [index]: data.fileName,
//           }));
//           setIsDownloadCompleted(true);
//         } else {
//           console.error('Failed to download file');
//         }
//       }
//     } catch (error) {
//       console.error('Error:', error);
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   const title = contentGuidelines?.titlePage;
//   const description = contentGuidelines?.description;

//   return (
//     <ContainerBasic title={title} description={description}>
//       <PlanContainer laws={laws}>
//         <Select
//           minW={90}
//           width="20%"
//           bg={useColorModeValue("white", "gray.800")}
//           value={selectValue}
//           textAlign="center"
//           mb={5}
//           onChange={(event) => {
//             handleSelectValue(Number(event.target.value));
//           }}
//         >
//           {selectOptions.map((value: string | number, index: number) => (
//             <option key={index} value={value}>
//               {value}
//             </option>
//           ))}
//         </Select>

//         {laws.map((law, index) => (
//           <Stack direction="row" justifyContent="space-between" key={index}>
//             <Button
//               colorScheme="teal"
//               variant="outline"
//               onClick={() => handleClick(law.link, index)}
//             >
//               {isLoading ? 'Downloading...' : law.name}
//             </Button>
//             {downloadLinks[index] && (
//               <Link
//                 href={`https://dadosabertos.mogidascruzes.sp.gov.br/api/download/downloadProxy2?filename=${downloadLinks[index]}`}
//                 isExternal
//               >
//                 Click here to download
//               </Link>
//             )}
//             {downloadLinks[index] && (
//               <Alert status="success">
//                 <AlertIcon />
//                 Download completo!
//               </Alert>
//             )}
//           </Stack>
//         ))}
//       </PlanContainer>
//     </ContainerBasic>
//   );
// }

// export default Screen;


// Codigo funcional!!

// import { Select, Stack, useColorModeValue, Button, Link, Alert, AlertIcon, Popover, PopoverTrigger, PopoverContent, PopoverBody } from "@chakra-ui/react";
// import React, { useState } from "react";
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
// };

// function Screen({ handler }: PropsInput) {
//   const { handleSelectValue, selectOptions, laws, selectValue } = handler;

//   const [downloadLinks, setDownloadLinks] = useState<Record<number, string>>({});
//   const [isLoading, setIsLoading] = useState<Record<number, boolean>>({});
//   const [isDownloadCompleted, setIsDownloadCompleted] = useState<Record<number, boolean>>({});
//   const [selectedItemIndex, setSelectedItemIndex] = useState<number | null>(null);

//   const handleClick = async (link: string, index: number) => {
//     setSelectedItemIndex(index);
//     setIsLoading((prevIsLoading) => ({
//       ...prevIsLoading,
//       [index]: true,
//     }));

//     const requestOptions = {
//       method: 'POST',
//       headers: { 'Content-Type': 'application/json' },
//       body: JSON.stringify({ link }),
//     };

//     try {
//       const result = await Promise.race([
//         fetch('../../api/download/proxy1', requestOptions),
//         new Promise((_, reject) =>
//           setTimeout(() => reject(new Error('Timeout after 5 minutes')), 300000)
//         ),
//       ]);

//       if (!(result instanceof Error)) {
//         const response = result as Response;
//         const data = await response.json();

//         if (data.status === 'Download Completed') {
//           setDownloadLinks((prevDownloadLinks) => ({
//             ...prevDownloadLinks,
//             [index]: data.fileName,
//           }));
//           setIsDownloadCompleted((prevIsDownloadCompleted) => ({
//             ...prevIsDownloadCompleted,
//             [index]: true,
//           }));
//         } else {
//           console.error('Failed to download file');
//         }
//       }
//     } catch (error) {
//       console.error('Error:', error);
//     } finally {
//       setIsLoading((prevIsLoading) => ({
//         ...prevIsLoading,
//         [index]: false,
//       }));
//     }
//   };

//   const handleOpenPopover = (index: number) => {
//     setSelectedItemIndex(index);
//   };

//   const handleClosePopover = () => {
//     setSelectedItemIndex(null);
//   };

//   const title = contentGuidelines?.titlePage;
//   const description = contentGuidelines?.description;

//   return (
//     <ContainerBasic title={title} description={description}>
//       <PlanContainer laws={laws}>
//         <Select
//           minW={90}
//           width="20%"
//           bg={useColorModeValue("white", "gray.800")}
//           value={selectValue}
//           textAlign="center"
//           mb={5}
//           onChange={(event) => {
//             handleSelectValue(Number(event.target.value));
//           }}
//         >
//           {selectOptions.map((value: string | number, index: number) => (
//             <option key={index} value={value}>
//               {value}
//             </option>
//           ))}
//         </Select>

//         {laws.map((law, index) => (
//           <Stack direction="row" justifyContent="space-between" key={index}>
//             <Popover
//               isOpen={selectedItemIndex === index}
//               onClose={handleClosePopover}
//               placement='auto'
//             >
//               <PopoverTrigger>
//                 <Button
//                   colorScheme="teal"
//                   variant="outline"
//                   onClick={() => handleClick(law.link, index)}
//                   disabled={isLoading[index]}
//                 >
//                   {isLoading[index] ? 'Preparando o arquivo...' : law.name}
//                 </Button>
//               </PopoverTrigger>
//               <PopoverContent style={{ width: '340px', height: '200px' }}>
//                 <PopoverBody>
//                   {selectedItemIndex === index && isLoading[index] && (
//                     <Alert status="info" textAlign="center">
//                       <AlertIcon />
//                       Aguarde...
//                     </Alert>
//                   )}
//                   {selectedItemIndex === index && !isLoading[index] && isDownloadCompleted[index] && downloadLinks[index] && (
//                     <>

//                       <Alert status="success" textAlign="center">
//                         <AlertIcon />
//                         Arquivo pronto para download!
//                       </Alert>
//                       <Button
//                         colorScheme="teal"
//                         variant="outline"
//                         padding="10px"
//                         margin="20px"
//                         as={Link}
//                         href={`https://dadosabertos.mogidascruzes.sp.gov.br/api/download/downloadProxy2?filename=${downloadLinks[index]}`}
//                         isExternal
//                       >
//                         Acessar o arquivo.
//                       </Button>
//                       <br />
//                     </>
//                   )}
//                 </PopoverBody>
//               </PopoverContent>
//             </Popover>
//           </Stack>
//         ))}
//       </PlanContainer>
//     </ContainerBasic>
//   );
// }

// export default Screen;

// import { Select, Stack, useColorModeValue, Button, Link, Alert, AlertIcon, Popover, PopoverTrigger, PopoverContent, PopoverBody } from "@chakra-ui/react";
// import React, { useState } from "react";
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
// };

// function Screen({ handler }: PropsInput) {
//   const { handleSelectValue, selectOptions, laws, selectValue } = handler;

//   const [downloadLinks, setDownloadLinks] = useState<Record<number, string>>({});
//   const [isLoading, setIsLoading] = useState<Record<number, boolean>>({});
//   const [isDownloadCompleted, setIsDownloadCompleted] = useState<Record<number, boolean>>({});
//   const [selectedItemIndex, setSelectedItemIndex] = useState<number | null>(null);

//   const handleDownload = (url: string) => {
//     window.open(url, '_blank');
//   };

//   const handleClick = async (link: string, index: number) => {
//     setSelectedItemIndex(index);
//     setIsLoading((prevIsLoading) => ({
//       ...prevIsLoading,
//       [index]: true,
//     }));

//     const requestOptions = {
//       method: 'POST',
//       headers: { 'Content-Type': 'application/json' },
//       body: JSON.stringify({ link }),
//     };

//     try {
//       const result = await Promise.race([
//         fetch('../../api/download/proxy1', requestOptions),
//         new Promise((_, reject) =>
//           setTimeout(() => reject(new Error('Timeout after 5 minutes')), 300000)
//         ),
//       ]);

//       if (!(result instanceof Error)) {
//         const response = result as Response;
//         const data = await response.json();

//         if (data.status === 'Download Completed') {
//           setDownloadLinks((prevDownloadLinks) => ({
//             ...prevDownloadLinks,
//             [index]: data.fileName,
//           }));

//           const downloadUrl = `https://dadosabertos.mogidascruzes.sp.gov.br/api/download/downloadProxy2?filename=${data.fileName}`;
//           handleDownload(downloadUrl);

//           setIsDownloadCompleted((prevIsDownloadCompleted) => ({
//             ...prevIsDownloadCompleted,
//             [index]: true,
//           }));
//         } else {
//           console.error('Failed to download file');
//         }
//       }
//     } catch (error) {
//       console.error('Error:', error);
//     } finally {
//       setIsLoading((prevIsLoading) => ({
//         ...prevIsLoading,
//         [index]: false,
//       }));
//     }
//   };

//   const handleOpenPopover = (index: number) => {
//     setSelectedItemIndex(index);
//   };

//   const handleClosePopover = () => {
//     setSelectedItemIndex(null);
//   };

//   const title = contentGuidelines?.titlePage;
//   const description = contentGuidelines?.description;

//   return (
//     <ContainerBasic title={title} description={description}>
//       <PlanContainer laws={laws}>
//         <Select
//           minW={90}
//           width="20%"
//           bg={useColorModeValue("white", "gray.800")}
//           value={selectValue}
//           textAlign="center"
//           mb={5}
//           onChange={(event) => {
//             handleSelectValue(Number(event.target.value));
//           }}
//         >
//           {selectOptions.map((value: string | number, index: number) => (
//             <option key={index} value={value}>
//               {value}
//             </option>
//           ))}
//         </Select>

//         {laws.map((law, index) => (
//           <Stack direction="row" justifyContent="space-between" key={index}>
//             <Popover
//               isOpen={selectedItemIndex === index}
//               onClose={handleClosePopover}
//               placement='auto'
//             >
//               <PopoverTrigger>
//                 <Button
//                   colorScheme="teal"
//                   variant="outline"
//                   onClick={() => handleClick(law.link, index)}
//                   disabled={isLoading[index]}
//                 >
//                   {isLoading[index] ? 'Preparando o arquivo...' : law.name}
//                 </Button>
//               </PopoverTrigger>
//               <PopoverContent style={{ width: '340px', height: '200px' }}>
//                 <PopoverBody>
//                   {selectedItemIndex === index && isLoading[index] && (
//                     <Alert status="info" textAlign="center">
//                       <AlertIcon />
//                       Aguarde...
//                     </Alert>
//                   )}
//                   {selectedItemIndex === index && !isLoading[index] && isDownloadCompleted[index] && downloadLinks[index] && (
//                     <>
//                       <Alert status="success" textAlign="center">
//                         <AlertIcon />
//                         Arquivo pronto para download!
//                       </Alert>
//                       <Button
//                         colorScheme="teal"
//                         variant="outline"
//                         padding="10px"
//                         margin="20px"
//                         onClick={() => {
//                           const downloadUrl = `https://dadosabertos.mogidascruzes.sp.gov.br/api/download/downloadProxy2?filename=${downloadLinks[index]}`;
//                           handleDownload(downloadUrl);
//                         }}
//                       >
//                         Acessar o arquivo.
//                       </Button>
//                       <br />
//                     </>
//                   )}
//                 </PopoverBody>
//               </PopoverContent>
//             </Popover>
//           </Stack>
//         ))}
//       </PlanContainer>
//     </ContainerBasic>
//   );
// }

// export default Screen;

import { useColorModeValue, Box } from "@chakra-ui/react";
import React from "react";
import { Laws } from ".";
import ContainerBasic from "../../../components/Container/Basic";
import PlanContainerLaw from "../../../components/Container/PlanLaw";

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
  description: "A Lei de Diretrizes Orçamentárias (LDO) é elaborada anualmente e tem como objetivo apontar as prioridades do governo para o próximo ano. Ela orienta a elaboração da Lei Orçamentária Anual, baseando-se no que foi estabelecido pelo Plano Plurianual. Em sua construção deve conter a previsão de despesas referentes ao plano de carreiras, cargos e salários dos servidores, o controle de custos e avaliação dos resultados dos programas desenvolvidos e as condições e exigências para transferências de recursos a entidades públicas e privadas, funcionando como um ajuste anual que delimita o que é e o que não é possível realizar no ano seguinte.",
};

function Screen({ handler }: PropsInput) {
  const { handleSelectValue, selectOptions, laws, selectValue } = handler;

  const title = contentGuidelines?.titlePage;
  const description = contentGuidelines?.description;

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
      <PlanContainerLaw laws={laws} selectOptions={selectOptions} selectValue={selectValue} handleSelectValue={handleSelectValue} />
      </Box>
    </ContainerBasic>
  );
}

export default Screen;
