import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { Link } from "gatsby"
import { NetlifyForm } from "../components/styledComponents"
import { BasicButton } from "../components/styledComponents"

const Contact = ({ data, location }) => (
  <Layout location={location}>
    <SEO title="Contact" keywords={[`Contact`, `Email`, `Inquiries`]} />
    <h1 className="pageTitle" style={{ position: "relative", top: "1rem" }}>
      Contact
    </h1>
    You <i>can</i> send website inquiries here, <br />
    but I recommend going to the{" "}
    <Link to="/buy">
      <i className="fas fa-shopping-cart" />
    </Link>{" "}
    if that's what you're looking for.
    <br />
    <br />
    <NetlifyForm
      name="contact"
      method="POST"
      data-netlify="true"
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
          <input type="email" name="email" placeholder=" Email Address" />
        </label>
      </p>
      <p>
        <label />
        Message:{" "}
        <textarea
          name="message"
          placeholder="Write your question or input here."
        />
      </p>
      <p>
        <label className="fileContainer">
          Wireframe/Sketch: <input type="file" name="name" />
        </label>
      </p>
      <p>
        <BasicButton type="submit" style={{ fontWeight: "300" }}>
          Send feedback, requirements or other
        </BasicButton>
      </p>
    </NetlifyForm>
  </Layout>
)

export default Contact
