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
import logo from "../../../../assets/images/logo.png";
import logoDark from "../../../../assets/images/logo_branco.png";
import { GroupRoutes, IPublicRoute, Routes } from "../../../../types";
import Header from "../Header";
import { useRouter } from "next/router";
import { useFontSizeAccessibilityContext } from "../../../../context/fontSizeAccessibility";
import useWindowDimensions from "../../../../utils/useWindowDimensions";

interface SidebarProps extends BoxProps {
  onClose: () => void;
  routes: IPublicRoute[];
}

interface NavItemProps extends FlexProps {
  icon: IconType;
  children: React.ReactNode;
  path?: string;
  link?: string;
  group?: Routes;
  subgroup?: boolean;
  removePadding?: boolean;
}

function ListHeader({ children }: { children: ReactNode }) {
  const accessibility = useFontSizeAccessibilityContext();
  return (
    <Text fontWeight="500" fontSize={accessibility?.fonts?.regular} mb={2}>
      {children}
    </Text>
  );
}

function GroupMenu({
  icon,
  path,
  group = [],
  link,
  children,
  key,
}: NavItemProps) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
      }}
    >
      <Flex
        fontWeight="500"
        fontSize="0.81rem"
        style={{
          height: "38px",
          display: "flex",
          alignItems: "center",
          flexDirection: "row",
          width: "100%",
          justifyContent: "flex-start",
          margin: 0,
          padding: 0,
        }}
      >
        {children}
      </Flex>
      {group?.map((item, index) => (
        <Button
          key={index}
          style={{
            cursor: "pointer",
            height: "38px",
            paddingLeft: "10px",
            fontSize: "14px",
            fontWeight: "400",
            backgroundColor: "transparent",
          }}
          _hover={{
            color: "primary",
          }}
        >
          {item?.icon && (
            <Icon
              mr="4"
              color="primary"
              fontSize="18"
              _groupHover={{
                color: "primary",
              }}
              as={item?.icon}
            />
          )}
          {item.name}
        </Button>
      ))}
    </div>
  );
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

  const handleClick = () => {
    setExpanded(!expanded);
  };

  if (group.length > 0) {
    return (
      <Menu>
        <Flex width="100%" borderRadius="lg" role="group" cursor="pointer">
          <Accordion borderColor="transparent" width="100%" allowToggle>
            <AccordionItem>
              <AccordionButton
                borderRadius="lg"
                _hover={{
                  // bg: "gray.100",
                  color: "primary",
                }}
                fontWeight="500"
              >
                <Link href={link || path} target={link ? "_blank" : "_self"}>
                  <Box
                    flex="1"
                    fontSize={accessibility?.fonts?.semiMedium}
                    textAlign="left"
                    paddingRight={"10px"}
                    minWidth={"180px"}
                    bg={'transparent'}
                  >
                    {icon && (
                      <Icon
                        mr="4"
                        color="primary"
                        fontSize="18"
                        _groupHover={{
                          color: "primary",
                        }}
                        as={icon}
                      />
                    )}

                    {children}
                  </Box>
                </Link>

                <AccordionIcon textAlign="right" onClick={handleClick} />
              </AccordionButton>
              <AccordionPanel pb={4} background={useColorModeValue("transparent", "gray.800")}>
                {expanded &&
                  group.map((item: any) => {
                    const isSubGroup = item.subgroup;

                    if (isSubGroup) {
                      return (
                        <GroupMenu
                          key={`${path}${item.path}`}
                          icon={item.icon}
                          path={
                            item.defaultPath
                              ? `${item.defaultPath}/${item.path}`
                              : item.path
                          }
                          group={item.group}
                          link={item.link}
                          subgroup={item.subgroup}
                        >
                          {item.name}
                        </GroupMenu>
                      );
                    }

                    return (
                      <NavItem
                        removePadding={true}
                        key={`${path}${item.path}`}
                        icon={item.icon}
                        path={
                          item.defaultPath
                            ? `${item.defaultPath}/${item.path}`
                            : item.path
                        }
                        group={item.group}
                        link={item.link}
                        subgroup={item.subgroup || false}
                      >
                        {item.name}
                      </NavItem>
                    );
                  })}
              </AccordionPanel>
            </AccordionItem>
          </Accordion>
        </Flex>
      </Menu>
    );
  }

  return (
    <Link
      href={link || path}
      target={link ? "_blank" : "_self"}
      style={{ textDecoration: "none", margin: 0, padding: 0 }}
      _focus={{ boxShadow: "none" }}
      fontSize={accessibility?.fonts?.semiMedium}
    >
      <Flex width="95%" borderRadius="lg" role="group" cursor="pointer">
        <Flex
          width="100%"
          p={removePadding ? "0" : "2"}
          mx={removePadding ? "0" : "2"}
          borderRadius="lg"
          role="group"
          cursor="pointer"
          _hover={{
            bg: "gray.100",
            color: "primary",
          }}
          fontSize={accessibility?.fonts?.semiMedium}
          style={{
            height: "38px",
            display: "flex",
            alignItems: "center",
            flexDirection: "row",
            width: "100%",
          }}
        >
          <Icon
            mr="4"
            color="primary"
            fontSize="18"
            _groupHover={{
              color: "primary",
            }}
            as={icon}
          />
          {children}
        </Flex>
      </Flex>
    </Link>
  );
}

