import { Select, Stack, Text, AspectRatio, useColorModeValue } from "@chakra-ui/react";
import React, { useState, useEffect } from "react";
import ContainerBasic from "../../../components/Container/Basic";
import PlanContainer from "../../../components/Container/Plan";
import { isMobile } from "react-device-detect";
import NoClickIframe from "../../../components/IframeNoClick";



function Clock10Seconds() {
  const [ time, setTime ] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 10000);
    return () => clearInterval(interval);
  }, []);

  return <p>{time.toLocaleTimeString()}</p>;
}

function Clock30Seconds() {
  const [ time, setTime ] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 30000);
    return () => clearInterval(interval);
  }, []);

  return <p>{time.toLocaleTimeString()}</p>;
}



type PropsInput = {
  handler: {

  };
};

function Screen({ handler }: PropsInput) {
  const { } = handler;
  const title = "Agenda Aberta";
  const description =
    "Conforme previsto na Lei Municipal 7.653/2021 e no Decreto 21.006/22, todo cidadão pode ter acesso à agenda de compromissos oficiais das autoridades do Executivo de Mogi das Cruzes. Esta é mais uma medida de promoção da integridade no setor público.";
  return (


    <ContainerBasic title={title} description={description}>

      <AspectRatio maxWidth={900} ratio={isMobile ? [ 9 / 16 ] : [ 16 / 9 ]}>


        <NoClickIframe src='https://calendar.google.com/calendar/embed?height=600&organizer="no"&eventDetails=1&wkst=1&bgcolor=%23ffffff&ctz=America%2FSao_Paulo&mode=AGENDA&showTitle=1&showNav=0&showDate=1&showPrint=0&showTabs=0&showCalendars=0&hl=pt_BR&src=MDM1MDY5YTUyZjYzYzIxNGI0NzEzMDVlYzljYTM2NDMzMDI1MDIxMTQ5NTJjZTk5Y2EwNDljYTBhMjBjYTQ3Y0Bncm91cC5jYWxlbmRhci5nb29nbGUuY29t&color=%23616161" style="border:solid 1px #777" maxwidth="640" maxheight="480" frameborder="0" scrolling="no" target="_blank"' />

        {/* <iframe style={{pointerEvents: 'none'}} id="iframe"
    src='https://calendar.google.com/calendar/embed?height=600&organizer="no"&eventDetails=1&wkst=1&bgcolor=%23ffffff&ctz=America%2FSao_Paulo&mode=AGENDA&showTitle=1&showNav=0&showDate=1&showPrint=0&showTabs=0&showCalendars=0&hl=pt_BR&src=MDM1MDY5YTUyZjYzYzIxNGI0NzEzMDVlYzljYTM2NDMzMDI1MDIxMTQ5NTJjZTk5Y2EwNDljYTBhMjBjYTQ3Y0Bncm91cC5jYWxlbmRhci5nb29nbGUuY29t&color=%23616161" style="border:solid 1px #777" maxwidth="640" maxheight="480" frameborder="0" scrolling="no" target="_blank"'
  /> */}

      </AspectRatio>


      <div>
        <Clock10Seconds />
        <Clock30Seconds />
      </div>

    </ContainerBasic>

  );
}

export default Screen;
