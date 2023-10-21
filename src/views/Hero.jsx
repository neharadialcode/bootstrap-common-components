import React from "react";
import HeroCenter from "../components/herosection/HeroCenter";
import HeroHalfContentHalfImage from "../components/herosection/HeroHalfContentHalfImage";
import HeroCenterPosition from "../components/herosection/HeroCenterPosition";
import HeroPositionHalf from "../components/herosection/HeroPositionHalf";
import HeroPosition from "../components/herosection/HeroPosition";

const Hero = () => {
  return (
    <>
      <HeroCenter />
      <HeroHalfContentHalfImage />
      <HeroCenterPosition/>
      <HeroPositionHalf/>
      <HeroPosition/>
    </>
  );
};

export default Hero;
