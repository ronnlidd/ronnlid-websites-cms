import React, { Component } from "react"
import SEO from "../components/seo"
import Layout from "../components/layout"
import { graphql } from "gatsby"
import { Link } from "gatsby"
import FancyButton from "../components/FancyButton"
import { BasicButton } from "../components/styledComponents"
import "../styles/fancyButton.css"
import "../styles/blog.css"

export class PostPage extends Component {
  render() {
    const { data, location } = this.props
    return (
      <Layout location={location}>
        <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
        <Link to="/posts">
          <FancyButton>
            Go back to <i>Blog Posts</i>
          </FancyButton>
        </Link>
        <BasicButton className="mediaQueryBasicButtonMobile">
          <Link to="/posts">
            Go back to <i>Blog Posts</i>
          </Link>
        </BasicButton>
        <br />

        <div className="blogPost">
          <h1>{data.markdownRemark.frontmatter.title}</h1>
          <span>{data.markdownRemark.frontmatter.date}</span>
          <div
            dangerouslySetInnerHTML={{
              __html: data.markdownRemark.html,
            }}
          />
        </div>
        <br />
        <Link to="/posts">
          <FancyButton>
            Go back to <i>Blog Posts</i>
          </FancyButton>
        </Link>
        <BasicButton className="mediaQueryBasicButtonMobile">
          <Link to="/posts">
            Go back to <i>Blog Posts</i>
          </Link>
        </BasicButton>
        <Link to="/">
          <BasicButton>
            Go to <i>Home</i>
          </BasicButton>
        </Link>
        <br />
        <br />
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
