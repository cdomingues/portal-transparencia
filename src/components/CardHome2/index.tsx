import {
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Box,
  Flex,
  Text,
  Grid,
  VStack,
  useColorModeValue,
  Tooltip,
  Accordion,
  AccordionItem,
  AccordionPanel,
  AccordionButton,
  AccordionIcon,
} from "@chakra-ui/react";
import Image from "next/image";
import { useFontSizeAccessibilityContext } from "../../context/fontSizeAccessibility";
import { menus } from "./menu";
import { useState } from "react";
import colors from "../../styles/colors";

function CardHomeTabs() {
  const useAccessibility = useFontSizeAccessibilityContext();
  const [tabIndex, setTabIndex] = useState(-1);
  const SubMenuIcon = ({ src, alt }: { src?: string; alt: string }) =>
    src ? <Image src={src} width={30} height={30} alt={alt} objectFit="contain" /> : null;

  return (
    <Box bg={useColorModeValue("white", "gray.800")}  p={4} borderRadius="md">
      <Tabs 
      variant="enclosed" 
      isFitted 
      colorScheme="red"
      index={tabIndex}
      onChange={(index) => {
        // Se o índice for o mesmo, oculta o painel
        setTabIndex((prev) => (prev === index ? -1 : index));
      }}
      
      >
      <TabList borderBottom='20px'>
  <Grid
    templateColumns={{
      base: "1fr",           // 1 por linha em telas muito pequenas
      sm: "repeat(2, 1fr)",  // 2 por linha em telas pequenas
      md: "repeat(3, 1fr)",  // 3 por linha em telas médias e maiores
    }}
    gap={4}
    width="100%"
    px={{ base: 4, md: 8 }}
  >
    {menus.map((menu, idx) => (
      <Tab
        key={menu.id}
        borderWidth="1px"
        borderRadius="md"
        border='2px solid black'
        _selected={{ bg: colors.transparenciaRed, color: "white",   border:'0' }}
        fontSize={useAccessibility?.fonts?.large}
        p={4}
        whiteSpace="normal" // Permite quebrar linha no texto
        textAlign="left"
        height="80px"
        display="flex"
        flexDirection="row"
        alignItems="center"
        justifyContent="center"
        gap={6}
        fontWeight='bold'
        fontFamily={'Open Sans'}

      >
        <Image src={menu.imageURL} alt={menu.title} width={70} height={70} />
        {menu.title}
      </Tab>
    ))}
  </Grid>
</TabList>


        <TabPanels borderTop='2px solid' mt='20px' borderTopColor={colors.transparenciaRed}>
          {menus.map((menu) => (
            <TabPanel 
            key={menu.id} 
             py={6}
            transition="transform 0.3s ease-in-out"
              transform={tabIndex === -1 ? "translateX(-100%)" : "translateX(0%)"}
            >
              <Grid
                templateColumns={{
                  base: "1fr",     // 1 item por linha em telas muito pequenas
                  sm: "repeat(2, 1fr)",  // 2 por linha em telas pequenas
                  md: "repeat(3, 1fr)",  // 3 por linha em telas médias e maiores
                }}
                gap={3}
              >
                {menu.submenus.map((submenu: any) => {
                  const imageSrc = submenu.imageURL || submenu.imageUrl;
                  const imageSrc2 = submenu.imageURL2 || submenu.imageUrl2;
                  const title = submenu.title || submenu.label;
                  const url = submenu.url || submenu.link;
                  const isExternal = url?.startsWith("http");
                  const hasExtraLinks = submenu.extralinks?.length > 0;

                  return (
                    <Box
                      key={submenu.id_submenu}
                      p={4}
                      //border="1px solid red"
                      borderRadius="lg"
                      boxShadow="md"
                      _hover={{ transform: "scale(1.02)", transition: "transform 0.2s" }}
                      width='80%'
                      ml='30px'
                    >
                      {hasExtraLinks ? (
                       <Accordion allowToggle>
                                 <AccordionItem border="none">
                                   <h2>
                                     <AccordionButton 
                                       px={0}
                                       _hover={{ bg: 'gray.100' , color: 'black'}} 
                                       _expanded={{ bg: 'gray.100', color: 'black' }} 
                                       borderRadius="md"
                                     >
                                       <Box fontWeight="bold" flex="1" textAlign="left" display="flex" alignItems="center" gap={3}  fontSize={useAccessibility?.fonts?.large}>
                                         <SubMenuIcon src={useColorModeValue(imageSrc,imageSrc2)} alt={title} />
                                         <Text  fontSize={useAccessibility?.fonts?.regular} >{title}</Text>
                                       </Box>
                                       <AccordionIcon />
                                     </AccordionButton>
                                   </h2>
                                   <AccordionPanel px={1} pb={4}>
                                     <VStack align="start" spacing={2} pl={imageSrc ? 7 : 0}>
                                       {submenu.extralinks.map((link: any, index: number) => {
                                         const isExternalLink = link.url?.startsWith("http");
                       
                                         return (
                                           <Flex 
                                             key={index} 
                                             p={2}
                                             borderRadius="md"
                                             _hover={{ bg: 'gray.100', color:'black' }}
                                             width="100%"
                                             align="center"
                                           >
                                             <a 
                                               href={link.url} 
                                               target={isExternalLink ? "_blank" : "_self"} 
                                               rel={isExternalLink ? "noopener noreferrer" : undefined}
                                               style={{ display: 'block', width: '100%' }}
                                             >
                                               <Text fontSize="sm"  fontWeight='bold'>{link.label}</Text>
                                             </a>
                                           </Flex>
                                         );
                                       })}
                                     </VStack>
                                   </AccordionPanel>
                                 </AccordionItem>
                               </Accordion>
                      ) : (
                        url && (
                          <Flex
                            align="center"
                            gap={3}
                            as="a"
                            href={url}
                            target={isExternal ? "_blank" : "_self"}
                            rel={isExternal ? "noopener noreferrer" : undefined}
                            _hover={{ textDecoration: "underline" }}
                          >
                            <SubMenuIcon src={useColorModeValue(imageSrc,imageSrc2)} alt={title} />
                            <Text fontSize="lg" fontWeight="bold">
                              {title}
                            </Text>
                          </Flex>
                        )
                      )}
                    </Box>
                  );
                })}
              </Grid>
            </TabPanel>
          ))}
        </TabPanels>
      </Tabs>
    </Box>
  );
}

export default CardHomeTabs;
