import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { graphql } from "gatsby"
import PostListing from "../components/PostListing"
import "../styles/blog.css"

const Posts = ({ data, location }) => (
  <Layout location={location} pageTitle="Blog Posts">
    <SEO
      title="Blog posts"
      desciprtion="Browse the various front-end coding topics & articles that are featured on the Ronnlid Websites blog!"
    />
    {data.allMarkdownRemark.edges.map(({ node }) => (
      <PostListing key={node.id} post={node} />
    ))}
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
