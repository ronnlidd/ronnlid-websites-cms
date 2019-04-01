import React, { Component } from "react"
import SEO from "../components/seo"
import Layout from "../components/layout"
import { graphql } from "gatsby"
import { Link } from "gatsby"
import { BasicButton } from "../components/styledComponents/styledComponents"
import "../styles/fancyButton.css"
import "../styles/blog.css"

export class PostPage extends Component {
  render() {
    const { data, location } = this.props
    return (
      <Layout location={location}>
        <SEO
          title={data.markdownRemark.frontmatter.title}
          description="Learning to code? This post is only one of the vast array of front-end coding topics that are covered on the Ronnlid Websites blog, from the general to the specific."
        />

        <div className="blogPost">
          <Link to="/posts">
            <BasicButton>
              GO BACK TO <i>BLOG POSTS</i>
            </BasicButton>
          </Link>
          <h1>{data.markdownRemark.frontmatter.title}</h1>
          <span>{data.markdownRemark.frontmatter.date}</span>
          <div
            dangerouslySetInnerHTML={{
              __html: data.markdownRemark.html,
            }}
          />
        </div>
        <Link to="/posts">
          <BasicButton>
            GO BACK TO <i>BLOG POSTS</i>
          </BasicButton>
        </Link>
        <Link to="/">
          <BasicButton>
            GO TO <i>HOME</i>
          </BasicButton>
        </Link>
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
