import {
  Flex,
  Box,
  useColorModeValue,
  Text,
  Stack,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverBody,
} from "@chakra-ui/react";
import { isMobile } from "react-device-detect";
import { useFontSizeAccessibilityContext } from "../../../context/fontSizeAccessibility";
import { Left } from "../../CardBigTransformation/styles";

interface DescriptionWithIconProps {
  label: string;
  value: string;
  icon?: any;
  descriptionValue: string;
  labelDescription: string;
  year: string;
}

const DescriptionWithIcon: React.FC<DescriptionWithIconProps> = ({
  label,
  value,
  icon,
  descriptionValue,
  labelDescription,
  year,
}) => {
  const accessibility = useFontSizeAccessibilityContext();
  return (
    <Popover placement="bottom">
      <PopoverTrigger>
        <Stack
          as="button"
          display={"flex"}
          flexDirection={"row"}
          m={0}
          bg={useColorModeValue("white", "gray.800")}
          border={"1px"}
          borderColor={useColorModeValue("lightgray", "white")}
          rounded="md"
          overflow="hidden"
          width="320px"
          height="85px"
          borderRadius="18px"
          marginStart={isMobile ? 0 : 10}
        >
          <Flex
            width={"25%"}
            height="100%"
            backgroundColor={useColorModeValue("rgb(205, 67, 83)", "gray.800")}
            justifyContent="center"
            alignItems="center"
          >
            <Box as={icon} fontSize="35px" color="white" />
          </Flex>

          <Flex
            width={"75%"}
            height="90%"
            paddingLeft={1}
            direction="column"
            justifyContent="space-between"
            alignItems="center"
          >
            <Flex
              width={"100%"}
            
              paddingLeft={1}
              direction="column"
              justifyContent="center"
            >
              <Text fontSize={accessibility?.fonts?.regular} textAlign={"left"}>
                {label}
              </Text>
            </Flex>
            <Flex
              width={"100%"}
            
              paddingLeft={1}
              direction="column"
              justifyContent="flex-start"
              alignItems="flex-start"
            >
              <Text fontSize={accessibility?.fonts?.micro} color="gray.600">
                {labelDescription}
              </Text>
            </Flex>
            <Flex
              width={"100%"}
           
              paddingLeft={1}
              direction="column"
              justifyContent="flex-start"
              alignItems="flex-start"
            >
              <Text fontSize={accessibility?.fonts?.regular}>{value}</Text>
            </Flex>
            <Flex
              width={"100%"}
            
              paddingLeft={1}
              direction="column"
              justifyContent="flex-start"
              alignItems="flex-start"
            >
              <Text fontSize={accessibility?.fonts?.micro}>
                {descriptionValue} [ano base {year}]
              </Text>
            </Flex>
          </Flex>
        </Stack>
      </PopoverTrigger>
      {/* Outras funcionalidades do Popover podem ser adicionadas aqui se necessário */}
    </Popover>
  );
};

export default DescriptionWithIcon;
