import React, { ReactNode } from "react";
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
} from "@chakra-ui/react";
import {
  BsFacebook,
  BsFillMoonFill,
  BsInstagram,
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
}

function ListHeader({ children }: { children: ReactNode }) {
  return (
    <Text fontWeight="500" fontSize="medium" mb={2}>
      {children}
    </Text>
  );
}

function NavItem({
  icon,
  path,
  group = [],
  link,
  children,
  key,
}: NavItemProps) {
  if (group.length > 0) {
    return (
      <Menu>
        <Flex
          width="95%"
          p="2"
          mx="2"
          borderRadius="lg"
          role="group"
          cursor="pointer"
        >
          <Accordion borderColor="transparent" width="95%" allowToggle>
            <AccordionItem>
              <AccordionButton
                borderRadius="lg"
                _hover={{
                  bg: "gray.100",
                  color: "primary",
                }}
                fontWeight="500"
              >
                <Box flex="1" fontSize="13" textAlign="left">
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
                <AccordionIcon />
              </AccordionButton>
              <AccordionPanel pb={4}>
                {group.map((item) => (
                  <Link
                    key={`${path}${item.path}`}
                    href={item.link ? item.link : `${path}${item.path}`}
                    target={item.link ? "_blank" : "_self"}
                    style={{ textDecoration: "none" }}
                    _focus={{ boxShadow: "none" }}
                    fontSize="13"
                  >
                    <Flex
                      width="100%"
                      p="2"
                      mx="2"
                      borderRadius="lg"
                      role="group"
                      cursor="pointer"
                      _hover={{
                        bg: "gray.100",
                        color: "primary",
                      }}
                      fontSize="14"
                    >
                      <Icon
                        mr="4"
                        color="primary"
                        fontSize="18"
                        _groupHover={{
                          color: "primary",
                        }}
                        as={item.icon}
                      />
                      {item.name}
                    </Flex>
                  </Link>
                ))}
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
      style={{ textDecoration: "none" }}
      _focus={{ boxShadow: "none" }}
      fontSize="13"
    >
      <Flex
        width="95%"
        p="2"
        mx="2"
        borderRadius="lg"
        role="group"
        cursor="pointer"
      >
        <Flex
          width="100%"
          p="2"
          mx="2"
          borderRadius="lg"
          role="group"
          cursor="pointer"
          _hover={{
            bg: "gray.100",
            color: "primary",
          }}
          fontSize="13"
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
    <Box
      transition="3s ease"
      bg={useColorModeValue("white", "gray.900")}
      borderRight="1px"
      borderRightColor={useColorModeValue("gray.200", "gray.700")}
      w={{ base: "full", md: 60 }}
      pos="fixed"
      h="full"
      fontWeight="600"
      {...rest}
      overflowY="auto"
      overflowX="hidden"
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
      <Flex h="20" alignItems="center" mx="8" justifyContent="space-between">
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
      {routes.map((route, index) => (
        <div key={index}>
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
      <Flex justifyContent="center" alignItems="center" flexDirection="column">
        <Divider mb={4} />
        <ListHeader>Canais Oficiais</ListHeader>
        <Flex flexDirection="row" justifyContent="center" alignItems="center">
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
    </Box>
  );
}

interface MobileProps extends FlexProps {
  onOpen: () => void;
}
function MobileNav({ onOpen, ...rest }: MobileProps) {
  const { colorMode, toggleColorMode } = useColorMode();
  const router = useRouter();
  return (
    <Flex
      ml={{ base: 0, md: 60 }}
      px={{ base: 4, md: 4 }}
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
        <Flex h="20" alignItems="center" mx="8" justifyContent="center">
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
  return (
    <Box minH="100vh" bg={useColorModeValue("gray.100", "gray.900")}>
      <SidebarContent
        routes={routes}
        onClose={() => onClose}
        display={{ base: "none", md: "block" }}
      />
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
