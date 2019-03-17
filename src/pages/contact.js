import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { Link } from "gatsby"
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
          Your Name:{" "}
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
  </Layout>
)

export default Contact
