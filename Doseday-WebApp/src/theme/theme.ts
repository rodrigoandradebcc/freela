import { createTheme } from "@mui/material/styles";

declare module "@mui/material/styles" {
  interface BreakpointOverrides {
    xs: true;
    sm: true;
    md: true;
    lg: true;
    xl: true;
    "2xl": true;
  }
  interface Palette {
    gradient: {
      primary: string;
      secondary: string;
    };
    brand: {
      cream: string;
    };
  }

  interface PaletteOptions {
    gradient?: {
      primary?: string;
      secondary?: string;
    };
    brand?: {
      cream?: string;
    };
  }
}

const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1536,
      "2xl": 1920,
    },
  },
  palette: {
    primary: {
      main: "#E91E63",
      light: "#F8BBD9",
      dark: "#AD1457",
      contrastText: "#FFFFFF",
    },
    secondary: {
      main: "#FE9AC1",
      light: "#FF79B0",
      dark: "#C60055",
      contrastText: "#FFFFFF",
    },

    text: {
      primary: "#333333",
      secondary: "#666666",
    },
    brand: {
      cream: "#F4EDE3",
    },
    gradient: {
      primary: "linear-gradient(135deg, #E91E63 0%, #FF4081 100%)",
      secondary: "linear-gradient(135deg, #F8BBD9 0%, #E91E63 100%)",
    },
  },
  typography: {
    fontFamily:
      'var(--font-maven-pro), var(--font-sf-pro-display), var(--font-kombin), var(--font-berlins-sans-fb), "Space Grotesk", "Roboto", "Helvetica", "Arial", sans-serif',
    h1: {
      fontSize: "3.5rem",
      fontWeight: 700,
      lineHeight: 1.2,
      fontFamily: "var(--font-kombin), var(--font-maven-pro), sans-serif",
      "@media (max-width:600px)": {
        fontSize: "2.5rem",
      },
    },
    h2: {
      color: "#35271B",
      fontWeight: 600,
      fontFamily: "var(--font-sf-pro-display)",
      "@media (max-width:600px)": {
        fontSize: "1.5rem",
      },
    },
    h3: {
      fontFamily:
        "var(--font-berlins-sans-fb), var(--font-maven-pro), sans-serif",
      "@media (max-width:600px)": {},
    },
    h4: {
      fontSize: "1.5rem",
      fontWeight: 600,
      lineHeight: 1.4,
      fontFamily:
        "var(--font-berlins-sans-fb), var(--font-maven-pro), sans-serif",
    },
    h5: {
      fontSize: "1.25rem",
      fontWeight: 600,
      lineHeight: 1.5,
      fontFamily:
        "var(--font-berlins-sans-fb), var(--font-maven-pro), sans-serif",
    },
    h6: {
      fontSize: "1rem",
      fontWeight: 600,
      lineHeight: 1.5,
      fontFamily:
        "var(--font-berlins-sans-fb), var(--font-maven-pro), sans-serif",
    },
    body1: {
      color: "#35271B",
      fontFamily: "var(--font-sf-pro-display)",
    },
    body2: {
      color: "#3F3F3F",
      fontFamily: "var(--font-sf-pro-display)",
    },
    subtitle1: {
      color: "#747474",
      fontFamily: "var(--font-sf-pro-display)",
    },
    subtitle2: {
      color: "#7a7d85",
      fontFamily: "var(--font-sf-pro-text)",
    },
    button: {
      textTransform: "none",
      fontWeight: 600,
      fontFamily: '"Berlin Sans FB Demi", "Inter", sans-serif',
    },
  },
  shape: {
    borderRadius: 12,
  },
  spacing: 8,
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 25,
          padding: "12px 32px",
          fontSize: "1rem",
          fontWeight: 600,
          textTransform: "none",
          boxShadow: "none",
          "&:hover": {
            boxShadow: "0 4px 12px rgba(233, 30, 99, 0.3)",
          },
        },
        containedPrimary: {
          background: "linear-gradient(135deg, #E91E63 0%, #FF4081 100%)",
          "&:hover": {
            background: "linear-gradient(135deg, #AD1457 0%, #C60055 100%)",
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 16,
          boxShadow: "0 4px 20px rgba(0, 0, 0, 0.1)",
          "&:hover": {
            boxShadow: "0 8px 30px rgba(0, 0, 0, 0.15)",
          },
        },
      },
    },
  },
});

export default theme;
