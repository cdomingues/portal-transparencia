import { Accordion, AccordionItem, AccordionButton, AccordionPanel, AccordionIcon, Box, Grid, Image, useColorModeValue } from "@chakra-ui/react";
import { FC, ReactNode } from "react";

interface CustomAccordionProps {
    icon: string | ReactNode;
    title: string;
  }

const CustomAccordion: FC<CustomAccordionProps> = ({ icon, title }) => {
  return (
    <Accordion allowToggle>
      <AccordionItem border="1px solid black" borderRadius="md" mx='20px'>
        <h2>
        <AccordionButton _expanded={{ bg: "red", color: "white" }}>
            <Box flex="1" textAlign="left" fontWeight="bold" display="flex" alignItems="center" gap={2} fontSize='20px'>
              <Box width={"70px"} display="flex" alignItems="center" justifyContent="center">
                {typeof icon === "string" ? <img src={icon} width={70} alt="" /> : icon}
              </Box>
              {title}
            </Box>
            <AccordionIcon />
          </AccordionButton>
        </h2>
        <AccordionPanel pb={4}>
          <Grid
            templateColumns={{ base: "1fr", md: "repeat(2, 1fr)" }}
            gap={4}
            width={{ base: "100%", md: "80%" }}
            maxWidth="1280px"
            margin="0 auto"
            padding="0 15px"
          >
            <Box bg={useColorModeValue("white", "gray.800")} overflow="visible" marginBottom="15px">
             
            </Box>
          </Grid>
        </AccordionPanel>
      </AccordionItem>
    </Accordion>
  );
};

export default CustomAccordion;
