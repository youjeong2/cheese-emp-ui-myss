import React from "react";
import tw from "twin.macro"; //eslint-disable-line
import "tailwindcss/dist/base.css";
import axios from "axios" //eslint-disable-line
import "../components/cmm/styles/globalStyles.css";
import AnimationRevealPage from "../components/cmm/AnimationEffect.jsx";
import SurveyTop from "../modules/cop/suv/survey/SurveyTop.jsx";
import SurveyRecommend from "../modules/cop/suv/survey/SurveyRecommend.jsx";
import SurveyResult from "../modules/cop/suv/survey/SurveyResult.jsx";


export default function Survey () {
  return (<>
    <SurveyTop />
    <AnimationRevealPage>
      <SurveyRecommend />
      <SurveyResult />
    </AnimationRevealPage>
  </>)
}