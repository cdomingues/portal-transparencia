import { Select, Stack, Text, AspectRatio, useColorModeValue } from "@chakra-ui/react";
import React from "react";
import ContainerBasic from "../../../components/Container/Basic";
import PlanContainer from "../../../components/Container/Plan";
import { isMobile } from "react-device-detect";

type PropsInput = {
  handler: {
  
  };
};

function Screen({ handler }: PropsInput) {
  const { } = handler;
  const title = "Agenda Aberta";
  const description =
    "Conforme previsto no Decreto XXX, será realizado a publicação da agenda das autoridades do municipio.";
  return (


<ContainerBasic title={title} description={description}>

<AspectRatio maxWidth={900} ratio={isMobile ? [9 / 16] : [16 / 9 ]}>


  <iframe
    src='https://calendar.google.com/calendar/embed?height=600&wkst=1&bgcolor=%23ffffff&ctz=America%2FSao_Paulo&showNav=0&showDate=0&showPrint=0&showTabs=0&showCalendars=0&hl=pt_BR&src=MDM1MDY5YTUyZjYzYzIxNGI0NzEzMDVlYzljYTM2NDMzMDI1MDIxMTQ5NTJjZTk5Y2EwNDljYTBhMjBjYTQ3Y0Bncm91cC5jYWxlbmRhci5nb29nbGUuY29t&color=%23616161" style="border:solid 1px #777" maxwidth="640" maxheight="480" frameborder="0" scrolling="no"'
  />
  
</AspectRatio>

</ContainerBasic>

  );
}

export default Screen;
