"use client";
import { useState } from "react";
import Hero from "./sections/Hero";
import Footer from "@/components/elements/Footer/Footer";
import Slider from "./sections/Slider";
import Subteams from "./sections/Subteams";
import OurValues from "./sections/OurValues";
import Activities from "./sections/Activities";
import Sponsors from "./sections/Sponsors";

const LandingModule = () => {
  const [isLandingShown, setIsLandingShown] = useState<boolean>(false);
  const [isSliding, setIsSliding] = useState<boolean>(false);

  const handleDiveIn = () => {
    setIsSliding(true);
    setTimeout(() => {
      setIsLandingShown(true);
    }, 800);
  };

  return (
    <main>
      <Slider isSliding={isSliding} handleDiveIn={handleDiveIn} />
      {isLandingShown && (
        <>
          <Hero />
          <Subteams />
          <OurValues />
          <Activities />
          <Sponsors />
          <Footer />
        </>
      )}
    </main>
  );
};

export default LandingModule;
