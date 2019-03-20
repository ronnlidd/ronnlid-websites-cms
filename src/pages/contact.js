import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { Link, graphql } from "gatsby"
import Img from "gatsby-image"
import { NetlifyForm } from "../components/styledComponents"
import { BasicButton } from "../components/styledComponents"

const Contact = ({ data, location }) => (
  <Layout location={location} pageTitle="Contact">
    <SEO
      title="Contact"
      description="Contact Ronnlid Websites by means of sending an email with your requirements for a website, feedback, or other queries."
      keywords={[`Contact`, `Email`, `Inquiries`]}
    />
    <p>
      You <i>can</i> send website inquiries here, <br />
      but I recommend going to the{" "}
      <Link to="/buy">
        <i className="fas fa-shopping-cart" />
      </Link>{" "}
      if that's what you're looking for.
    </p>
    <NetlifyForm
      name="contact"
      method="POST"
      data-netlify="true"
      netlify-honeypot="bot-field"
      action="/contact-success/"
    >
      <p>
        <label>
          Your Name: <br />
          <input
            type="text"
            name="name"
            placeholder=" First Name & Last Name"
            required
          />
        </label>
      </p>
      <p>
        <label>
          Your Email: <br />
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
        Message: <br />
        <textarea
          name="message"
          placeholder="Write your question or input here."
          required
        />
      </p>
      <p>
        <label className="fileContainer">
          Wireframe/Sketch: <input type="file" name="name" />
        </label>
      </p>
      <p>
        <BasicButton type="submit" style={{ fontWeight: "300" }}>
          SEND FEEDBACK OR REQUIREMENTS
        </BasicButton>
      </p>
    </NetlifyForm>
    <Img
      fluid={data.rwcards.childImageSharp.fluid}
      alt="Ronnlid Websites business cards."
      style={{
        margin: "1rem auto",
        borderRadius: "1rem",
        border: "1px solid white",
        width: "70vw",
        minWidth: "200px",
        overflowX: "hidden",
      }}
    />
  </Layout>
)

export const query = graphql`
  query rwCard {
    rwcards: file(relativePath: { regex: "/rwcards/" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

export default Contact
