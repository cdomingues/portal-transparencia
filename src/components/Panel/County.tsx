import { Image, Stack, Grid } from "@chakra-ui/react";
import dynamic from "next/dynamic";
import { isMobile } from "react-device-detect";
import descriptionEducacao from "../../data/perfil-educacao";
import Description from "./components/Description";
import DescriptionWithIcon from "./components/DescriptionWithIcon";
import image from "../../assets/images/business.jpg";

const CountyPanel = () => {
  return (
    <Stack direction={isMobile ? "column" : "row"} justifyContent="center" alignItems="center">

      <Stack flex={4} width="100%" justifyContent="center" alignItems="center">
        <Grid
          templateColumns={isMobile ? "repeat(1, 1fr)" : "repeat(2, 1fr)"}
          gap={4}
          alignItems="start"
          justifyContent="center"
          width={isMobile ? "100%" : "90%"} // Configura a largura do grid
        >
          {descriptionEducacao.map(
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
        </Grid>
      </Stack>

    </Stack>
  );
};

export default CountyPanel;
