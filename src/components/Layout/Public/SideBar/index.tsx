/* eslint-disable react-hooks/rules-of-hooks */
import React, { ReactNode, useState } from "react";
import {
  IconButton,
  Box,
  CloseButton,
  Flex,
  HStack,
  Icon,
  useColorModeValue,
  Link,
  Drawer,
  DrawerContent,
  Text,
  useDisclosure,
  BoxProps,
  FlexProps,
  Menu,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionIcon,
  AccordionPanel,
  Divider,
  Image,
  useColorMode,
  Button,
  MenuButton,
  MenuList,
  MenuItem,
  Popover,
  PopoverTrigger,
  PopoverContent,

} from "@chakra-ui/react";
import {
  BsDashCircle,
  BsDashCircleFill,
  BsFacebook,
  BsFillMoonFill,
  BsGrid3X3Gap,
  BsGrid3X3GapFill,
  BsInstagram,
  BsMap,
  BsMapFill,
  BsPlusCircle,
  BsPlusCircleFill,
  BsSunFill,
  BsTwitter,
  BsYoutube,
} from "react-icons/bs";
import { FiMenu, FiBell } from "react-icons/fi";
import { isMobile } from "react-device-detect";
import { IconType } from "react-icons";
import logo from "../../../../assets/images/Brasao_horizontal_normal.png";
import logoDark from "../../../../assets/images/Brasao_horizontal_branco.png";
import { GroupRoutes, IPublicRoute, Routes } from "../../../../types";
//import Header from "../Header";
import { useRouter } from "next/router";
import { useFontSizeAccessibilityContext } from "../../../../context/fontSizeAccessibility";
import useWindowDimensions from "../../../../utils/useWindowDimensions";

interface SidebarProps extends BoxProps {
  onClose: () => void;
  routes: IPublicRoute[];
}

interface NavItemProps extends FlexProps {
  icon: IconType  ;
  children: React.ReactNode;
  path?: string;
  link?: string;
  group?: Routes;
  subgroup?: boolean;
  removePadding?: boolean;
}





function NavItem({
  icon,
  path,
  group = [],
  link,
  children,
  key,
  removePadding,
}: NavItemProps) {
  const accessibility = useFontSizeAccessibilityContext();
  const [expanded, setExpanded] = useState(false);

 

 

  return (
    <h1>1</h1>
  );
}




interface MobileProps extends FlexProps {
  onOpen: () => void;
}


export default function SidebarWithHeader({
  children,
  routes,
}: {
  children: ReactNode;
  routes: IPublicRoute[];
}) {
  const { isOpen, onOpen, onClose } = useDisclosure();

  //const { width } = useWindowDimensions();

  return (
    <Box minH="100vh"  bg={useColorModeValue("white", "gray.900")}  >
     

     
      {/* mobilenav */}
      
      <Box  p="10">
        {children}
      </Box>
    </Box>
  );
}
