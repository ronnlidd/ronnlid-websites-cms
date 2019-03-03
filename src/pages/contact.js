import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import styled from "styled-components"

const NetlifyForm = styled.form`
  background: red;
`

const Contact = ({ data, location }) => (
  <Layout location={location}>
    <SEO title="Home" keywords={[`Contact`, `Email`, `Inquiries`]} />
    <h1>Contact</h1>
    <NetlifyForm
      name="contact"
      method="POST"
      data-netlify="true"
      action="/contact-success/"
    >
      <p>
        <label>
          Your Name: <input type="text" name="name" />
        </label>
      </p>
      <p>
        <label>
          Your Email: <input type="email" name="email" />
        </label>
      </p>
      <p>
        <label>
          Message: <textarea name="message" />
        </label>
      </p>
      <p>
        <label>
          Wireframe/Sketch: <input type="file" name="name" />
        </label>
      </p>
      <p>
        <button type="submit">Send</button>
      </p>
    </NetlifyForm>
  </Layout>
)

export default Contact
