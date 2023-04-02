import React, { useState } from "react";
import {
  Box,
  Flex,
  Text,
  IconButton,
  Button,
  Stack,
  Collapse,
  Icon,
  Link,
  Popover,
  PopoverTrigger,
  PopoverContent,
  useColorModeValue,
  useBreakpointValue,
  useDisclosure,
  Menu,
  MenuButton,
  Portal,
  MenuList,
  MenuItem,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
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
import { BiChevronRight, BiMoon, BiSun } from "react-icons/bi";
import navItems, { NavItem } from "./navItems";
import publicRoutes from "../../../../routes/public";
import Fuse from "fuse.js";
import getUniqueListBy from "../../../../utils/getUniqueListBy";
import { MdAddLocation } from "react-icons/md";
import { BsFillMoonFill, BsSunFill } from "react-icons/bs";

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
                          : `${result?.defaultPath || ""}${result?.path}`
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

  return (
    <Stack flex={1} direction="row">
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
                    fontSize={"smaller"}
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
                                  <DesktopSubNav key={child.label} {...child} />
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
                                    <Text fontSize={"smaller"} fontWeight="500">
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
      <Button onClick={toggleColorMode} p={0}>
        {colorMode === "dark" ? (
          <BsSunFill size="20px" />
        ) : (
          <BsFillMoonFill size="16px" />
        )}
      </Button>
      <Stack
        flex={1}
        alignItems="flex-end"
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
                console.log(searchs);
                onOpen();
              }}
            >
              Buscar
            </Button>
          </InputRightElement>
        </InputGroup>
      </Stack>
    </Stack>
  );
};

const findPages = (search: string) => {
  const fuseRoutesMain = new Fuse(publicRoutes, {
    keys: ["name"],
  });

  const routesMain = fuseRoutesMain.search(search);

  const routesWithGroup = publicRoutes.filter((route) =>
    Array.isArray(route?.group)
  );
  const routesGroup: any = [];

  for (const route of routesWithGroup) {
    if (route?.group && Array.isArray(route.group)) {
      route.group.map((group) => {
        routesGroup.push(group);
      });
    }
  }

  const routesSearched = [...routesMain, ...routesGroup].map(
    (route) => route.item
  );

  const organizedRoutes = [];

  for (const route of routesSearched) {
    if (route?.group && Array.isArray(route.group)) {
      route.group.map((group: any) => {
        organizedRoutes.push(group);
      });
      continue;
    }
    organizedRoutes.push(route);
  }

  const routesWithoutDuplicate = getUniqueListBy(organizedRoutes, "name");
  return routesWithoutDuplicate;
};

const DesktopSubNav = ({ label, href, subLabel }: NavItem) => {
  const hasHref = href ? { href } : {};
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
            fontSize="smaller"
          >
            {label}
          </Text>
          <Text fontSize={"sm"}>{subLabel}</Text>
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
