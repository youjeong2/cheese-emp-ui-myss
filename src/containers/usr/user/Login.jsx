import React, {useCallback, useState} from "react";
import { useDispatch, useSelector } from "react-redux"
import { userActions } from '../../../modules/usr/user/user.action'

import axios from 'axios'
import {useHistory } from "react-router-dom"

// import AnimationRevealPage from "../home/AnimationRevealPage.js";
import { Container as ContainerBase } from "../../../components/cmm/Layouts";
import tw from "twin.macro";
// import styled from "../components/common/node_modules/styled-components";
// import {css} from "../components/common/node_modules/styled-components/macro"; //eslint-disable-line
import {css} from "styled-components/macro"; //eslint-disable-line
import styled from "styled-components";
import cheeseLogin from "../../../components/images/cheese/cheeseImg2.png";
// import logo from "../images/logo.svg";
import { ReactComponent as LoginIcon } from "feather-icons/dist/icons/log-in.svg";



const Container = tw(ContainerBase)`min-h-screen bg-yellow-500 text-white font-medium flex justify-center`;
const Content = tw.div`max-w-screen-xl m-0 sm:mx-20 sm:my-16 bg-white text-gray-900 shadow sm:rounded-lg flex justify-center flex-1`;
const MainContainer = tw.div`lg:w-1/2 xl:w-5/12 p-6 sm:p-12`;
// const LogoLink = tw.a``;
// const LogoImage = tw.img`h-12 mx-auto`;
const MainContent = tw.div`mt-12 flex flex-col items-center`;
const Heading = tw.h1`text-2xl xl:text-3xl font-extrabold`;
const FormContainer = tw.div`w-full flex-1 mt-8`;

const SocialButtonsContainer = tw.div`flex flex-col items-center`;
const SocialButton = styled.a`
  ${tw`w-full max-w-xs font-semibold rounded-lg py-3 border text-gray-900 bg-gray-100 hocus:bg-gray-200 hocus:border-gray-400 flex items-center justify-center transition-all duration-300 focus:outline-none focus:shadow-outline text-sm mt-5 first:mt-0`}
  .iconContainer {
    ${tw`bg-white p-2 rounded-full`}
  }
  .icon {
    ${tw`w-4`}
  }
  .text {
    ${tw`ml-4`}
  }
`;

const DividerTextContainer = tw.div`my-12 border-b text-center relative`;
const DividerText = tw.div`leading-none px-2 inline-block text-sm text-gray-600 tracking-wide font-medium bg-white transform -translate-y-1/2 absolute inset-x-0 top-1/2 bg-transparent`;

const Form = tw.form`mx-auto max-w-xs`;
const Input = tw.input`w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5 first:mt-0`;
const SubmitButton = styled.button`
  ${tw`mt-5 tracking-wide font-semibold bg-yellow-500 text-black w-full py-4 rounded-lg hover:bg-yellow-900 transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none`}
  .icon {
    ${tw`w-6 h-6 -ml-2`}
  }
  .text {
    ${tw`ml-3`}
  }
`;
const CheeseLoginContainer = tw.div`sm:rounded-r-lg flex-1 bg-purple-100 text-center hidden lg:flex justify-center`;
const CheeseLoginImage = styled.div`
  ${props => `background-image: url("${props.imageSrc}");`}
  ${tw`m-12 xl:m-16 w-full max-w-sm bg-contain bg-center bg-no-repeat`}
`;

const logoLinkUrl = "/",
      cheeseLoginImageSrc  = cheeseLogin,
      headingText = "Sign In for Pic 2 Cheese",  
      submitButtonText = "Sign In",
      SubmitButtonIcon = LoginIcon,
      forgotPasswordUrl = "#",
      signupUrl = "/signup"

export default function Login (
  // logoLinkUrl = "/",
  // illustrationImageSrc = illustration,
  // headingText = "Sign In To Treact",
  // socialButtons = [
  //   {
  //     iconImageSrc: googleIconImageSrc,
  //     text: "Sign In With Google",
  //     url: "https://google.com"
  //   },
  //   {
  //     iconImageSrc: twitterIconImageSrc,
  //     text: "Sign In With Twitter",
  //     url: "https://twitter.com"
  //   }
  // ]
  // submitButtonText = "Sign In",
  // SubmitButtonIcon = LoginIcon,
  // forgotPasswordUrl = "#",
  // signupUrl = "/signup",
) {
  const [user_id, setUserId] = useState('')
  const [password, setPassword] = useState('')
  const dispatch = useDispatch()

  const history = useHistory()
  const login = e => {
    // 유저 로그인 한다
    e.preventDefault()
    axios.post(`http://192.168.0.21:8080/api/login`, {"user_id":user_id, "password":password})
        .then(user => {
            // alert(`Welcome ! ${res.data["fname"]}.  ${res.data["usr_id"]}'s connection is successful. ! `)

            sessionStorage.setItem("sessionUser", user.data['user_id'])
            
            history.push("/user-detail")
            window.location.reload()

        })
        .catch(error => {
            alert("Please check your ID or password.")
            window.location.reload()
        })
  }
    return (
      <div>
        {/* <Header /> */}
        {/* <AnimationRevealPage> */}
          <Container>
            <Content>
              <MainContainer>
                {/* <LogoLink href={logoLinkUrl}>
                  <LogoImage src={logo} />
                </LogoLink> */}
                <MainContent>
                  <Heading>{headingText}</Heading>
                  <FormContainer>
                    <DividerTextContainer>
                      <DividerText>Sign in with your Id</DividerText>
                    </DividerTextContainer>
                    <Form>
                      {/* <Input type="email" placeholder="Email" /> */}
                      <Input type="text" placeholder="ID" onChange={e => setUserId(`${e.target.value}`)}/>
                      <Input type="password" placeholder="Password"  onChange={e => setPassword(`${e.target.value}`)}/>
                      
                      {/* <SubmitButton type="submit" onClick= {
                        e => dispatch(userActions.login(user_id,password))
                        }>
                        <SubmitButtonIcon className="icon" />
                        <span className="text">{submitButtonText}</span>
                      </SubmitButton> */}

                      <SubmitButton type="submit" onClick= {login}>
                        <SubmitButtonIcon className="icon" />
                        <span className="text">{submitButtonText}</span>
                      </SubmitButton>
                    
                    </Form>
                    <p tw="mt-6 text-xs text-gray-600 text-center">
                      <a href={forgotPasswordUrl} tw="border-b border-gray-500 border-dotted">
                        Forgot Password ?
                      </a>
                    </p>
                    <p tw="mt-8 text-sm text-gray-600 text-center">
                      Dont have an account?{" "}
                      <a href="/signup" tw="border-b border-gray-500 border-dotted">
                        Sign Up
                      </a>
                    </p>
                  </FormContainer>
                </MainContent>
              </MainContainer>
              <CheeseLoginContainer>
                <CheeseLoginImage imageSrc={cheeseLoginImageSrc} />
              </CheeseLoginContainer>
            </Content>
          </Container>
        {/* </AnimationRevealPage> */}
      </div>
    );
  }