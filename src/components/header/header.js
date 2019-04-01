import React, { Component } from "react"
import styled from "styled-components"
import DesktopNav from "./desktopNav"
import MobileNav from "./mobileNav"
import LogoVideo from "../logoVideo"
import Logo from "../logo"
import { Spring } from "react-spring/renderprops"

const HeaderContainer = styled.div`
  margin: 0 auto -4.5rem auto;
  padding: 0.85rem 0;
  z-index: 2;
  position: relative;

  .ronnlidWebsitesLogo {
    width: 220px;
    margin: 0 auto;
  }
  @media screen and (min-width: 1000px) {
    margin: 0 auto 2.5rem auto;
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
      <Spring
        from={{ opacity: 0, marginTop: -200 }}
        to={{ opacity: 1, marginTop: 0 }}
      >
        {props => (
          <div style={props}>
            <HeaderContainer>
              {indexPage ? <LogoVideo logo={logo} /> : <Logo logoImg={logo} />}
              <DesktopNav />
              <MobileNav />
            </HeaderContainer>
          </div>
        )}
      </Spring>
    )
  }
}
