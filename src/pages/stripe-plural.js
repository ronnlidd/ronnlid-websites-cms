import React, { Component } from "react"
import { StaticQuery, graphql } from "gatsby"
import Layout from "../components/layout"

export class StripePlural extends Component {
  componentDidMount() {
    this.stripe = window.Stripe("pk_live_DAHl0TQHnufm4JldxTzeWaXJ", {
      betas: ["checkout_beta_4"],
    })
  }

  handleSubmit(sku) {
    return event => {
      event.preventDefault()

      this.stripe
        .redirectToCheckout({
          items: [{ sku, quantity: 1 }],

          successUrl: "http://localhost:8000/success",
          cancelUrl: "http://localhost:8000/canceled",
        })
        .then(function(result) {
          if (result.error) {
            console.error(result.error.message)
          }
        })
    }
  }

  render() {
    const { id, currency, price, name } = this.props

    const priceFloat = (price / 100).toFixed(2)
    const formattedPrice = Intl.NumberFormat("en-US", {
      style: "currency",
      currency,
    }).format(priceFloat)

    return (
      <form onSubmit={this.handleSubmit(id)}>
        <h2>
          {formattedPrice} for {name}
        </h2>
        <button type="submit">Buy now</button>
      </form>
    )
  }
}

export default () => (
  <StaticQuery
    query={graphql`
      {
        allStripeSku {
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
    render={data => (
      <Layout>
        {data.allStripeSku.edges.map(({ node: sku }) => (
          <StripePlural
            id={sku.id}
            currency={sku.currency}
            price={sku.price}
            name={sku.attributes.name}
          />
        ))}
      </Layout>
    )}
  />
)
