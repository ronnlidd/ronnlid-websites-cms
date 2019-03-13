import React, { Component } from "react"
import Layout from "../components/layout"
import { Link } from "gatsby"
import { BasicButton } from "../components/styledComponents"

export class Success extends Component {
  render() {
    return (
      <Layout>
        <h1>Canceled buying fixed cost package</h1>
        <Link to="/buy">
          <BasicButton>
            Go to <i>Buy</i>
          </BasicButton>
        </Link>
        <Link to="/">
          <BasicButton>
            Go to <i>Home</i>
          </BasicButton>
        </Link>
        <br />
        <br />
        <br />
      </Layout>
    )
  }
}

export default Success
