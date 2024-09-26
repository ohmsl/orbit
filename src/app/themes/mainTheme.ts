import {
  createTheme,
  responsiveFontSizes,
  ThemeOptions,
  type ColorSystemOptions,
} from "@mui/material";
import { GeistSans } from "geist/font/sans";

const baseTheme: ThemeOptions = {
  typography: {
    fontFamily: GeistSans.style.fontFamily,
  },
  shape: {
    borderRadius: 12,
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "none",
          borderRadius: 8,
        },
      },
    },

    MuiChip: {
      styleOverrides: {
        root: {
          borderRadius: 8,
        },
      },
    },

    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundImage: "none",
        },
      },
    },

    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 16,
        },
      },
    },

    MuiCardHeader: {
      styleOverrides: {
        root: {
          "& .MuiCardHeader-action": {
            marginTop: 0,
            marginRight: 0,
          },
        },
      },
    },
  },
};

declare module "@mui/material/styles" {
  interface TypeBackground {
    neutral: string;
    neutralChannel: string;
  }
}

const basePalette: ColorSystemOptions["palette"] = {
  primary: {
    light: "#6BB1F8",
    main: "#0C68E9",
    dark: "#063BA7",
  },
  secondary: {
    light: "#C684FF",
    main: "#8E33FF",
    dark: "#5119B7",
  },
  info: {
    light: "#61F3F3",
    main: "#00B8D9",
    dark: "#006C9C",
  },
  success: {
    light: "#77ED8B",
    main: "#22C55E",
    dark: "#118D57",
  },
  warning: {
    light: "#FFD666",
    main: "#FFAB00",
    dark: "#B76E00",
  },
  error: {
    light: "#FFAC82",
    main: "#FF5630",
    dark: "#B71D18",
  },
};

const lightPalette: ColorSystemOptions["palette"] = {
  mode: "light",
  background: {
    default: "#fff",
    paper: "#fff",
    neutral: "#fff",
    defaultChannel: "255 255 255",
    paperChannel: "255 255 255",
    neutralChannel: "255 255 255",
  },
  ...basePalette,
};

const darkPalette: ColorSystemOptions["palette"] = {
  mode: "dark",
  background: {
    default: "#141a21",
    paper: "#1c252e",
    neutral: "#28323D",
    defaultChannel: "20 26 33",
    paperChannel: "28 37 46",
    neutralChannel: "40 50 61",
  },
  ...basePalette,
};

export const mainTheme = responsiveFontSizes(
  createTheme({
    cssVariables: { cssVarPrefix: "orbit" },
    colorSchemes: {
      dark: { palette: darkPalette },
      light: { palette: lightPalette },
    },
    ...baseTheme,
  })
);
