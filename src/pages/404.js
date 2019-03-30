import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { Link } from "gatsby"
import { BasicButton } from "../components/styledComponents/styledComponents"

const NotFoundPage = location => (
  <Layout location={location} pageTitle="NOT FOUND">
    <SEO
      title="404 Not found"
      description="This page was not found. The home button on this page will redirect user to home page (about)."
      meta={[]}
      keywords={["Error", "Not found"]}
    />
    <p>You just hit a route that doesn&#39;t exist.</p>
    <Link to="/">
      <BasicButton>
        Go to <i>Home</i>
      </BasicButton>
    </Link>
  </Layout>
)

export default NotFoundPage
