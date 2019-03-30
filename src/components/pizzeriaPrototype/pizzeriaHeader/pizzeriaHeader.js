import React from "react"
import { StaticQuery, graphql } from "gatsby"
import styled from "styled-components"
import Logo from "../../logo"
import DesktopPizzeriaMenu from "../pizzeriaHeader/desktopPizzeriaMenu"
import MobilePizzeriaMenu from "./mobilePizzeriaMenu"

const PizzeriaHeaderDiv = styled.div`
  background: ${props => props.theme.bgComp}
  border-bottom: 1px solid ${props => props.theme.fg};

  .ronnlidWebsitesLogo {
    width: 40vw;
    margin: -1rem auto -2.3rem auto;
  }

  @media screen and (min-width: 1000px) {
    margin: 0 auto;
    background: ${props => props.theme.fg}
    margin-bottom: 1rem;

    & .ronnlidWebsitesLogo {
      width: 24vw;
      margin: 0 auto;
      margin: -1rem auto -4rem auto;
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

export default props => (
  <StaticQuery
    query={graphql`
      query LogoQuery {
        file(relativePath: { regex: "/newLogov4/" }) {
          childImageSharp {
            fluid(maxWidth: 1000) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `}
    render={data => (
      <PizzeriaHeaderDiv>
        {props.bigScreen ? <DesktopPizzeriaMenu /> : <MobilePizzeriaMenu />}
        <Logo logoImg={data.file.childImageSharp.fluid} />
      </PizzeriaHeaderDiv>
    )}
  />
)
