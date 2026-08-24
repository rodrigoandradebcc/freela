"use client";
import { Box } from "@mui/material";
import Footer from "../../components/default/Footer";
import FifthHomeSection from "./FifthHomeSection";
// import FirstHomeSection from "./FirstHomeSection";
import FourthHomeSection from "./FourthHomeSection";
import NinethHomeSection from "./NinethHomeSection";
import SecondHomeSection from "./SecondHomeSection";
import SeventhHomeSection from "./SeventhHomeSection";
import SixthHomeSection from "./SixthHomeSection";
import ThirdHomeSection from "./ThirdHomeSection";
import EighthHomeSection from "./EighthHomeSection";
import DoseBlackSection from "./BlackFridayFirstSection";

export default function HomePage() {
  return (
    <Box bgcolor="#FFFFFF">
      <DoseBlackSection />
      <SecondHomeSection />
      <ThirdHomeSection />
      <FourthHomeSection />
      <FifthHomeSection />
      <SixthHomeSection />
      <SeventhHomeSection />
      <EighthHomeSection />
      <NinethHomeSection />
      <Footer />
    </Box>
  );
}
