import React, { useState } from "react";
import {
  Box,
  Flex,
  Text,
  Button,
  Stack,
  Icon,
  Link,
  Popover,
  PopoverTrigger,
  PopoverContent,
  useColorModeValue,
  useDisclosure,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  InputGroup,
  Input,
  InputRightElement,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  useColorMode,
} from "@chakra-ui/react";
import { BiChevronRight } from "react-icons/bi";
import navItems, { NavItem } from "./navItems";
import publicRoutes from "../../../../routes/public";
import {
  BsDashCircle,
  BsDashCircleFill,
  BsFillMoonFill,
  BsPlusCircle,
  BsPlusCircleFill,
  BsSunFill,
} from "react-icons/bs";
import { IPublicRoute } from "../../../../types";
import { useRouter } from "next/router";
import { useFontSizeAccessibilityContext } from "../../../../context/fontSizeAccessibility";
import { rgb } from "d3";

export default function Header() {
  const [search, setSearch] = useState("");
  const [searchs, setSearchs] = useState<Array<any>>([]);
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box width="100%">
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Resultados</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            {searchs.map((result, index) => {
              if (result) {
                return (
                  <Text key={index}>
                    <Link
                      href={
                        result?.link
                          ? result?.link
                          : `${result?.defaultPath || ""}${"/"}${result?.path}${"/"}`
                      }
                    >
                      {result?.name}
                    </Link>
                  </Text>
                );
              }
            })}
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" bg="primary" mr={3} onClick={onClose}>
              Fechar
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
      <Flex
        bg={useColorModeValue("white", "gray.800")}
        color={useColorModeValue("gray.600", "white")}
        minH={"60px"}
        py={{ base: 2 }}
        px={{ base: 4 }}
        borderStyle={"solid"}
        borderColor={useColorModeValue("gray.200", "gray.900")}
        align={"center"}
      >
        <Flex flex={{ base: 1 }} justify={{ base: "center", md: "start" }}>
          <Flex display={{ base: "none", md: "flex" }} width="100%" ml={10}>
            <DesktopNav
              onOpen={onOpen}
              search={search}
              setSearch={setSearch}
              setSearchs={setSearchs}
              searchs={searchs}
            />
          </Flex>
        </Flex>
      </Flex>
    </Box>
  );
}

const DesktopNav = ({
  setSearch,
  setSearchs,
  search,
  searchs,
  onOpen,
}: {
  setSearch: React.Dispatch<React.SetStateAction<string>>;
  search: string;
  setSearchs: React.Dispatch<React.SetStateAction<Array<any>>>;
  searchs: Array<any>;
  onOpen: any;
}) => {
  const { colorMode, toggleColorMode } = useColorMode();

  const linkColor = useColorModeValue("gray.600", "gray.200");
  const linkHoverColor = useColorModeValue("gray.800", "white");
  const popoverContentBgColor = useColorModeValue("white", "gray.800");
  const router = useRouter();
  const accessibility = useFontSizeAccessibilityContext();
  return (
    <Stack
      backgroundColor={"transparent"}
      width={"100%"} // Ocupa toda a largura da tela
      maxWidth={"1280px"} // Largura máxima de 1280 pixels
      height={"10vh"} // Ocupa toda a altura da tela
      alignItems="center" // Centraliza os filhos verticalmente
      justifyContent="center" // Centraliza os filhos horizontalmente
      margin="0 auto" // Centraliza a Stack horizontalmente na tela
      
    >
      <Stack
        direction={"row"}
        spacing={4}
        width={"100%"}
        padding={0}
        margin={0}
        align="center" // Centraliza verticalmente
        justify="center" // Centraliza horizontalmente
        backgroundColor={"transparent"}
      >
        <Stack
          flex={1}
          direction="row"
          width={"100%"}
          height={"120px"}
          backgroundColor={"transparent"}
        >
          <Stack
            flex={2}
            direction="row"
            alignItems="center"
            justifyContent="flex-start"
          >
            {navItems.map((navItem) => {
              const href = navItem.href;
              const hasHref = navItem.href ? { href } : {};
              return (
                <Box key={navItem.label}>
                  <Popover trigger={"hover"} placement={"bottom-start"}>
                    <PopoverTrigger>
                      <Link
                        {...hasHref}
                        target={href ? "_blank" : undefined}
                        p={2}
                        fontSize={accessibility.fonts.small}
                        fontWeight={500}
                        color={linkColor}
                        textAlign="center"
                        _hover={{
                          textDecoration: "none",
                          color: linkHoverColor,
                        }}
                      >
                        {navItem.label}
                      </Link>
                    </PopoverTrigger>

                    {navItem.children && (
                      <PopoverContent
                        border={0}
                        boxShadow={"xl"}
                        bg={popoverContentBgColor}
                        p={4}
                        rounded={"xl"}
                        minW={"sm"}
                      >
                        <Stack>
                          {navItem.children.map((child, index) => {
                            return (
                              <Accordion
                                defaultIndex={[1]}
                                allowMultiple
                                key={child.label}
                              >
                                <AccordionItem borderWidth={0}>
                                  <AccordionButton padding={0}>
                                    <Box width="100%">
                                      <DesktopSubNav
                                        key={child.label}
                                        {...child}
                                      />
                                    </Box>
                                  </AccordionButton>

                                  <AccordionPanel pb={4}>
                                    {child.children?.map((item) => (
                                      <Box
                                        key={item.label}
                                        _hover={{
                                          bg: "gray.200",
                                          cursor: "pointer",
                                        }}
                                        padding="1.5"
                                        borderRadius="5"
                                        style={{
                                          display: "flex",
                                          alignItems: "center",
                                        }}
                                        mb={1}
                                        ml="3"
                                        onClick={() => window.open(item.href)}
                                      >
                                        <Text
                                          fontSize={accessibility?.fonts?.small}
                                          fontWeight="500"
                                        >
                                          {item.label}
                                        </Text>
                                      </Box>
                                    ))}
                                  </AccordionPanel>
                                </AccordionItem>
                              </Accordion>
                            );
                          })}
                        </Stack>
                      </PopoverContent>
                    )}
                  </Popover>
                </Box>
              );
            })}
          </Stack>
          <Stack
            direction={"row"}
            alignContent={"center"}
            alignItems="center"
            justifyContent="flex-start"
          >
            <Button
              size="xs"
              display="flex"
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
              size="xs"
              display="flex"
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
            <Button size="xs" onClick={toggleColorMode} p={0}>
              {colorMode === "dark" ? (
                <BsSunFill size="20px" />
              ) : (
                <BsFillMoonFill size="16px" />
              )}
            </Button>
          </Stack>
          <Stack
            flex={1}
            alignItems="center"
            justifyContent="center"
            flexDirection="row"
          >
            <InputGroup width="100%" size="md" ml={4}>
              <Input
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                pr="4.5rem"
                type="text"
                placeholder="Pesquisa Geral"
              />
              <InputRightElement width="4.5rem">
                <Button
                  h="1.75rem"
                  size="sm"
                  onClick={() => {
                    if (!search) {
                      return;
                    }
                    setSearchs([]);
                    setSearchs(findPages(search));
                    onOpen();
                  }}
                >
                  Buscar
                </Button>
              </InputRightElement>
            </InputGroup>
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  );
};

