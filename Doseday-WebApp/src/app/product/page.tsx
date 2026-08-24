"use client";
import { BREAKPOINTS } from "@/@types/breakpoints";
import { Container, Stack } from "@mui/material";
import { Header } from "../../components/default";
import Footer from "../../components/default/Footer";
import NinethHomeSection from "../home/NinethHomeSection";
import CheckoutFirstSection from "./FirstSection";
import { CheckoutFourthSection } from "./FourthSection";
import { CheckoutSecondSection } from "./SecondSection";
import CheckoutThirdSection from "./ThirdSection";
import { Suspense } from "react";

export default function Product() {
  return (
    <>
      <Header />
      <Container
        component={Stack}
        padding="3rem 22rem"
        justifyContent="center"
        alignItems="center"
        sx={{
          [BREAKPOINTS.mobile]: {
            maxWidth: "xs",
            gap: "2rem",
          },
          [BREAKPOINTS.tablet]: {
            maxWidth: "md",
            gap: "2rem",
          },
          [BREAKPOINTS.desktop]: {
            maxWidth: "lg",
            gap: "4rem",
          },
          [BREAKPOINTS.large]: {
            maxWidth: "2xl",
            gap: "4.5rem",
          },
        }}
      >
        <Suspense fallback={<div>Loading...</div>}>
          <CheckoutFirstSection id="section-1" />
        </Suspense>
        <CheckoutSecondSection />
        <CheckoutThirdSection />
      </Container>

      <Container
        component={Stack}
        padding="5rem 22rem"
        justifyContent="center"
        alignItems="center"
        sx={{
          [BREAKPOINTS.mobile]: {
            maxWidth: "xs",
            gap: "2rem",
            paddingTop: "3rem",
          },
          [BREAKPOINTS.tablet]: {
            maxWidth: "md",
            gap: "2rem",
            paddingTop: "3rem",
          },
          [BREAKPOINTS.desktop]: {
            maxWidth: "lg",
            gap: "4rem",
            paddingTop: "5rem",
          },
          [BREAKPOINTS.large]: {
            maxWidth: "2xl",
            gap: "4.5rem",
          },
        }}
      >
        <CheckoutFourthSection />
      </Container>
      <NinethHomeSection isEnable={false} />
      <Footer />
    </>
  );
}
