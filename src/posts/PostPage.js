import React, { Component } from "react"
import SEO from "../components/seo"
import Layout from "../components/layout"
import { graphql } from "gatsby"
import PageProgress from "react-page-progress"
import styled from "styled-components"
import { Link } from "gatsby"
import FancyButton from "../components/FancyButton"
import { BasicButton } from "../components/styledComponents"
import "../styles/fancyButton.css"

const PageProgressContainer = styled.div`
  position: absolute;
  width: 100%;
  top: 0;
  left: 0;
`

export class PostPage extends Component {
  render() {
    const { data, location } = this.props
    return (
      <Layout location={location}>
        <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
        <PageProgressContainer>
          <PageProgress />
        </PageProgressContainer>
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
