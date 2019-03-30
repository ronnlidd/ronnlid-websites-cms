import React, { Component } from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { Link } from "gatsby"
import { BasicButton } from "../components/styledComponents/styledComponents"

export default class ContactSuccess extends Component {
  render() {
    const { location } = this.props
    return (
      <Layout location={location} pageTitle="Success!">
        <SEO
          title="Contact Success"
          description="Successfully contacted Ronnlid Websites regarding opportunity to buy website, feedback or other inquiry."
        />
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
