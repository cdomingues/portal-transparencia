import {
  Box,
  Flex,
  Text,
  Grid,
  VStack,
  useColorModeValue,
  Accordion,
  AccordionItem,
  AccordionPanel,
  AccordionButton,
  AccordionIcon,
} from "@chakra-ui/react";
import Image from "next/image";
import { useFontSizeAccessibilityContext } from "../../context/fontSizeAccessibility";
import { menus } from "./menu";
import colors from "../../styles/colors";
import { useState } from "react";

function CardHomeTabs() {
  const useAccessibility = useFontSizeAccessibilityContext();
  const [openAcordionId, setOpenAcordionId] = useState<number | null>(null);

  const SubMenuIcon = ({ src, alt }: { src?: string; alt: string }) =>
    src ? (
      <Image src={src} width={30} height={30} alt={alt} objectFit="contain" />
    ) : null;

    const handleToggle = (id: number)=>{
      setOpenAcordionId((prevId) => (prevId === id ? null : id));
    }
  return (
    <Box bg={useColorModeValue("white", "gray.800")} p={4} borderRadius="md">
      
        <Grid
          templateColumns={{
            base: "1fr",
            sm: "repeat(2, 1fr)",
            md: "repeat(3, 1fr)",
          }}
          gap={6}
          px={{ base: 4, md: 8 }}
        >
          {menus.map((menu) => (
            <Accordion key={menu.id} allowToggle  index={openAcordionId === menu.id ? 0 : -1}
            onChange={() =>
              setOpenAcordionId((prev) => (prev === menu.id ? null : Number(menu.id)))
            }>
            <AccordionItem
              key={menu.id}
              //border="1px solid black"
              borderRadius="md"
              overflow="hidden"
              bg={useColorModeValue('white', "gray.700")}
              boxShadow="md"
              
              >
              
              <AccordionButton
                px={4}
                py={4}
               // _hover={{ bg: "red", color: "black" }}
                _expanded={{ 
                  bg: colors.transparenciaRed,
                  color: "white",
                  borderBottomLeftRadius: "0",
                  borderBottomRightRadius: "0",
                  }}

              >
                <Flex align="center" gap={4} flex="1" textAlign="left">
                  <Image 
                    
                  src={useColorModeValue(menu.imageURL,menu.imageURL2)} alt={menu.title} width={70} height={70} />
                  <Text
                    fontWeight="bold"
                    fontSize={useAccessibility?.fonts?.large}
                    fontFamily="Open Sans"
                  >
                    {menu.title}
                  </Text>
                </Flex>
                <AccordionIcon />
              </AccordionButton>

              <AccordionPanel px={4} pb={4} position="absolute"
                      left="0"
                      width="95%" // ou um valor maior que o container
                      bg={useColorModeValue('white', "gray.700")}
                      zIndex={10}
                      boxShadow="xl"
                      border="2px solid"
                      borderColor={colors.transparenciaRed}
                      ml="48px"
                      
                      borderRadius="md"
                      mt='-2'
                      sx={{
  ml: { base: '29px', md: '48px' },      // 29px no mobile, 48px no md+ 
  width: { base: '85.5%', md: '95%' }    // 85.5% no mobile, 95% no md+
}}
                      >
                <VStack spacing={3} align="stretch">
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
                        p={3}
                        borderRadius="lg"
                      //  _hover={{ bg: "yellow" }}
                      >
                        {hasExtraLinks ? (
                          <Accordion allowToggle>
                            <AccordionItem border="none">
                              <h2>
                                <AccordionButton
                                  px={0}
                                  _hover={{ bg: "gray.100", color: "black" }}
                                  _expanded={{ bg: "gray.100", color:  "black" }}
                                  borderRadius="md"
                                >
                                  <Box
                                    fontWeight="bold"
                                    flex="1"
                                    textAlign="left"
                                    display="flex"
                                    alignItems="center"
                                    gap={3}
                                    fontSize={useAccessibility?.fonts?.large}
                                   
                                  >
                                    <SubMenuIcon src={useColorModeValue(imageSrc, imageSrc2)} alt={title} />
                                    <Text fontSize={useAccessibility?.fonts?.regular}>{title}</Text>
                                  </Box>
                                  <AccordionIcon />
                                </AccordionButton>
                              </h2>
                              <AccordionPanel px={2} pb={4} border='1px soli red' mt='20px'>
                                <VStack align="start" spacing={2} pl={imageSrc ? 7 : 0}>
                                  {submenu.extralinks.map((link: any, index: number) => {
                                    const isExternalLink = link.url?.startsWith("http");
                                    return (
                                      <a
                                        key={index}
                                        href={link.url}
                                        target={isExternalLink ? "_blank" : "_self"}
                                        rel={isExternalLink ? "noopener noreferrer" : undefined}
                                        style={{ width: "100%" }}
                                        color="yellow"
                                      >
                                        <Text fontSize="sm" fontWeight="bold">
                                          {link.label}
                                        </Text>
                                      </a>
                                    );
                                  })}
                                </VStack>
                              </AccordionPanel>
                            </AccordionItem>
                          </Accordion>
                        ) : (
                          url && (
                            <a
                              href={url}
                              target={isExternal ? "_blank" : "_self"}
                              rel={isExternal ? "noopener noreferrer" : undefined}
                              style={{ display: "flex", alignItems: "center", gap: "10px" }}
                            >
                              <SubMenuIcon src={useColorModeValue(imageSrc, imageSrc2)} alt={title} />
                              <Text fontSize="lg" fontWeight="bold">
                                {title}
                              </Text>
                            </a>
                          )
                        )}
                      </Box>
                    );
                  })} </Grid>
                </VStack>
              </AccordionPanel>
            </AccordionItem>
            </Accordion>
          ))}
        </Grid>
     
    </Box>
  );
}

export default CardHomeTabs;
