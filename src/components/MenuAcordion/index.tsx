import { Accordion, AccordionItem, AccordionButton, AccordionPanel, AccordionIcon, Box, Image, Link, VStack } from "@chakra-ui/react";
import { Icon } from "leaflet";

interface IMenuItem {
  title: string;
  imageURL: string | any;
  backgroundColor: string;
  link: string;
  extraLinks?: { label: string; url: string }[] | false;
}

const AccordionMenuItem: React.FC<IMenuItem> = ({ title, imageURL, backgroundColor, link, extraLinks }) => {
  // Se não houver extraLinks, exibe apenas um Link normal
  if (!extraLinks || extraLinks.length === 0) {
    return (
      <Link
        href={link}
        display="flex"
        alignItems="center"
        gap={3}
        fontSize="18px"
        bg="gray.50"
        p={3}
        borderRadius="md"
        boxShadow="lg"
        color="black"
        _hover={{ textDecoration: "underline", bg: "blue.100" }}
        target="_blank"
        height='100px'
      >
        <Image src={imageURL} width={50} height={50} alt={title} />
        {title}
      </Link>
    );
  }

  // Caso tenha extraLinks, exibe como um Accordion
  return (
    <Accordion allowToggle >
      <AccordionItem borderRadius="md" boxShadow="lg" p={2} mb={2} bg="gray.50" minHeight='100px'>
        <AccordionButton _expanded={{ bg: backgroundColor, color: "white" }}>
          <Box flex="1" textAlign="left" display="flex" alignItems="center" gap={3} fontSize="18px" color="black"  _expanded={{color:"white"}} >
            <Image src={imageURL} width={50} height={50} alt={title} />
            {title}
          </Box>
          <AccordionIcon />
        </AccordionButton>
        <AccordionPanel pb={4}>
          <VStack align="start" spacing={2}>
            {extraLinks.map((link, index) => (
              <Link key={index} href={link.url} color="blue.600" _hover={{ textDecoration: "underline" }} target="_blank">
                {link.label}
              </Link>
            ))}
          </VStack>
        </AccordionPanel>
      </AccordionItem>
    </Accordion>
  );
};

export default AccordionMenuItem;