function SidebarContent({ onClose, routes, ...rest }: SidebarProps) {
  const { colorMode } = useColorMode();
  const media = [
    {
      name: "Facebook",
      url: "https://www.facebook.com/prefeituramogi",
      icon: <BsFacebook size="23px" />,
    },
    {
      name: "Instagram",
      url: "https://www.instagram.com/prefeituramogi/",
      icon: <BsInstagram size="23px" />,
    },
    {
      name: "Twitter",
      url: "https://twitter.com/PrefeituraMogi",
      icon: <BsTwitter size="23px" />,
    },
    {
      name: "Youtube",
      url: "https://www.youtube.com/user/PrefeituraMogi",
      icon: <BsYoutube size="23px" />,
    },
  ];
  return (
    <Flex
      transition="1s ease"
      bg={useColorModeValue("white", "gray.900")}
      borderRight="1px"
      borderRightColor={useColorModeValue("gray.200", "gray.700")}
      w={{ base: "full", md: 60 }}
      pos="fixed"
      h="full"
      fontWeight="600"
      height="100%"
      flexDirection="column"
      css={{
        "&::-webkit-scrollbar": {
          width: "2px",
        },
        "&::-webkit-scrollbar-track": {
          width: "6px",
        },
        "&::-webkit-scrollbar-thumb": {
          background: "transparent",
          borderRadius: "24px",
        },
      }}
    >
      <Flex
        h="20"
        alignItems="center"
        mx="8"
        justifyContent="space-between"
        flex={1}
      >
        <Link
          href={"/"}
          target={"_self"}
          style={{ textDecoration: "none" }}
          _focus={{ boxShadow: "none" }}
          fontSize="13"
        >
          <Image
            alt="logo"
            src={colorMode === "dark" ? logoDark.src : logo.src}
            style={{ width: isMobile ? "50%" : "100%" }}
          />
        </Link>
        <CloseButton display={{ base: "flex", md: "none" }} onClick={onClose} />
      </Flex>
      <Flex
        direction="column"
        css={{
          "&::-webkit-scrollbar": {
            width: "3px",
            borderRadius: "3px",
          },
          "&::-webkit-scrollbar-track": {
            width: "6px",
            background: "#d6d6d6",
            borderRadius: "3px",
          },
          "&::-webkit-scrollbar-thumb": {
            background: "#DB334F",
            borderRadius: "3px",
          },
        }}
        overflowY="scroll"
        flex={5}
      >
        {routes.map((route, index) => (
          <div key={index} style={{ height: "100%" }}>
            <NavItem
              group={route?.group}
              path={route?.path}
              icon={route.icon}
              link={route.link}
            >
              {route.name}
            </NavItem>
          </div>
        ))}
      </Flex>

      <Flex
        justifyContent="center"
        alignItems="center"
        flexDirection="column"
        flex={1}
      >
        <Divider mb={4} />
        <ListHeader>Canais Oficiais</ListHeader>
        <Flex
          flexDirection="row"
          justifyContent="center"
          alignItems="center"
          height="auto"
        >
          {media.map(({ url, name, icon }, index) => (
            <IconButton
              key={index}
              onClick={() => window.open(url, "_blank")}
              ml={0}
              aria-label={name}
              variant="ghost"
              size="md"
              isRound
              _hover={{ bg: "primarylight", color: "white" }}
              icon={icon}
            />
          ))}
        </Flex>
        <Divider mt={4} />
      </Flex>
    </Flex>
  );
}

