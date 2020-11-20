import React from "react";
import tw from "twin.macro";
import axios from "axios"
import AnimationRevealPage from "../containers/cmm/hom/AnimationPage.jsx";
import Hero from "../containers/cop/itm/cheese/TwoColumnWithVideo.jsx";
// import StyledHeader from '../home/BackgroundAsImageWithCenteredContent'

// import Features from "./ThreeColSimple.jsx";
import MainFeature2 from "../containers/cop/itm/cheese/TwoColSingleFeatureWithStats2.jsx";

import TabGrid from "../containers/cop/itm/cheese/TabCardGrid.jsx";
import Testimonial from "../containers/cop/itm/cheese/ThreeColumnWithProfileImage.jsx";

// import chefIconImageSrc from "../images/chef-icon.svg";
// import celebrationIconImageSrc from "../images/celebration-icon.svg";
// import shopIconImageSrc from "../images/shop-icon.svg";

import Blog from "../containers/cmm/hom/Blogs.jsx";

export default function Cheese () {
  const Subheading = tw.span`tracking-wider text-sm font-medium`;
  const HighlightedText = tw.span`bg-primary-500 text-gray-100 px-4 transform -skew-x-12 inline-block`;
  // const HighlightedTextInverse = tw.span`bg-gray-100 text-primary-500 px-4 transform -skew-x-12 inline-block`;
  // const Description = tw.span`inline-block mt-8`;
  const imageCss = tw`rounded-4xl`;

  // const cheeseAxios = () => {
  //   axios.get(`http://192.168.0.5:8080/api/cheeses`)
  //     .then(res => {
  //       //const temp = jsxON.parse(res.data)
  //       alert(`Cheese Connection Success !!${res.data}`)

  //     }).catch(
  //       e => alert(`Cheese Failure`)
  //     )
  // }

  
  return (
    <div>
      <AnimationRevealPage>
        <Hero
          heading={<>Delicious & Affordable <HighlightedText>Cheese Near You.</HighlightedText></>}
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          imageSrc="https://img-cf.kurly.com/shop/data/goods/1515396236580l0.jpg"
          imageCss={imageCss}
          imageDecoratorBlob={true}
          primaryButtonText="Subscribe Now"
          watchVideoButtonText="Meet The Chefs"
          
        />
        </AnimationRevealPage>
        {/* TabGrid Component also accepts a tabs prop to customize the tabs and its content directly. Please open the TabGrid component file to see the structure of the tabs props.*/}
        <TabGrid
          heading={
            <>
              Checkout our <HighlightedText>menu.</HighlightedText>
            </>
          }
        />
        <AnimationRevealPage>
        <Blog />
        {/* <MainFeature2
          subheading={<Subheading>A Reputed Brand</Subheading>}
          heading={<>Why <HighlightedText>Choose Us ?</HighlightedText></>}
          statistics={[
            {
              key: "Orders",
              value: "94000+",
            },
            {
              key: "Customers",
              value: "11000+"
            },
            {
              key: "Chefs",
              value: "1500+"
            }
          ]}
          primaryButtonText="Order Now"
          primaryButtonUrl="https://order.now.com"
          imageInsideDiv={false}
          imageSrc="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEzNzI2fQ&auto=format&fit=crop&w=768&q=80"
          imageCss={Object.assign(tw`bg-cover`, imageCss)}
          imageContainerCss={tw`md:w-1/2 h-auto`}
          imageDecoratorBlob={true}
          imageDecoratorBlobCss={tw`left-1/2 md:w-32 md:h-32 -translate-x-1/2 opacity-25`}
          textOnLeft={true}
        />  */}
        <Testimonial
          subheading=""
          heading={<>Customers <HighlightedText>Love Us.</HighlightedText></>}
        />
      </AnimationRevealPage>
    </div>
  );
}