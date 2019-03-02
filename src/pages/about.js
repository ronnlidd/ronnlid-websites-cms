import React, { Component } from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

export default class About extends Component {
  render() {
    const { location } = this.props
    return (
      <Layout location={location}>
        <SEO title="About" keywords={[`gatsby`, `application`, `react`]} />
        <div>
          <h1>About Ronnlid Websites</h1>
          <p>Website selling websites to start-ups</p>
        </div>
      </Layout>
    )
  }
}
