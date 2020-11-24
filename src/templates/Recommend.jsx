import React from "react";
import tw from "twin.macro"; //eslint-disable-line
import "tailwindcss/dist/base.css";
import axios from "axios" //eslint-disable-line
import "../components/cmm/styles/globalStyles.css";
import AnimationRevealPage from "../components/cmm/AnimationEffect.jsx";
import RecommendTop from "../components/cop/rec/recommend/RecommendTop.jsx";
import RecommendList from "../containers/cop/rec/recommend/RecommendList.jsx";
import RecommendResult from "../containers/cop/rec/recommend/RecommendResult.jsx";


export default function Survey () {
  return (<>
    <RecommendTop />
    <AnimationRevealPage>
      <RecommendList />
      <RecommendResult />
    </AnimationRevealPage>
  </>)
}