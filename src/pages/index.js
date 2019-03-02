import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { graphql } from "gatsby"
import PostListing from "../components/PostListing"

const IndexPage = ({ data, location }) => (
  <Layout location={location}>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <h1>Posts</h1>
    <h2>
      I belive that <i>{data.site.siteMetadata.description}</i>
    </h2>
    {data.allMarkdownRemark.edges.map(({ node }) => (
      <PostListing key={node.id} post={node} />
    ))}
  </Layout>
)

export default IndexPage

export const query = graphql`
  query siteMetadata {
    site {
      siteMetadata {
        title
        description
      }
    }

    allMarkdownRemark {
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "MMMM DD YYYY")
          }
          html
          excerpt
          fields {
            slug
          }
        }
      }
    }
  }
`