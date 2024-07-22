import { Box, Button, Link, useColorModeValue, Text} from "@chakra-ui/react";
import { isMobile } from "react-device-detect";
import  {useFontSizeAccessibilityContext} from '../../context/fontSizeAccessibility'
import colors from "../../styles/colors";

interface ButtonDownloadProps {
    url: string;
    title: string;
  }


  const ButtonDownload: React.FC<ButtonDownloadProps> = ({ url, title }) => {
    const accessibility = useFontSizeAccessibilityContext()
    return(
<Text
                align={isMobile ? "justify" : "left"}
                color="gray.500"
                fontSize={accessibility?.fonts?.regular}
                mt="5px"
              > <Link href={url} target="blank" style={{ color: "#db334f" }}> 
              <Button
              _hover={{ bg: "gray.200", color: "white" }}
              size="sm"
              bg="primary"
              color="white"
              
              onClick={() => {
                
              }}
              
              style={{ width: 400 }}
            >
              <Text fontSize={accessibility.fonts.medium} color={colors.white}>{title}</Text>
             
            </Button></Link></Text>  )
} 

export default ButtonDownload