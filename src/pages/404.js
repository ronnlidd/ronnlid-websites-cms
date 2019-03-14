import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const NotFoundPage = location => (
  <Layout location={location} pageTitle="NOT FOUND">
    <SEO title="Not found" />
    <h1>NOT FOUND</h1>
    <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
    <br />
  </Layout>
)

export default NotFoundPage