const findPages = (searchString: string): IPublicRoute[] => {
  const filteredRoutes: IPublicRoute[] = [];

  publicRoutes.forEach((route) => {
    const routeHasGroup = route?.group && route.group.length > 0;
    if (
      (route?.titlePage?.toLowerCase().includes(searchString.toLowerCase()) ||
        route?.description
          ?.toLowerCase()
          .includes(searchString.toLowerCase()) ||
        route.name.toLowerCase().includes(searchString.toLowerCase()) ||
        route.path.toLowerCase().includes(searchString.toLowerCase())) 
        &&
      !routeHasGroup
    ) {
      filteredRoutes.push(route);
    }

    if (routeHasGroup && route?.group) {
      route.group.forEach((group) => {
        if (
          group?.titlePage
            ?.toLowerCase()
            .includes(searchString.toLowerCase()) ||
          group?.description
            ?.toLowerCase()
            .includes(searchString.toLowerCase()) ||
          group.name.toLowerCase().includes(searchString.toLowerCase()) ||
          group.path.toLowerCase().includes(searchString.toLowerCase())
        ) {
          const groupName = `${route.name} > ${group.name}`;

          filteredRoutes.push({ ...group, name: groupName });
        }
      });
    }
  });

  return filteredRoutes;
};

const DesktopSubNav = ({ label, href, subLabel }: NavItem) => {
  const hasHref = href ? { href } : {};
  const accessibility = useFontSizeAccessibilityContext();
  return (
    <Link
      {...hasHref}
      role={"group"}
      display={"block"}
      p={2}
      rounded={"md"}
      target={href ? "_blank" : undefined}
      _hover={{ bg: useColorModeValue("pink.50", "gray.900") }}
      
    >
      <Stack direction={"row"} align={"center"}>
        <Box>
          <Text
            transition={"all .3s ease"}
            _groupHover={{ color: useColorModeValue("pink.400", "white") }}
            fontWeight={500}
            fontSize={accessibility?.fonts?.small}
          >
            {label}
          </Text>
          <Text fontSize={accessibility?.fonts?.small}>{subLabel}</Text>
        </Box>
        <Flex
          transition={"all .3s ease"}
          transform={"translateX(-10px)"}
          opacity={0}
          _groupHover={{ opacity: "100%", transform: "translateX(0)" }}
          justify={"flex-end"}
          align={"center"}
          flex={1}
        >
          <Icon
            color={useColorModeValue("pink.400", "white")}
            w={5}
            h={5}
            as={BiChevronRight}
          />
        </Flex>
      </Stack>
    </Link>
  );
};
