import React, { Component } from "react"
import SEO from "../components/seo"
import Layout from "../components/layout"
import { graphql } from "gatsby"

export class PostPage extends Component {
  render() {
    const { data, location } = this.props
    return (
      <Layout location={location}>
        <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
        <h1>Post page</h1>
        <h1>{data.markdownRemark.frontmatter.title}</h1>
        <span>{data.markdownRemark.frontmatter.date}</span>
        <div
          dangerouslySetInnerHTML={{
            __html: data.markdownRemark.html,
          }}
        />
      </Layout>
    )
  }
}

export default PostPage

export const query = graphql`
  query BlogPostQuery($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      excerpt
      html
      frontmatter {
        title
        date(formatString: "MMMM DD YYYY")
      }
    }
  }
`
