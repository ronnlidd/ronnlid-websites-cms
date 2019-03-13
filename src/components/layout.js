import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"

import Header from "./header"
import "./layout.css"
import "../styles/lightMode.css"
import Footer from "./footer"
import Toggle from "../components/toggle"
import { BasicButton } from "../components/styledComponents"
import Img from "gatsby-image"
import { Helmet } from "react-helmet"

import styled from "styled-components"

const LightModeStyle = styled.div``

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
              ...GatsbyImageSharpFluid
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
        <Helmet>
          <script
            async=""
            src="https://www.googletagmanager.com/gtag/js?id=UA-132982458-1"
          />
        </Helmet>
        <Toggle>
          {({ on, toggle }) => (
            <>
              {on ? (
                <>
                  <Header
                    siteTitle={data.site.siteMetadata.title}
                    background={data.background.childImageSharp.fluid}
                    logo={data.file.childImageSharp.fluid}
                    location={location}
                  />
                  <BasicButton
                    onClick={toggle}
                    style={{
                      borderLeft: "none",
                      borderBottomRightRadius: ".6rem",
                      borderTopRightRadius: ".6rem",
                      paddingLeft: "1rem",
                      marginLeft: "-1rem",
                      width: "200px",
                    }}
                  >
                    Toggle Light Mode <i className="fas fa-lightbulb" />
                  </BasicButton>
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
                  </ImgRemoverOnSmallScreen>

                  <main style={{ width: "80vw", margin: "0 auto" }}>
                    {children}
                  </main>
                  <Footer imgSrc={data.file.childImageSharp.fluid} />
                </>
              ) : (
                <LightModeStyle className="lightMode">
                  <Header
                    siteTitle={data.site.siteMetadata.title}
                    background={data.background.childImageSharp.fluid}
                    logo={data.file.childImageSharp.fluid}
                    location={location}
                  />
                  <BasicButton
                    onClick={toggle}
                    style={{
                      borderLeft: "none",
                      borderBottomRightRadius: ".6rem",
                      borderTopRightRadius: ".6rem",
                      paddingLeft: "1rem",
                      marginLeft: "-1rem",
                      width: "200px",
                    }}
                  >
                    Toggle Light Mode <i className="far fa-lightbulb" />
                  </BasicButton>
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
                  </ImgRemoverOnSmallScreen>

                  <main
                    style={{ width: "80vw", margin: "0 auto -25.9px auto" }}
                  >
                    {children}
                  </main>
                  <Footer imgSrc={data.file.childImageSharp.fluid} />
                </LightModeStyle>
              )}
            </>
          )}
        </Toggle>
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
