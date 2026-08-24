"use client";

import React from "react";
import ThemeProvider from "../components/theme/ThemeProvider";
import HomePage from "./home/page";

export default function Home() {
  const env = process.env.NEXT_PUBLIC_ENV;

  return (
    <ThemeProvider>
      {env === "dev" && (
        <header
          style={{
            backgroundColor: "red",
            color: "white",
            textAlign: "center",
            padding: "0.5rem",
            fontWeight: "bold",
            fontSize: "1rem",
            position: "fixed",
            width: "100%",
            top: 0,
            zIndex: 1000,
          }}
        >
          AMBIENTE DE TESTE
        </header>
      )}
      <div style={{ paddingTop: env === "dev" ? "2.5rem" : 0 }}>
        <HomePage />
      </div>
    </ThemeProvider>
  );
}
