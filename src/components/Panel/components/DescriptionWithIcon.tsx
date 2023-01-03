import { Icon, Stack, Box, Text, VStack } from "@chakra-ui/react";
import { isMobile } from "react-device-detect";

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
    bgColor={'white'}
    direction="row"
    style={{
      height: "65px",
      width: isMobile? "330px" : "365px",
      padding: "2%",
      borderRadius: "5px",
      marginBottom: "19px",
      marginTop: "0px",
      marginRight: "19px",
      marginLeft: isMobile? "0px" : "19px",
    }}
  >

<Stack direction={['row']} spacing='5px' >
<Box w='40px' h='55px' paddingTop='10px'>
  <Icon as={icon} fontSize='35px' color="primary" />
</Box>

          <Box w='130px' h='25px'>
              <VStack 
                spacing={0.5}
                align='stretch'
              >
                <Box h='10px' w='90px' >
                  <Text fontWeight="550" fontSize="small" padding={'0'}>
                    {label}
                  </Text>
                </Box>
                <Box w='90px'>
                  <Text paddingTop="6px" fontSize="8px" color="gray.600">
                    {labelDescription}
                  </Text>
                </Box>
              </VStack>
          </Box>

          <Box w='100px' h='25px'>
              <VStack 
                spacing={0.5}
                align='stretch'
              >
                <Box h='25px'>
                <Text fontSize="14px">{value}</Text>
                </Box>
                <Box h='20px' >
                    <Text paddingTop="4px" fontSize="8px">
                      {descriptionValue}
                   </Text>
                </Box>
              </VStack>
          </Box>

          <Box w='40px' h='50px'> 
              
                <Text paddingTop="20px" paddingRight='5px' fontSize="10px" color="gray.600" >
        [{year}]
      </Text>
               
          </Box>
</Stack>
  </Stack>
);

export default DescriptionWithIcon;
