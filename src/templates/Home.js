import React from "react";
import tw from "twin.macro"; //eslint-disable-line
import { Link } from 'react-router-dom'; //eslint-disable-line
import AnimationRevealPage from "../containers/cmm/hom/AnimationRevealPage.js";
// import Header from "./common/header-practice.js"
import Hero from "../containers/cmm/hom/BackgroundAsImageWithCenteredContent.js";
import Features from "../containers/cmm/hom/VerticalWithAlternateImageAndText.js";
import Blog from "../containers/cmm/hom/Blogs.js";
import Testimonial from "../containers/cmm/hom/TwoColumnWithImage.js";
import ContactUsForm from "../containers/cmm/hom/SimpleContactUs.js";
import Footer from "../components/cmm/Footer.js";
import Header from "../components/cmm/Header.js";
import { ChatbotContainer as Chatbot } from "../containers/cop/itm/chatbot"
import FAQ from "../containers/cmm/hom/SingleCol.js";

  const Subheading = tw.span`uppercase tracking-widest font-bold text-primary-500`;
  const HighlightedText = tw.span`text-primary-500`;

const Home = () => <div className="home">
  <Header />
  <AnimationRevealPage>
    <Hero />
    <Features />
    <Blog />
    <Testimonial />
  <Chatbot/>
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
    <Footer />
  </AnimationRevealPage>      
</div>

export default Home


