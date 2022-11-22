import { Stack, Text } from "@chakra-ui/react";

const Description = ({ label, value }: { label: string; value: string }) => (
  <Stack
    direction="row"
    backgroundColor="white"
    justifyContent="space-between"
    alignItems="center"
    style={{
      height: "65px",
      padding: "2%",
      borderRadius: "5px",
      marginBottom: "19px",
      marginTop: "19px",
    }}
  >
    <Text fontWeight="550" fontSize="small">
      {label}
    </Text>
    <Text fontSize="small">{value}</Text>
  </Stack>
);

export default Description;
