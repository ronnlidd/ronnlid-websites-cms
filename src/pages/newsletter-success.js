import React, { Component } from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

export default class NewsletterSuccess extends Component {
  render() {
    const { location } = this.props
    return (
      <Layout location={location} pageTitle="Success!">
        <SEO
          description="Successfully signed up for the Ronnlid Websites newsletter, keep an eye on your inbox for updates or deals."
          title="Signed up for newsletter! Success."
        />
        <div>
          <p>
            You just filled in a form, the contents have been sent to David
            Rönnlid!
          </p>
        </div>
      </Layout>
    )
  }
}
