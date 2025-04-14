import {
  Flex,  Box,  useColorModeValue,  Text,   Accordion,  AccordionItem,  AccordionPanel,  AccordionButton,  AccordionIcon,  VStack, Tooltip,
} from "@chakra-ui/react";
import { Grid } from "@chakra-ui/react";
import { isMobile } from "react-device-detect";
import Image from "next/image";
import { useFontSizeAccessibilityContext } from "../../context/fontSizeAccessibility";

import {menus} from './menu'
import { useState } from "react";

function CardHome() {
  const [isExpanded, setIsExpanded] = useState(false);
  const titulo = "O que é a Lei de Acesso à Informação (LAI)?"; 
  const useAccessibility = useFontSizeAccessibilityContext();
  const columnLayout = () => {
    if (window.innerWidth <= 480) {
      return "1fr";
    } else if (window.innerWidth <= 768) {
      return "1fr 1fr";
    } else {
      return "repeat(3, 1fr)";
    }
  };

  const templateColumns = columnLayout();

  const MenuIcon = ({ src, alt }: { src: string; alt: string }) => (
    <Image 
      src={src} 
      width={70} 
      height={70}
      alt={alt}
      objectFit="contain"
    />
  );

  const SubMenuIcon = ({ src, alt }: { src?: string; alt: string }) => (
    src ? (
      <Image 
        src={src} 
        width={50} 
        height={50}
        alt={alt}
        objectFit="contain"
      />
    ) : null
  );


  return (
   <> 
     <Accordion allowToggle bg={useColorModeValue("white", "gray.800")}>
      {menus.map((menu) => (
        <Tooltip 
          key={menu.id}
          label={menu.description} 
          placement="auto" 
          hasArrow
          width='800px' 
          height='120px' 
          fontSize={useAccessibility?.fonts?.regular}
          p='25px' 
          borderRadius='12px' 
          bg={useColorModeValue("black", "white")}
          color={useColorModeValue("white", "black")}
          border='1px solid lightgrey' 
          boxShadow="lg"
          transition="0.3s"
          openDelay={400}
      closeDelay={100}
        >
          <AccordionItem 
            border={`2px solid ${useColorModeValue("", "gray.800")}`}
            borderRadius="md" 
            mx={{ base: '20px', md: '80px' }}
            boxShadow="lg"  
            bg={useColorModeValue("", "gray.800")}
            mb={4}
            fontSize={useAccessibility?.fonts?.regular}
          >
            <h2>
              <AccordionButton bg={useColorModeValue("", "gray.800")}  borderRadius='18px'  border={`2px solid ${useColorModeValue("gray.800", "")}`}>
                <Box 
                  flex="1" 
                  textAlign="left" 
                  fontWeight="bold" 
                  borderRadius='12px' 
                  display="flex" 
                  alignItems="center" 
                  gap={8} 
                  fontSize={useAccessibility?.fonts?.regular}
                  bg={useColorModeValue("", "gray.800")} 
                  _expanded={{ filter: "invert(1)" }}
                 
                >
                  <MenuIcon src={menu.imageURL} alt={menu.title} />
                  {menu.title}
                </Box>
                <AccordionIcon _expanded={{ color: "white" }} />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={8} >
              <Grid
                templateColumns={templateColumns}
                gap={6}
                width={isMobile ? "100%" : "80%"}
                maxWidth={"1280px"}
                margin="0 auto"
                padding="0 15px"
                fontSize={useAccessibility?.fonts?.regular}
              >
                {menu.submenus.map((submenu: any) => {
  const imageSrc = submenu.imageURL || submenu.imageUrl;
  const title = submenu.title || submenu.label;
  const url = submenu.url || submenu.link;
  const hasExtraLinks = submenu.extralinks?.length > 0;

  const isExternal = url?.startsWith('http');

  return (
    <Box 
      key={submenu.id_submenu} 
      p={4} 
      borderWidth="1px" 
      borderRadius="lg"
      boxShadow="md"
      _hover={{ transform: 'scale(1.02)', transition: 'transform 0.2s' }}
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
                  <SubMenuIcon src={imageSrc} alt={title} />
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
            _hover={{ textDecoration: "underline", color: "gray.700" }}
          >
            <SubMenuIcon src={imageSrc} alt={title} />
            <Text fontSize="lg" fontWeight="bold" >{title}</Text>
          </Flex>
        )
      )}
    </Box>
  );
})}

              </Grid>
            </AccordionPanel>
          </AccordionItem>
        </Tooltip>
      ))}
    </Accordion>
    
    </>
  );
}

export default CardHome;
