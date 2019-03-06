import React, { Component } from "react"
import { BasicButton } from "../components/styledComponents"

export class Checkout extends Component {
  componentDidMount() {
    this.stripe = window.Stripe("pk_live_DAHl0TQHnufm4JldxTzeWaXJ", {
      betas: ["checkout_beta_4"],
    })
  }

  async redirectToCheckout(event) {
    event.preventDefault()
    const { error } = await this.stripe.redirectToCheckout({
      items: [{ sku: "sku_EdxjjbOPsKUcH6", quantity: 1 }],
      successUrl: `https://localhost:8000/success`,
      cancelUrl: `https://localhost:8000/canceled`,
    })

    if (error) {
      console.warn("Error:", error)
    }
  }

  render() {
    return (
      <>
        <BasicButton
          id="checkout-button"
          role="link"
          onClick={event => this.redirectToCheckout(event)}
        >
          Pay
        </BasicButton>
        <div id="error-message" />
      </>
    )
  }
}

export default Checkout
