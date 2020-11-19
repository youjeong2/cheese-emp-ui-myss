import React, { useContext } from "react";
import { motion } from "framer-motion";
import tw from "twin.macro";
import styled from "styled-components";
import { css } from "styled-components/macro"; //eslint-disable-line
import {useHistory} from 'react-router-dom'
import { CartContext } from '../../containers/cop/cart_1/contexts/CartContext';
import { history } from '../../modules/history'

import useAnimatedNavToggler from "../../containers/cmm/hom/useAnimatedNavToggler.jsx";

import logo from "../images/cheese/cheese-logo.png";
import { ReactComponent as MenuIcon } from "feather-icons/dist/icons/menu.svg";
import { ReactComponent as CloseIcon } from "feather-icons/dist/icons/x.svg";
import {CartIcon} from '../../containers/cop/cart_1/Icons' //eslint-disable-line

import { FaRegUser } from "react-icons/fa"  //eslint-disable-line




const HeaderBlock = tw.header`
  flex justify-between items-center
  max-w-screen-xl mx-auto pt-3 pb-3
`;

const NavLinks = tw.div`inline-block`;

/* hocus: stands for "on hover or focus"
 * hocus:bg-primary-700 will apply the bg-primary-700 class on hover or focus
 */
const NavLink = tw.a`
  text-lg my-2 lg:text-sm lg:mx-6 lg:my-0
  font-semibold tracking-wide transition duration-300 
  pb-1 border-b-2 border-transparent hover:border-yellow-500 hocus:text-yellow-500
`;

const PrimaryLink = tw(NavLink)`
  lg:mx-0
  px-8 py-3 rounded bg-yellow-500 text-black
  hocus:bg-yellow-700 hocus:text-gray-200 focus:shadow-outline
  border-b-0
`;

const LogoLink = styled(NavLink)`
  ${tw`flex items-center font-black border-b-0 text-2xl! ml-0!`};

  img {
    ${tw`w-10 mr-3`}
  }
`;

const UserLink = styled(NavLink)`
    font-size: 1.0rem;
    font-weight: 400;
    position: relative;
    right: 0;
    left: 0;
    margin: 10px;
    cursor: pointer;
    text-decoration: none;
    white-space: pre;
    color: black;
    &:hover{
        color: yellow;
    }
    &.active{
        font-weight: 700;
        padding-bottom: 0.5rem;
        color: black;
        border-bottom: 2px solid #FFCE54;
        &:hover{
            color: #FFCE54;
        }
    }
`
const MobileNavLinksContainer = tw.nav`flex flex-1 items-center justify-between`;
const NavToggle = tw.button`
  lg:hidden z-20 focus:outline-none hocus:text-yellow-500 transition duration-300
`;
const MobileNavLinks = motion.custom(styled.div`
  ${tw`lg:hidden z-10 fixed top-0 inset-x-0 mx-4 my-6 p-8 border text-center rounded-lg text-gray-900 bg-white`}
  ${NavLinks} {
    ${tw`flex flex-col items-center`}
  }
`);

const DesktopNavLinks = tw.nav`
  hidden lg:flex flex-1 justify-between items-center
`;

const selectedStyle = {
  backgroundColor: "white", color: "yellow"
}




const Header = (props, { roundedHeaderButton = false, logoLink, links, className, collapseBreakpointClass = "lg" }) => {
  
  const history = useHistory()
  const logout = e => {
    alert('logout')
    e.preventDefault()
    sessionStorage.removeItem("sessionUser")
    history.push('/')
    window.location.reload()
  }

  const { showNavLinks, animation, toggleNavbar } = useAnimatedNavToggler();
  const collapseBreakpointCss = collapseBreakPointCssMap[collapseBreakpointClass];

  const defaultLogoLink = (
    <LogoLink href="/">
      <img src={logo} alt="logo" />
      Pic 2 Cheese
    </LogoLink>
  );

  logoLink = logoLink || defaultLogoLink;
  
  // const {itemCount} = useContext(CartContext)

  return (<>
    <HeaderBlock className={className || "header-light"}>
      <DesktopNavLinks css={collapseBreakpointCss.desktopNavLinks}>
        {logoLink}
        {links}
      </DesktopNavLinks>

      <MobileNavLinksContainer css={collapseBreakpointCss.mobileNavLinksContainer}>
        {logoLink}
        <MobileNavLinks initial={{ x: "150%", display: "none" }} animate={animation} css={collapseBreakpointCss.mobileNavLinks}>
          {links}
        </MobileNavLinks>
        <NavToggle onClick={toggleNavbar} className={showNavLinks ? "open" : "closed"}>
          {showNavLinks ? <CloseIcon tw="w-6 h-6" /> : <MenuIcon tw="w-6 h-6" />}
        </NavToggle>
      </MobileNavLinksContainer>


      <NavLinks key={1}>
          <NavLink href="/" >홈</NavLink>
          <NavLink href="/cheese">치즈</NavLink>
          <NavLink href="/review">Review</NavLink>
          <NavLink href="/survey">추천</NavLink>
          <NavLink href="/cart">cart</NavLink>
          <NavLink href="/login" tw="lg:ml-12!">Sign in</NavLink>
          <PrimaryLink css={roundedHeaderButton && tw`rounded-full`}href="/signup">Sign Up</PrimaryLink>
      </NavLinks> 


      {/* <NavLinks key={1}>
        { props.isAuth !== null
        ? <ul>
          <NavLink href="/" >홈</NavLink>
          <NavLink href="/cheese">치즈</NavLink>
          <NavLink href="/review">Review</NavLink>
          <NavLink href="/survey">추천</NavLink>
          {/* <NavLink href="/cart"><CartIcon/>Cart ({itemCount})</NavLink> */}
          {/*<NavLink href="/cart">Cart</NavLink>
          <NavLink onClick={logout} tw="lg:ml-12!" style={{textDecoration: 'underline'}}>Logout</NavLink>
        </ul>:
        <ul>
          <NavLink href="/" >홈</NavLink>
          <NavLink href="/cheese">치즈</NavLink>
          <NavLink href="/review">Review</NavLink>
          <NavLink href="/survey">추천</NavLink>
          <NavLink href="/login" tw="lg:ml-10!">Sign in</NavLink>
          <PrimaryLink css={roundedHeaderButton && tw`rounded-full`}href="/signup">Sign Up</PrimaryLink>
        </ul>
        }
      </NavLinks> */}
    </HeaderBlock>
  </>);
};
export default Header
/* The below code is for generating dynamic break points for navbar.
 * Using this you can specify if you want to switch
 * to the toggleable mobile navbar at "sm", "md" or "lg" or "xl" above using the collapseBreakpointClass prop
 * Its written like this because we are using macros and we can not insert dynamic variables in macros
 */

const collapseBreakPointCssMap = {
  sm: {
    mobileNavLinks: tw`sm:hidden`,
    desktopNavLinks: tw`sm:flex`,
    mobileNavLinksContainer: tw`sm:hidden`
  },
  md: {
    mobileNavLinks: tw`md:hidden`,
    desktopNavLinks: tw`md:flex`,
    mobileNavLinksContainer: tw`md:hidden`
  },
  lg: {
    mobileNavLinks: tw`lg:hidden`,
    desktopNavLinks: tw`lg:flex`,
    mobileNavLinksContainer: tw`lg:hidden`
  },
  xl: {
    mobileNavLinks: tw`lg:hidden`,
    desktopNavLinks: tw`lg:flex`,
    mobileNavLinksContainer: tw`lg:hidden`
  }
};