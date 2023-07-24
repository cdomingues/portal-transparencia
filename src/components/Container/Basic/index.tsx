// import React, { ReactNode, useState } from "react";
// import { Box, Heading, Text, Divider, Stack } from "@chakra-ui/react";
// import Head from "next/head";
// import { Container, Body } from "./styles";
// import Breadcrumb from "../../Breadcrumb";
// import { useFontSizeAccessibilityContext } from "../../../context/fontSizeAccessibility";
// import { isMobile } from "react-device-detect";
// import { useColorModeValue } from "@chakra-ui/react";
// import useWindowDimensions from "../../../../src/utils/getWindowSize";
// import noticias from "../../../../data/noticias.json";

// import DisplayNews from "../../../components/NewsHome";

// type PropsInput = {
//   title: string;
//   description: string;
//   children: ReactNode;
//   containerStyles?: React.CSSProperties;
// };

// function Aside() {
//   return (
//     <div style={{ width: "380px", justifyContent: "left" }}>
//       <Box
//         m={0}
//         bg={useColorModeValue("white", "gray.800")}
//         boxShadow="2xl"
//         padding={"15px"}
//         rounded="md"
//         overflow="hidden"
//         maxWidth="%"
//         borderRadius="18px"
//         marginBottom="15px"
//       >
//         <div style={{ padding: "10px" }}>
//           <Text fontWeight="500" color={"gray.500"}>
//             Últimas Noticias
//           </Text>
//         </div>
//         {noticias.slice(0, 2).map((info) => {
//           return (
//             <DisplayNews
//               key={info.descricao}
//               data_noticia={info.data_noticia}
//               descricao={info.descricao}
//               foto={info.foto}
//               titulo={info.titulo}
//               link={info.link}
//             />
//           );
//         })}
//         <div style={{ padding: "0px", width: "100%" }}></div>
//       </Box>
//     </div>
//   );
// }

// function ContainerBasic({
//   title,
//   description,
//   children,
//   containerStyles = { paddingLeft: "0%" },
// }: PropsInput) {
//   const { height, width } = useWindowDimensions();
//   const accessibility = useFontSizeAccessibilityContext();
//   const [showAside, setShowAside] = useState(false);
//   const toggleAside = () => {
//     setShowAside(!showAside);
//   };

//   const maxWidth = showAside ? (width < 1500 ? "800px" : "1200px") : (width < 1500 ? "1100px" : "1500px");

//   return (
//     <Stack
//       direction={isMobile ? "column" : "row"}
//       style={{  height: "100%", alignContent: 'flex-start',     justifyContent: 'flex-start'}}
//     >
//       <Stack
//         flex={width > 1024 ? 2 : 2}
//         style={{
//           paddingLeft: isMobile ? 0 : "0%",
//           paddingRight: isMobile ? 0 : "0%",
//           justifyContent: 'flex-start', // Adicionado
//         }}
//       >
//         <Container
//           style={{maxWidth, alignContent: 'flex-start', margin: "0 auto", ...containerStyles  }}
//         >
//           <Breadcrumb />

//           <Box
//             m={0}
//             bg={useColorModeValue("white", "gray.800")}
//             boxShadow="2xl"
//             padding={"15px"}
//             rounded="md"
//             overflow="hidden"
//             maxWidth="100%"
//             borderRadius="18px"
//             marginBottom="15px"
//           >
//             <Head>
//               <title>{title} - PMMC</title>
//             </Head>
//             <Heading
//               mb={2}
//               fontSize={accessibility?.fonts?.ultraLarge}
//               color="text.dark"
//             >
//               {title}
//             </Heading>
//             <div style={{ paddingRight: isMobile ? "0%" : "0%" }}>
//               <Text
//                 align={isMobile ? "justify" : "left"}
//                 color="gray.500"
//                 fontSize={accessibility?.fonts?.regular}
//               >
//                 {description}
//               </Text>
//               {/* <Body style={{backgroundColor: 'black', maxWidth: '100%' }}>
//         <Text align= {isMobile? 'center' : 'left'} color="gray.500" fontSize={accessibility?.fonts?.regular}>
//           {description}
//         </Text>
//       </Body> */}
//             </div>
//           </Box>
//           <Divider borderWidth="2px" mt="10" mb="10" />
//           {children}
//         </Container>
//       </Stack>
//       {showAside && (
//         <Stack flex={1}>
//           <Aside />
//         </Stack>
//       )}
//       <button
//         onClick={toggleAside}
//         style={{
//           position: "fixed",
//           right: "20px",
//           top: "50%",
//           transform: "translateY(-50%)",
//           backgroundColor: "transparent",
//           border: "none",
//           outline: "none",
//           cursor: "pointer",
//           width: "25px",
//           height: "25px",
//         }}
//       >
//         {showAside ? (
//           <svg
//             xmlns="http://www.w3.org/2000/svg"
//             width="25"
//             height="25"
//             viewBox="0 0 24 24"
//             fill="none"
//             stroke="currentColor"
//             strokeWidth="2"
//             strokeLinecap="round"
//             strokeLinejoin="round"
//           >
//             <line x1="12" y1="4" x2="12" y2="20" />
//           </svg>
//         ) : (
//           <svg
//             xmlns="http://www.w3.org/2000/svg"
//             width="25"
//             height="25"
//             viewBox="0 0 24 24"
//             fill="none"
//             stroke="currentColor"
//             strokeWidth="2"
//             strokeLinecap="round"
//             strokeLinejoin="round"
//           >
//             <line x1="4" y1="12" x2="20" y2="12" />
//           </svg>
//         )}
//       </button>
//     </Stack>
//   );
// }

