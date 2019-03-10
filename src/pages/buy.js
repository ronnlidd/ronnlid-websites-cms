import React, { Component } from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import "../styles/buy.css"
import {
  BasicButton,
  NetlifyForm,
  FlexRow,
} from "../components/styledComponents"
import Package from "../components/package"
import ScndFancyButton from "../components/thirdFancyButton"
import Skus from "../components/Skus"

export default class Buy extends Component {
  render() {
    const { location, data } = this.props
    return (
      <Layout location={location}>
        <SEO title="Buy" keywords={[`gatsby`, `application`, `react`]} />
        <h1 className="buyTitle">Buy</h1>
        <Img fluid={data.file.childImageSharp.fluid} className="handshake" />
        <h2>Method 1: Email your requirements</h2>
        <ScndFancyButton
          text="Click here to send me an email from your software of choice"
          firstOrSecond={true}
          linkTo="mailto:david@ronnlidwebsites.com"
        />
        <br />
        <Skus />
        <br />

        <h2>Method 2: Email your requirements</h2>
        <NetlifyForm
          name="contact"
          method="POST"
          data-netlify="true"
          netlify-honeypot="bot-field"
          action="/contact-success/"
        >
          <p>
            <label>
              Your Name:{" "}
              <input
                type="text"
                name="name"
                placeholder=" First Name & Last Name"
              />
            </label>
          </p>
          <p>
            <label>
              Your Email:{" "}
              <input
                type="email"
                name="email"
                placeholder=" Email Address"
                required
              />
            </label>
          </p>
          <p>
            <label />
            Message:{" "}
            <textarea
              name="message"
              required
              placeholder="Let me know what you want your website to do for you/your company & if you have any specific requirements for design."
            />
          </p>
          <p>
            <label className="fileContainer">
              Wireframe/Sketch: <input type="file" name="name" />
            </label>
          </p>
          <p>
            <BasicButton type="submit" style={{ fontWeight: "300" }}>
              Send
            </BasicButton>
          </p>
        </NetlifyForm>
        <br />
        {/* <Stripe /> */}

        <br />
        <h2>Method 3: Choose a fixed cost package</h2>

        <FlexRow id="fixedCostPackages">
          <Package
            name="basic"
            listItems={["h", "b", "c", "d", "e"]}
            imgSrc={data.packageOne.childImageSharp.fluid}
            shortDescription="This is the most basic of all packages. It is perfect for the local pizzeria or haridresser. Display basic content and images as well as social media links."
          />
          <Package
            name="startup"
            listItems={["h", "b", "c", "d", "e"]}
            imgSrc={data.packageTwo.childImageSharp.fluid}
            shortDescription="Typical startup website with a couple of complex features, from which you can pick and choose a couple that best suit your needs."
          />
          <Package
            name="full-fledged"
            listItems={["h", "b", "c", "d", "e"]}
            imgSrc={data.packageThree.childImageSharp.fluid}
            shortDescription="Complex website with almost every feature a company can possibly need. Store integration, customer login, contact forms, etc."
          />
        </FlexRow>
      </Layout>
    )
  }
}

export const query = graphql`
  query Image {
    file(relativePath: { regex: "/handshake/" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
    packageOne: file(relativePath: { regex: "/handshake/" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
    packageTwo: file(relativePath: { regex: "/handshake/" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
    packageThree: file(relativePath: { regex: "/handshake/" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`
