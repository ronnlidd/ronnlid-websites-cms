import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { graphql } from "gatsby"
import PostListing from "../components/PostListing"
import "../styles/blog.css"

const Posts = ({ data, location }) => (
  <Layout location={location}>
    <SEO title="Blog" keywords={[`gatsby`, `application`, `react`]} />
    <h1>Blog Posts</h1>
    {data.allMarkdownRemark.edges.map(({ node }) => (
      <PostListing key={node.id} post={node} />
    ))}
    <br />
    <br />
    <br />
  </Layout>
)

export default Posts

export const query = graphql`
  query siteMetadata {
    allMarkdownRemark(
      limit: 4
      sort: { order: DESC, fields: [frontmatter___date] }
    ) {
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
