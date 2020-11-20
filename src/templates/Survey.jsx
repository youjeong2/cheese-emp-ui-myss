import React from "react";
import tw from "twin.macro"; //eslint-disable-line
import "tailwindcss/dist/base.css";
import axios from "axios" //eslint-disable-line
import "../components/styles/globalStyles.css";
import AnimationRevealPage from "../containers/cmm/hom/AnimationPage.jsx";
import Header from "../components/cmm/Header.jsx";
import Hero from "../containers/cop/suv/survey/TwoColumnWithPrimaryBackground.jsx";
import Pricing from "../containers/cop/suv/survey/ThreePlansWithHalfPrimaryBackground.jsx";
import FAQ from "../containers/cop/suv/survey/TwoColumnPrimaryBackground.jsx";


export default function Survey () {
  return (<>
    <Hero />
    <AnimationRevealPage>
      <Pricing />
      <FAQ />
    </AnimationRevealPage>
  </>)
}