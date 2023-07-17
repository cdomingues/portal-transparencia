import { Stack, Text, useColorModeValue } from "@chakra-ui/react";
import { isMobile } from "react-device-detect";
import { useFontSizeAccessibilityContext } from "../../../context/fontSizeAccessibility";
import useWindowDimensions from "../../../utils/useWindowDimensions";

const Description = ({ label, value }: { label: string; value: string }) => {
  const accessibility = useFontSizeAccessibilityContext();
  const { height, width } = useWindowDimensions();
  return (
    <Stack 
    direction={isMobile ? "column" : "row"}
    style={{ width: "100%", height: "100%"}}
  >
    <Stack
      flex={width > 1024 ? 2 : 2}
      style={{
        paddingLeft: isMobile ? 0 : "0%",
        paddingRight: isMobile ? 0 : "1%"
      }}
    >
    <Stack
    bgColor={useColorModeValue("white", "gray.700")}
      shadow={"2xl"}
      direction="row"
      justifyContent="space-between"
      alignItems="center"
      style={{
        height: "65px",
        padding: "2%",
        borderRadius: "5px",
        marginBottom: isMobile ? "19px" : "0px",
        marginTop: "19px"
        
      }}
    >
      <Text fontWeight="550" fontSize={accessibility?.fonts?.medium}>
        {label}
      </Text>
      <Text fontSize={accessibility?.fonts?.medium}>{value}</Text>
    </Stack>
    </Stack>
    </Stack>
  );
};
export default Description;
