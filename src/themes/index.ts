import { extendTheme } from "@chakra-ui/react";

const colors = {
  primary: "#DB334F",
  primarylight: "#e05269",
  secondary: "#546FC6",
  text: {
    dark: "#21243D",
    light: "#8695a4",
  },
  brand: {
    900: "#1a365d",
    800: "#153e75",
    700: "#2a69ac",
  },
  table: {
    primary: "#185da6",
    button: {
      primary: "#185da6",
      hover: "#3689e2",
    },
  },
  components: {
    Tabs: {
      baseStyle: {
        tab: {
          _selected: {
            bg: "#DB334F",
          },
        },
      },
    },
  },
};

const theme = extendTheme({ colors });

export default theme;
