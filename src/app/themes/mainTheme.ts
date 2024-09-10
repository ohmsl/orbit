import { createTheme, ThemeOptions } from "@mui/material";
import { GeistSans } from "geist/font/sans";

const baseTheme: ThemeOptions = {
  typography: {
    fontFamily: GeistSans.style.fontFamily,
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "none",
        },
      },
    },
    MuiButtonBase: {
      defaultProps: {
        disableRipple: true,
      },
    },
  },
};

export const mainTheme = createTheme({
  cssVariables: true,
  colorSchemes: { dark: true, light: true },
  ...baseTheme,
});
