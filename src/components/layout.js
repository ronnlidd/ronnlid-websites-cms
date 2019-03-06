/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"

import Header from "./header"
import "./layout.css"
import Footer from "./footer"
import styled from "styled-components"

const BesidesHeader = styled.div`
  width: 80vw;
  margin: 0 auto;
  @media screen and (min-width: 1000px) {
    width: 40vw;
    display: block;
    margin: 0 5vw;
    & .pageTitle {
      position: relative;
      top: 1rem;
    }
  }
`

const Layout = ({ children, besidesHeader, location }) => (
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
        file(relativePath: { regex: "/newLogov3/" }) {
          childImageSharp {
            fluid(maxWidth: 1000) {
              ...GatsbyImageSharpFluid_tracedSVG
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

        <BesidesHeader>{besidesHeader}</BesidesHeader>
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
