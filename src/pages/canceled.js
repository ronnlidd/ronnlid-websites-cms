import React, { Component } from "react"
import Layout from "../components/layout"
import { Link } from "gatsby"
import { BasicButton } from "../components/styledComponents"

export class Success extends Component {
  render() {
    return (
      <Layout pageTitle="Canceled buying fixed cost package">
        <Link to="/buy">
          <BasicButton>
            GO TO <i>BUY</i>
          </BasicButton>
        </Link>
        <Link to="/">
          <BasicButton>
            GO TO <i>HOME</i>
          </BasicButton>
        </Link>
      </Layout>
    )
  }
}

export default Success
