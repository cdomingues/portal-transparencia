import { Image, Stack } from "@chakra-ui/react";
import dynamic from "next/dynamic";
import { isMobile } from "react-device-detect";
import descriptionEducacao from "../../data/perfil-educacao";
import Description from "./components/Description";
import DescriptionWithIcon from "./components/DescriptionWithIcon";
import image from "../../assets/images/business.jpg";

const EducationPanel = () => {
  return (
    <Stack direction={isMobile ? "column" : "row"}>
      <Stack direction="column" flex={2}>
        <Image
          height={isMobile ? "300px" : "570px"}
          width={isMobile ? "100%" : "520px"}
          alt="image"
          objectFit="cover"
          src={image.src}
        />
        {/* <div
          style={{
            borderRadius: "5px",
            marginBottom: "19px",
            marginTop: "0px",
            marginRight: "0px",
            marginLeft: "0px",
          }}
        >
          <Description label="Prefeito" value="CAIO CÉSAR MACHADO DA CUNHA" />
          <Description label="Gentílico" value="MOGIANO" />
        </div> */}
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
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default EducationPanel;
