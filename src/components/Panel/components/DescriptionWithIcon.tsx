import { Icon, Stack, Text } from "@chakra-ui/react";

const DescriptionWithIcon = ({
  label,
  value,
  icon,
  descriptionValue,
  labelDescription,
  year,
}: {
  label: string;
  value: string;
  icon?: any;
  descriptionValue: string;
  labelDescription: string;
  year: string;
}) => (
  <Stack
    direction="row"
    backgroundColor="white"
    alignItems="center"
    style={{
      height: "65px",
      padding: "2%",
      borderRadius: "5px",
      marginBottom: "19px",
      marginTop: "0px",
      marginRight: "19px",
      marginLeft: "19px",
    }}
  >
    <Stack flex={1} direction="row">
      <Icon as={icon} fontSize="2xl" color="primary" />
      <Text fontWeight="550" fontSize="small">
        {label}
      </Text>
      <Text paddingTop="6px" fontSize="10px" color="gray.600">
        {labelDescription}
      </Text>
    </Stack>
    <Stack flex={1} direction="row">
      <Text>{value}</Text>
      <Text paddingTop="4px" fontSize="10px">
        {descriptionValue}
      </Text>
      <Text paddingTop="6px" fontSize="10px" color="gray.600">
        [{year}]
      </Text>
    </Stack>
  </Stack>
);

export default DescriptionWithIcon;
