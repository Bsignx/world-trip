import { extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({
  colors: {
    gray: {
      "50": "#F5F8FA",
      "100": "#EEEEF2",
      "200": "#DADADA",
      "300": "#999999",
      "600": "#47585B",
    },
    yellow: {
        "300": "#FFBA08"
    },
  },
  fonts: {
    heading: "Poppins",
    body: "Poppins",
  },
  styles: {
    global: {
      body: {
        bg: "gray.100",
        color: "gray.600",
      },
    },
  },
});
