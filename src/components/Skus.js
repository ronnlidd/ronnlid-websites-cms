import React, { Component } from "react"
import { graphql, StaticQuery } from "gatsby"
import SkuCard from "./SkuCard"

const conatinerStyles = {
  display: "flex",
  flexDirection: "row",
  flexWrap: "wrap",
  justifyContent: "space-between",
  padding: "1rem 0 1rem 0",
}

class Skus extends Component {
  state = {
    stripe: null,
  }

  componentDidMount() {
    const stripe = window.Stripe("pk_live_DAHl0TQHnufm4JldxTzeWaXJ", {
      betas: ["checkout_beta_4"],
    })
    console.log("setting stripe:", { stripe })
    this.setState({ stripe })
  }

  render() {
    return (
      <StaticQuery
        query={graphql`
          query SkusForProduct {
            skus: allStripeSku(
              filter: { product: { id: { eq: "prod_Edxj3Luxu8mhHc" } } }
              sort: { fields: [price] }
            ) {
              edges {
                node {
                  id
                  currency
                  price
                  attributes {
                    name
                  }
                }
              }
            }
          }
        `}
        render={({ skus }) => (
          <div style={conatinerStyles}>
            {skus.edges.map(({ node: sku }) => (
              <SkuCard key={sku.id} sku={sku} stripe={this.state.stripe} />
            ))}
          </div>
        )}
      />
    )
  }
}

export default Skus
