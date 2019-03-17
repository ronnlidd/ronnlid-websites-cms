import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"
import { Helmet } from "react-helmet"
import styled from "styled-components"

import Header from "./header/header"
import "./layout.css"
import Footer from "./footer"
import Img from "gatsby-image"

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

const Layout = ({ children, pageTitle, location }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
            description
          }
        }
        desktopBackground: file(relativePath: { eq: "desktopHeader.png" }) {
          childImageSharp {
            fluid(maxWidth: 1000) {
              ...GatsbyImageSharpFluid
            }
          }
        }

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
      <>
        <Helmet>
          <script
            async=""
            src="https://www.googletagmanager.com/gtag/js?id=UA-132982458-1"
          />
        </Helmet>

        <Header
          siteTitle={data.site.siteMetadata.title}
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
              top: "0vw",
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
        </ImgRemoverOnSmallScreen>

        <main style={{ width: "85vw", margin: "2.5rem auto 1rem auto" }}>
          <h1>{pageTitle}</h1>
          {children}
        </main>
        <Footer imgSrc={data.file.childImageSharp.fluid} />
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
