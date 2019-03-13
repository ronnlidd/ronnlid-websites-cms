import React, { Component } from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { Link } from "gatsby"
import { BasicButton } from "../components/styledComponents"

export default class ContactSuccess extends Component {
  render() {
    const { location } = this.props
    return (
      <Layout location={location}>
        <SEO title="Success" keywords={[`gatsby`, `application`, `react`]} />
        <div>
          <h1>Success!</h1>
          <p>
            You just filled in a form, the contents have been sent to David
            Rönnlid!
          </p>
          <Link to="/">
            <BasicButton>Go to home</BasicButton>
          </Link>
          <br />
          <br />
          <br />
        </div>
      </Layout>
    )
  }
}
