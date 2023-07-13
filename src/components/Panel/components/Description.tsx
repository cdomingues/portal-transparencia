import { Stack, Text, useColorModeValue } from "@chakra-ui/react";
import { isMobile } from "react-device-detect";
import { useFontSizeAccessibilityContext } from "../../../context/fontSizeAccessibility";

const Description = ({ label, value }: { label: string; value: string }) => {
  const accessibility = useFontSizeAccessibilityContext();
  return (
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
        marginTop: "19px",
      }}
    >
      <Text fontWeight="550" fontSize={accessibility?.fonts?.medium}>
        {label}
      </Text>
      <Text fontSize={accessibility?.fonts?.medium}>{value}</Text>
    </Stack>
  );
};
export default Description;
