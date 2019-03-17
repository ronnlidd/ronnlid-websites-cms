import React, { Component } from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

export class Success extends Component {
  render() {
    return (
      <Layout pageTitle="Successfully bought a fixed cost package">
        <SEO
          title="Purchase succesful"
          description="You successfully bought a fixed cost package via Ronnlid Websites. Thanks and congratulations!"
          keywords={[`Buy`, `Purchase`, `Inquiries`]}
        />
        <h3>Thanks and congratulations. Happy to be in business with you.</h3>
        <p>
          I will reach out to the email you used when purchasing the package
          within 3 business days. If you want us to keep in touch via
          alternative methods of communication
          <a
            href="mailto:david@ronnlidwebsites.com"
            style={{
              background: "white",
              padding: "4px",
              margin: "1px",
              borderRadius: "10px",
            }}
          >
            shoot me an email
          </a>{" "}
          with your order ID included. You will receive your order ID soon in
          your inbox. If there are any other questions or problems, don't
          hesitate to{" "}
          <a
            href="mailto:david@ronnlidwebsites.com"
            style={{
              background: "white",
              padding: "4px",
              margin: "1px",
              borderRadius: "10px",
            }}
          >
            reach out to me.
          </a>
        </p>
      </Layout>
    )
  }
}

export default Success

// Define time estimate
