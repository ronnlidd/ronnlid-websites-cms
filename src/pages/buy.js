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
import Skus from "../components/Skus"

export default class Buy extends Component {
  render() {
    const { location, data } = this.props
    return (
      <Layout location={location} pageTitle="Buy">
        <SEO title="Buy" keywords={[`gatsby`, `application`, `react`]} />
        <Img fluid={data.file.childImageSharp.fluid} className="handshake" />
        <h2>Method 1: Email your requirements</h2>
        <a href="mailto:david@ronnlidwebsites.com">
          <BasicButton>SEND AN EMAIL FROM YOUR SOFTWARE OF CHOICE</BasicButton>
        </a>
        <br />
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
              SEND
            </BasicButton>
          </p>
        </NetlifyForm>
        <br />
        <br />
        <h2>Method 3: Choose a fixed cost package</h2>

        <h4>
          In the next step, use an email you have access to and can send emails
          from.
        </h4>

        <FlexRow id="fixedCostPackages">
          <Skus
            description={[
              "This is the most basic of all packages. It is perfect for the local pizzeria or hairdresser. Display basic content, images and social media links.",
              "Typical startup website with a couple of complex features, from which you can pick and choose a couple that best suit your needs.",
              "Complex website with a great deal of features that make the UX (User Experience) splendid. Store integration, customer login, contact forms, etc.)",
            ]}
            imgSrc={[
              data.packageOne.childImageSharp.fluid,
              data.packageTwo.childImageSharp.fluid,
              data.packageThree.childImageSharp.fluid,
            ]}
            listItems={[
              [
                "Your custom information displayed",
                "Web development best practices generally followed. (Responsive, mobile-first, image lazy loading, PWA, etc.)",
                "Custom design",
                "Hosting configured",
                "Your domain name of choice",
                "Max 3 pages",
              ],
              [
                "Your custom information displayed",
                "Web development best practices generally followed. (Responsive, mobile-first, image lazy loading, PWA, etc.)",
                "Custom design",
                "Hosting configured",
                "Your domain name of choice",
                "Max 1 product store OR blog with easy-to-use interface for writer",
                "Contact OR newsletter form to gather info from website visitors",
                "Max 10 pages",
              ],
              [
                "Your custom information displayed",
                "Web development best practices generally followed. (Responsive, mobile-first, image lazy loading, PWA, etc.)",
                "Custom design",
                "Hosting configured",
                "Your domain name of choice",
                "Blog with easy-to-use interface for writer",
                "Contact form and newsletter form to gather info from website visitors + Max 3 additional forms",
                "Max 10 products store",
                "Max 40 pages",
              ],
            ]}
            choices={[false, true, false]}
          />
        </FlexRow>
        <Img
          fluid={data.securedbystripe.childImageSharp.fluid}
          className="securedByStripe"
        />
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
    securedbystripe: file(relativePath: { regex: "/securedbystripe/" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
    packageOne: file(relativePath: { regex: "/fixedPackageOne/" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
    packageTwo: file(relativePath: { regex: "/fixedPackageTwo/" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
    packageThree: file(relativePath: { regex: "/fixedPackageThree/" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`
