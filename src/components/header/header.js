import React, { Component } from "react"
import styled from "styled-components"
import Helmet from "react-helmet"
import DesktopNav from "./desktopNav"
import MobileNav from "./mobileNav"
import LogoVideo from "../logoVideo"
import Logo from "../logo"

const HeaderContainer = styled.div`
  margin: 1rem auto;
  padding: 0.85rem 0;
  z-index: 2;
  position: relative;

  .ronnlidWebsitesLogo {
    width: 220px;
    margin-left: 1rem;
  }

  @media screen and (min-width: 1000px) {
    margin: 0 auto;
    padding: 0;
    border: none;
    box-shadow: none;

    & .ronnlidWebsitesLogo {
      width: 24vw;
      margin: 0 auto;
      height: auto;
      animation: slideInFromLeft 0.3s ease 1 alternate;
    }

    @keyframes slideInFromLeft {
      from {
        transform: translateX(-100%) scale(9, 9);
      }
      to {
        transform: translateX(0) scale(1, 1);
      }
    }
  }
`

export default class Header extends Component {
  render() {
    const { logo, indexPage } = this.props

    return (
      <>
        <Helmet>
          <link
            rel="stylesheet"
            href="https://use.fontawesome.com/releases/v5.7.2/css/all.css"
            integrity="sha384-fnmOCqbTlWIlj8LyTjo7mOUStjsKC4pOpQbqyi7RrhN7udi9RwhKkMHpvLbHG9Sr"
            crossorigin="anonymous"
          />
        </Helmet>
        <HeaderContainer>
          {indexPage ? <LogoVideo logo={logo} /> : <Logo logoImg={logo} />}
          <DesktopNav />
          <MobileNav />
        </HeaderContainer>
      </>
    )
  }
}
