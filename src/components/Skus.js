import React, { Component } from "react"
import { graphql, StaticQuery } from "gatsby"
import SkuCard from "./SkuCard"

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
    const { stripe } = this.state
    const { description, imgSrc, listItems } = this.props

    return (
      <StaticQuery
        query={graphql`
          query SkusForProduct {
            skus: allStripeSku(
              filter: { product: { id: { eq: "prod_EfqEuugiOMZXCC" } } }
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
          <>
            {skus.edges.map(({ node: sku }, idx) => (
              <SkuCard
                key={sku.id}
                sku={sku}
                stripe={stripe}
                description={description[idx]}
                imgSrc={imgSrc[idx]}
                listItems={listItems[idx]}
              />
            ))}
          </>
        )}
      />
    )
  }
}

export default Skus
