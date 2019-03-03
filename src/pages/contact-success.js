import React, { Component } from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

export default class IndexPage extends Component {
  render() {
    const { location } = this.props
    return (
      <Layout location={location}>
        <SEO title="About" keywords={[`gatsby`, `application`, `react`]} />
        <div>
          <h1>Success!</h1>
          <p>
            You just filled in a form, the contents have been sent to David
            Rönnlid!
          </p>
        </div>
      </Layout>
    )
  }
}
