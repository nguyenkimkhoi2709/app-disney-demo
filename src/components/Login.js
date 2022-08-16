import React from "react";
import styled from "styled-components";

import loginBackground from '../assets/images/login-background.jpg';
import logoOne from '../assets/images/cta-logo-one.png';
import logoTwo from '../assets/images/cta-logo-two.png';

const ContainerStyled = styled.section`
  display: flex;
  flex-direction: column;
  text-align: center;
  overflow: hidden;
  height: 100vh;
`
const ContentStyled = styled.div`
  width: 100%;
  margin-bottom: 10vw;
  min-height: 100vh;
  height: 100%;
  padding: 80px 40px;
  position: relative;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`
const BgImageStyled = styled.div`
  background-image: url(${loginBackground});
  background-size: cover;
  background-repeat: no-repeat;
  // background-position: top;

  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  z-index: -1;
  height: 100%;
`
const ModalStyled = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;

  text-align: center;
  width: 100%;
  max-width: 650px;
  margin-bottom: 2vw;
  margin-top: 0;
  // margin-right: auto;
  // margin-left: auto;
  transition-timing-function: ease-out;
  transition: opacity 0.2s;
`
const ModalLogoOneStyled = styled.img`
  width: 100%;
  max-width: 600px;
  display: block;
  min-height: 1px;
  margin-bottom: 12px;
`
const SignUpStyled = styled.a`
  width: 100%;
  font-weight: bold;
  background-color: #0063e5;

  margin-bottom: 12px;
  padding: 16px 0px;
  letter-spacing: 1.5px;
  font-size: 18px;
  border: 1px solid transparent;
  border-radius: 4px;

  &:hover {
    background-color: #0483ee;
    cursor: pointer;
  }
`
const DescriptionStyled = styled.p`
  font-size: 12px;
  margin: 0 0 24px;
  opacity: 0.9;
  letter-spacing: 1.5px;
  line-height: 1.5;
`
const ModalLogoTwoStyled = styled.img`
  width: 100%;
  max-width: 600px;
  margin-bottom: 20px;
`

function Login() {

  return (
    <ContainerStyled>
      <ContentStyled>
        <ModalStyled>
          <ModalLogoOneStyled src={logoOne} alt="not-found"/>
          <SignUpStyled>GET ALL THERE</SignUpStyled>
          <DescriptionStyled>
            Get Premier Access to Raya and the Last Dragon for an additional fee
            with a Disney+ subscription. As of 03/26/21, the price of Disney+
            and The Disney Bundle will increase by $1.
          </DescriptionStyled>
          <ModalLogoTwoStyled src={logoTwo} alt="not-found"/>
        </ModalStyled>
        <BgImageStyled className="image"/>
      </ContentStyled>
    </ContainerStyled>
  )
}

export default Login;

