import { Theme as ThemeBase, extendTheme, theme as themeBase, ColorHues } from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools";

const theme = extendTheme({
  fonts: {
    body: "'Nunito Sans', sans-serif",
    heading: "'Comfortaa', cursive"
  },
  config: {
    initialColorMode: "light"
  },
  colors: {
    brand: {
      50: "#f8c676",
      100: "#f7bd5f",
      200: "#f5b349",
      300: "#f4aa32",
      400: "#f3a01b",
      500: "#db9018",
      600: "#c28016",
      700: "#aa7013",
      800: "#926010",
      900: "#7a500e"
    }
  },
  styles: {
    global: (props: any) => ({
      body: {
        backgroundColor: mode("white", "gray.700")(props)
      }
    })
  }
}) as (ThemeBase & {
  colors: (typeof themeBase.colors) & {
    brand: ColorHues
  }
});

export default theme;
