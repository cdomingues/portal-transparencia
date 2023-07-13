import { Stack, useColorModeValue } from "@chakra-ui/react";
import dynamic from "next/dynamic";
import { isMobile } from "react-device-detect";
import descriptionData from "../../data/perfil-do-municipio";
import Description from "./components/Description";
import DescriptionWithIcon from "./components/DescriptionWithIcon";

const MapWithNoSSR = dynamic(() => import("../Map"), {
  ssr: false,
});

const CountyPanel = () => {
  return (
    <Stack direction={isMobile ? "column" : "row"}>
      <Stack direction="column" flex={2}>
        <Stack
          style={
            isMobile
              ? {
                  height: "300px",
                  width: "100%",
                  marginBottom: "3%",
                  zIndex: 0,
                }
              : {
                  height: "570px",
                  width: "520px",
                  marginBottom: "0%",
                  zIndex: 0,
                }
          }
        >
          <MapWithNoSSR coords={[-23.528986, -46.192973]} />
        </Stack>
        <Stack
          style={{
            borderRadius: "5px",
            marginBottom: "0px",
            marginTop: "0px",
            marginRight: "0px",
            marginLeft: "0px",
          }}
        >
          <Description label="Prefeito" value="CAIO CÉSAR MACHADO DA CUNHA" />
          <Description label="Gentílico" value="MOGIANO" />
        </Stack>
      </Stack>
      <Stack flex={4} width="100%">
        <Stack
          direction={isMobile ? "column" : "row"}
          flex={1}
          style={
            !isMobile
              ? { paddingLeft: "4%", paddingRight: "4%", width: "90%" }
              : {}
          }
        >
          <Stack direction="column" flex={3}>
            {descriptionData.map(
              (
                {
                  label,
                  value,
                  descriptionValue,
                  labelDescription,
                  year,
                  icon,
                },
                index
              ) => (
                <DescriptionWithIcon
                  descriptionValue={descriptionValue}
                  label={label}
                  value={value}
                  key={index}
                  labelDescription={labelDescription}
                  year={year}
                  icon={icon}
                />
              )
            )}
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default CountyPanel;