// export default ContainerBasic;

import React, { ReactNode, useState, useEffect } from "react";
import { Box, Heading, Text, Divider, Stack } from "@chakra-ui/react";
import Head from "next/head";
import { Container, Body } from "./styles";
import Breadcrumb from "../../Breadcrumb";
import { useFontSizeAccessibilityContext } from "../../../context/fontSizeAccessibility";
import { isMobile } from "react-device-detect";
import { useColorModeValue } from "@chakra-ui/react";
import useWindowDimensions from "../../../../src/utils/getWindowSize";
import noticias from "../../../../data/noticias.json";

import DisplayNews from "../../../components/NewsHome";

type PropsInput = {
  title: string;
  description: string;
  children: ReactNode;
  containerStyles?: React.CSSProperties;
};

function Aside() {
  return (
    <div style={{ width: "380px", justifyContent: "left" }}>
      
      <Box
        m={0}
        bg={useColorModeValue("white", "gray.800")}
        boxShadow="2xl"
        padding={"15px"}
        rounded="md"
        overflow="hidden"
        maxWidth={isMobile? '95%' : '100%'}
        borderRadius="18px"
        marginBottom="15px"
      >
        <div style={{ padding: "10px" }}>
          <Text fontWeight="500" color={"gray.500"}>
            Últimas Noticias
          </Text>
        </div>
        {noticias.slice(0, 2).map((info) => {
          return (
            <DisplayNews
              key={info.descricao}
              data_noticia={info.data_noticia}
              descricao={info.descricao}
              foto={info.foto}
              titulo={info.titulo}
              link={info.link}
            />
          );
        })}
        <div style={{ padding: "0px", width: "95%" }}></div>
      </Box>
    </div>
  );
}

function ContainerBasic({
  title,
  description,
  children,
  containerStyles = { paddingLeft: "0%" },
}: PropsInput) {
  const { height, width } = useWindowDimensions();
  const accessibility = useFontSizeAccessibilityContext();
  const [showAside, setShowAside] = useState(!isMobile);

  const [isHovered, setIsHovered] = useState(false);
  
  const toggleAside = () => {
    if (!isMobile) {
      setShowAside(!showAside);
    }
  };

  const maxWidth = showAside
    ? width < 1500
      ? "800px"
      : "1200px"
    : width < 1500
    ? "1100px"
    : "1500px";

  return (
    <Stack
      direction={isMobile ? "column" : "row"}
      style={{
        height: "100%",
        alignContent: "flex-start",
        justifyContent: "flex-start",
      }}
    >
      <Stack
        flex={width > 1024 ? 2 : 2}
        style={{
          paddingLeft: isMobile ? 0 : "0%",
          paddingRight: isMobile ? 0 : "0%",
          justifyContent: "flex-start", // Adicionado
        }}
      >
        <Container
          style={{
            maxWidth,
            alignContent: "flex-start",
            margin: "0 auto",
            ...containerStyles,
          }}
        >
          <Breadcrumb />

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
            <Head>
              <title>{title} - PMMC</title>
            </Head>
            <Heading
              mb={2}
              fontSize={accessibility?.fonts?.ultraLarge}
              color="text.dark"
            >
              {title}
            </Heading>
            <div style={{ paddingRight: isMobile ? "0%" : "0%" }}>
              <Text
                align={isMobile ? "justify" : "left"}
                color="gray.500"
                fontSize={accessibility?.fonts?.regular}
              >
                {description}
              </Text>
            </div>
          </Box>
          {/* <Divider borderWidth="2px" mt="10" mb="10" /> */}
          {children}
        </Container>
      </Stack>
      {showAside && (
        <Stack flex={1}>
          <Aside />
        </Stack>
      )}
      {!isMobile && (
        <button
          onClick={toggleAside}
          onMouseOver={() => setIsHovered(true)}
          onMouseOut={() => setIsHovered(false)}
          style={{
            position: "absolute",
            right: "10px",
            top: "120px",
            transform: "translateY(-50%)",
            backgroundColor: "transparent",
            border: "1px solid transparent",
            borderRadius: "50%",
            outline: "none",
            cursor: "pointer",
            width: "40px",
            height: "40px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {isHovered ? (
            showAside ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                {/* Duas setas apontando para a direita */}
                <line x1="4" y1="6" x2="20" y2="12" />
                <line x1="4" y1="18" x2="20" y2="12" />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                {/* Duas setas apontando para a esquerda */}
                <line x1="20" y1="6" x2="4" y2="12" />
                <line x1="20" y1="18" x2="4" y2="12" />
              </svg>
            )
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              {/* Ícone de hambúrguer */}
              <line x1="3" y1="12" x2="21" y2="12" />
              <line x1="3" y1="6" x2="21" y2="6" />
              <line x1="3" y1="18" x2="21" y2="18" />
            </svg>
          )}
        </button>
      )}
    </Stack>
  );
}

export default ContainerBasic;
