import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"

import Header from "./header"
import "./layout.css"
import Footer from "./footer"
import Img from "gatsby-image"
import ronnlid from "../images/ronnlid.png"
import websites from "../images/websites.png"
import styled from "styled-components"

const ImgRemoverOnSmallScreen = styled.div`
  img {
    display: block;
  }

  @media screen and (max-width: 1000px) {
    img {
      display: none;
    }
  }
`

const Layout = ({ children, location }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
            description
          }
        }

        background: file(relativePath: { eq: "backg.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 1000) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        desktopBackground: file(relativePath: { eq: "desktopHeader.png" }) {
          childImageSharp {
            fluid(maxWidth: 1000) {
              ...GatsbyImageSharpFluid
            }
          }
        }

        file(relativePath: { regex: "/newLogov3/" }) {
          childImageSharp {
            fluid(maxWidth: 1000) {
              ...GatsbyImageSharpFluid_tracedSVG
            }
          }
        }
        ronnlid: file(relativePath: { eq: "ronnlid.png" }) {
          childImageSharp {
            fluid(maxWidth: 2000) {
              ...GatsbyImageSharpFluid
            }
          }
        }

        websites: file(relativePath: { eq: "websites.png" }) {
          childImageSharp {
            fluid(maxWidth: 2000) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `}
    render={data => (
      <>
        <Header
          siteTitle={data.site.siteMetadata.title}
          background={data.background.childImageSharp.fluid}
          logo={data.file.childImageSharp.fluid}
          location={location}
        />
        <ImgRemoverOnSmallScreen>
          <Img
            fluid={data.desktopBackground.childImageSharp.fluid}
            className="desktopBackground"
            style={{
              width: "45vw",
              position: "absolute",
              transform: "rotate(-120deg)",
              top: "-1vw",
              left: "1vw",
            }}
          />
          <Img
            fluid={data.desktopBackground.childImageSharp.fluid}
            className="desktopBackgroundTwo"
            style={{
              width: "45vw",
              position: "absolute",
              transform: "rotate(-45deg)",
              top: "-1vw",
              right: "2vw",
              overflow: "hidden",
            }}
          />
          <img
            style={{
              position: "absolute",
              top: "20vw",
              width: "18vw",
              left: "8vw",
            }}
            src={ronnlid}
            alt="ronnlid text"
          />
          <img
            src={websites}
            alt="websites text"
            style={{
              position: "absolute",
              top: "20vw",
              width: "20vw",
              right: "8vw",
            }}
          />
        </ImgRemoverOnSmallScreen>

        <main style={{ width: "80vw", margin: "0 auto" }}>{children}</main>

        <Footer imgSrc={data.file.childImageSharp.fluid} />
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
