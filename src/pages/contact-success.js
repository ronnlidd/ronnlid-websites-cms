import React, { Component } from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { Link } from "gatsby"
import { BasicButton } from "../components/styledComponents"

export default class ContactSuccess extends Component {
  render() {
    const { location } = this.props
    return (
      <Layout location={location} pageTitle="Success!">
        <SEO title="Success" keywords={[`gatsby`, `application`, `react`]} />
        <p>
          You just filled in a form, the contents have been sent to David
          Rönnlid!
        </p>
        <Link to="/">
          <BasicButton>GO TO HOME</BasicButton>
        </Link>
      </Layout>
    )
  }
}
