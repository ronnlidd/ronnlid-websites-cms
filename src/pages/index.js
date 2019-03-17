import React, { Component } from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Img from "gatsby-image"
import TechStack from "../components/techStack"
import Toggle from "../components/toggle"
import styled from "styled-components"
import { BasicButton } from "../components/styledComponents"
import FAQ from "../components/fAQ"
import ValueProposition from "../components/valueProposition"
import { Link } from "gatsby"

const AboutDavid = styled.div`
  border: 1px solid #fff;
  padding: 2rem;
  border-radius: 1rem;
  box-shadow: 0 2px 2px #0b132b;
  background: #3a506b;
  z-index: 5;

  & h1,
  h5,
  button,
  p {
    color: #fff;
  }

  @media screen and (max-width: 1000px) {
    display: block;
    padding-bottom: 3px;
    margin-bottom: 1rem;
  }

  @media screen and (min-width: 1000px) {
    width: 40vw;
    margin: 1rem auto;
    padding-bottom: 3px;
  }
`

export default class IndexPage extends Component {
  render() {
    const { location } = this.props
    return (
      <Layout location={location}>
        <SEO
          title="About"
          description="The user experience is the most important factor for your company's long-term success. With the insight that experience is the ultimate source of value, Ronnlid Website boosts the UX of your website to the max and leaves you with a good feeling too."
          keywords={[
            "Home",
            "Value Proposition",
            "About",
            "Ronnlid Websites",
            "FAQ",
            "Stockholm",
          ]}
        />
        <br />
        <Link to="/svenska">
          <BasicButton>Gå till Svenska (Swedish Info for locals)</BasicButton>
        </Link>

        <h1>Value Proposition</h1>
        <ValueProposition />
        <br />
        <h1>About Ronnlid Websites</h1>
        <h2>Company selling website solutions.</h2>
        <AboutDavid className="aboutDavid" id="about">
          <Img
            fluid={this.props.data.file.childImageSharp.fluid}
            style={{ borderRadius: "60%", width: "40%", margin: "0 auto" }}
            alt="David Rönnlid"
          />
          <a
            href="https://www.linkedin.com/in/davidronnlid/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <BasicButton>DAVID RÖNNLID ON LINKEDIN</BasicButton>
          </a>
          <p>
            Ronnlid Websites is based in Stockholm. It is owned and founded by
            David Rönnlid, web developer (mainly front-end) & entrepreneur. My
            vision is no less than a world where people are experiencing more
            well-being. I try to boost love and reduce suffering by accruing
            power to influence reality, including the society within which the
            people who can experience more or less valuably exist. This company
            & coding is a means to that end.
          </p>
        </AboutDavid>
        <SEO title="About" keywords={[`gatsby`, `application`, `react`]} />
        <Toggle>
          {({ on, toggle }) => (
            <>
              {on ? (
                <>
                  <BasicButton onClick={toggle}>
                    HIDE TECHNOLOGIES USED AT THE COMPANY
                  </BasicButton>
                  <TechStack />
                </>
              ) : (
                <BasicButton onClick={toggle}>
                  SHOW TECHNOLOGIES USED AT THE COMPANY
                </BasicButton>
              )}
            </>
          )}
        </Toggle>

        <br />
        <br />

        <FAQ />
      </Layout>
    )
  }
}

export const query = graphql`
  query davidImg {
    file(relativePath: { regex: "/davidRonnlidPreview/" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`

// businesscards: file(relativePath: regex: "/bussinesscards/"}) {
//   childImageSharp {
//     fluid(maxWidth: 1000) {
//       ...GatsyImageSharpFluid_tracedSVG
//     }
//   }
// }
