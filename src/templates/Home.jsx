import React from "react";
import tw from "twin.macro"; //eslint-disable-line
import { Link } from 'react-router-dom'; //eslint-disable-line
import AnimationRevealPage from "../components/cmm/AnimationEffect.jsx";
// import Header from "./common/header-practice.js"
import Hero from "../containers/cmm/hom/BackgroundAsImageWithCenteredContent.jsx";
import Features from "../containers/cmm/hom/VerticalWithAlternateImageAndText.jsx";
import Blog from "../containers/cmm/hom/Blogs.jsx";
import Testimonial from "../containers/cmm/hom/TwoColumnWithImage.jsx";
import ContactUsForm from "../containers/cmm/hom/SimpleContactUs.jsx";
import { ChatbotContainer as Chatbot } from "../containers/cop/itm/chatbot"
import FAQ from "../containers/cmm/hom/SingleCol.jsx";
import Tooltip from '@material-ui/core/Tooltip'

  const Subheading = tw.span`uppercase tracking-widest font-bold text-primary-500`;
  const HighlightedText = tw.span`text-primary-500`;

export default function Home () {
  return( <div className="home">
  {/* <Header /> */}
  <AnimationRevealPage>
    <Tooltip title="구매 고객 리뷰 리스트 CRUD">
    <Chatbot/>
    </Tooltip>
    <Hero />
    <Features />
    <Blog />
    <Testimonial />
  <FAQ
        subheading={<Subheading>FAQS</Subheading>}
        heading={
          <>
            You have <HighlightedText>Questions ?</HighlightedText>
          </>
        }
        faqs={[
          {
            question: "Pic 2 Cheese는 어떤 서비스 인가요 ?",
            answer:
              "Pic 2 Cheese는 치즈를 구매데이터를 분석해서 취향에 맞는 치즈를 추천해드립니다. "
          },
          {
            question: " ",
            answer:
              ""
          },
          {
            question: "",
            answer:
              ""
          },
          {
            question: "",
            answer:
              ""
          },
          {
            question: "",
            answer:
              ""
          },
          {
            question: "",
            answer:
              ""
          }
        ]}
      />
    <ContactUsForm />
  </AnimationRevealPage>      
</div>)
}
