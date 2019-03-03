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
          <h1>Buy</h1>
          <a href="mailto:david@ronnlidwebsites.com">
            Send me requirements/wants
          </a>
        </div>
      </Layout>
    )
  }
}
