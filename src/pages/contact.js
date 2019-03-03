import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const Contact = ({ data, location }) => (
  <Layout location={location}>
    <SEO title="Home" keywords={[`Contact`, `Email`, `Inquiries`]} />
    <h1>Contact</h1>
  </Layout>
)

export default Contact