interface MobileProps extends FlexProps {
  onOpen: () => void;
}
function MobileNav({ onOpen, ...rest }: MobileProps) {
  const { colorMode, toggleColorMode } = useColorMode();
  const router = useRouter();
  const accessibility = useFontSizeAccessibilityContext();
  return (
    <Flex
      ml={{ base: 0, md: 60 }}
      px={{ base: 2, md: 2 }}
      height="20"
      alignItems="center"
      bg={useColorModeValue("white", "gray.900")}
      borderBottomWidth="4px"
      borderBottomColor="primary"
      justifyContent={{ base: "space-between", md: "flex-end" }}
      {...rest}
    >
      <IconButton
        display={{ base: "flex", md: "none" }}
        onClick={onOpen}
        variant="outline"
        aria-label="open menu"
        icon={<FiMenu />}
      />
      <Text
        display={{ base: "flex", md: "none" }}
        fontSize="2xl"
        fontFamily="monospace"
        fontWeight="bold"
        style={{ textAlign: "center" }}
      >
        <Flex h="20" alignItems="center" mx="2" justifyContent="center">
          <Image
            alt="logo"
            width={colorMode === "dark" ? "34%" : "60%"}
            minW="9rem"
            src={colorMode === "dark" ? logoDark.src : logo.src}
            onClick={() => router.push("/")}
          />
        </Flex>
      </Text>

      <Button
      paddingLeft="2px"
        size="sm"
        display={["flex", "flex", "none"]}
        flexDirection="row"
        alignItems="center"
        gap="10px"
        onClick={() =>
          accessibility?.setCoefficient(accessibility?.coefficient + 0.15)
        }
        p={0}
      >
        {colorMode === "dark" ? (
          <BsPlusCircle size="20px" />
        ) : (
          <BsPlusCircleFill size="16px" />
        )}
      </Button>

      <Button
      paddingLeft="2px"
        size="sm"
        display={["flex", "flex", "none"]}
        flexDirection="row"
        alignItems="center"
        gap="10px"
        onClick={() =>
          accessibility?.setCoefficient(
            accessibility?.coefficient > 0.4
              ? accessibility?.coefficient - 0.15
              : 0.4
          )
        }
        p={0}
      >
        {colorMode === "dark" ? (
          <BsDashCircle size="20px" />
        ) : (
          <BsDashCircleFill size="16px" />
        )}
      </Button>
      <Button
      paddingLeft="2px"
        size="sm"
        onClick={toggleColorMode}
        p={0}
        display={["flex", "flex", "none"]}
      >
        {colorMode === "dark" ? (
          <BsSunFill size="20px" />
        ) : (
          <BsFillMoonFill size="16px" />
        )}
      </Button>
      <HStack
        display={["none", "none", "flex"]}
        justifyContent="flex-start"
        alignItems="flex-start"
        width="100%"
      >
        <Header />
      </HStack>
    </Flex>
  );
}

export default function SidebarWithHeader({
  children,
  routes,
}: {
  children: ReactNode;
  routes: IPublicRoute[];
}) {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const { width } = useWindowDimensions();

  return (
    <Box minH="100vh" bg={useColorModeValue("gray.100", "gray.900")}>
      {width > 664 && (
        <SidebarContent
          routes={routes}
          onClose={() => onClose}
          display={{ base: "none", md: "block" }}
        />
      )}

      <Drawer
        autoFocus={false}
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        returnFocusOnClose={false}
        onOverlayClick={onClose}
        size="full"
      >
        <DrawerContent>
          <SidebarContent routes={routes} onClose={onClose} />
        </DrawerContent>
      </Drawer>
      {/* mobilenav */}
      <MobileNav onOpen={onOpen} />
      <Box ml={{ base: 0, md: 60 }} p="4">
        {children}
      </Box>
    </Box>
  );
}
