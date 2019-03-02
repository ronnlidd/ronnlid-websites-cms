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
      }
    `}
    // logo: file(relativePath: { eq: "newLogov3.png" }) {
    //   childImageSharp {
    //     fluid(maxWidth: 1000) {
    //       ...GatsbyImageSharpFluid
    //     }
    //   }
    // }

    render={data => (
      <>
        <Header
          siteTitle={data.site.siteMetadata.title}
          // logo={data.logo.childImageSharp.fluid}
          background={data.background.childImageSharp.fluid}
          location={location}
        />

        <main style={{ width: "80%", margin: "0 auto" }}>{children}</main>
        <footer style={{ width: "80%", margin: "0 auto" }}>
          © {new Date().getFullYear()}, Ronnlid Websites, David Rönnlid
        </footer>
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
