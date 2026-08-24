"use client";

import { GlobalStyles } from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider as MuiThemeProvider } from "@mui/material/styles";
import type React from "react";
import { ToastContainer } from "react-toastify";
import theme from "../../theme/theme";
import "react-toastify/dist/ReactToastify.css";

const fontStyles = (
  <GlobalStyles
    styles={{
      body: {
        fontFamily:
          '"Space Grotesk", "Gacor", "Maven Pro", "Kombin", Arial, sans-serif',
      },
      ".Toastify__toast": {
        backgroundColor: "#FFFFFF",
        color: "#333333",
        borderRadius: "16px",
        boxShadow: "0 8px 32px rgba(233, 30, 99, 0.15)",
        padding: "16px 20px",
        fontSize: "0.95rem",
        fontWeight: 500,
        border: "1px solid rgba(233, 30, 99, 0.1)",
        minHeight: "64px",
        fontFamily: 'var(--font-maven-pro), "Space Grotesk", sans-serif',
      },
      ".Toastify__toast--success": {
        background: "linear-gradient(135deg, #F4EDE3 0%, #FFFFFF 100%)",
        borderLeft: "4px solid #E91E63",
        color: "#333333",
      },
      ".Toastify__toast--error": {
        background: "linear-gradient(135deg, #F4EDE3 0%, #FFFFFF 100%)",
        borderLeft: "4px solid #AD1457",
        color: "#333333",
      },
      ".Toastify__toast--info": {
        background: "linear-gradient(135deg, #F4EDE3 0%, #FFFFFF 100%)",
        borderLeft: "4px solid #FF4081",
        color: "#333333",
      },
      ".Toastify__toast--warning": {
        background: "linear-gradient(135deg, #F4EDE3 0%, #FFFFFF 100%)",
        borderLeft: "4px solid #F8BBD9",
        color: "#333333",
      },
      ".Toastify__progress-bar": {
        background: "linear-gradient(90deg, #E91E63 0%, #FF4081 100%)",
        height: "3px",
      },
      ".Toastify__progress-bar--success": {
        background: "linear-gradient(90deg, #E91E63 0%, #FF4081 100%)",
      },
      ".Toastify__progress-bar--error": {
        background: "linear-gradient(90deg, #AD1457 0%, #C60055 100%)",
      },
      ".Toastify__progress-bar--info": {
        background: "linear-gradient(90deg, #FF4081 0%, #F8BBD9 100%)",
      },
      ".Toastify__progress-bar--warning": {
        background: "linear-gradient(90deg, #F8BBD9 0%, #E91E63 100%)",
      },
      ".Toastify__close-button": {
        color: "#666666",
        opacity: 0.7,
        "&:hover": {
          opacity: 1,
          color: "#E91E63",
        },
      },
      ".Toastify__toast-container": {
        width: "auto",
        maxWidth: "420px",
        padding: "0 16px",
      },
      // Animações customizadas mantendo o estilo DoseDay
      "@keyframes slideInRight": {
        "0%": {
          transform: "translateX(100%)",
          opacity: 0,
        },
        "100%": {
          transform: "translateX(0)",
          opacity: 1,
        },
      },
      ".Toastify__slide-enter--top-right": {
        animation: "slideInRight 0.4s ease-out",
      },
      ".Toastify__toast--success .Toastify__toast-icon": {
        color: "#E91E63",
      },
      ".Toastify__toast--error .Toastify__toast-icon": {
        color: "#AD1457",
      },
      ".Toastify__toast--info .Toastify__toast-icon": {
        color: "#FF4081",
      },
    }}
  />
);

interface ThemeProviderProps {
  children: React.ReactNode;
}

const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  return (
    <MuiThemeProvider theme={theme}>
      <CssBaseline />
      {fontStyles}
      {children}
      <ToastContainer
        position="top-right"
        autoClose={4000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        limit={3}
        style={{
          top: "24px",
          right: "24px",
        }}
        toastStyle={{
          margin: "0 0 12px 0",
        }}
      />
    </MuiThemeProvider>
  );
};

export default ThemeProvider;
