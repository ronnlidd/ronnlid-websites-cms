import React from "react"
import { BasicButton } from "../components/styledComponents"
import Img from "gatsby-image"
import styled from "styled-components"

const PackageWrapper = styled.div`
  border: 1px solid #fff;
  padding: 1rem;
  margin: 1rem auto;
  width: 30%;
  box-shadow: 0px 3px 3px #0b132b;
  background: #3a506b;

  & h4 {
    border-radius: 1rem;
    background: #0b132b;
    border: 1px solid #fff;
    padding: 1rem;
    box-shadow: 0 1px 1px #0b132b;
  }

  & ul {
    list-style: none;
    width: 100%;
    margin: 1rem auto;

    & li {
      padding: 1rem;
      background: #0b132b;
      border: 1px solid #fff;
      box-shadow: 0 2px 2px #0b132b;
      color: #fff;
      border-radius: 0.75rem;
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
        Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji",
        "Segoe UI Symbol";
      font-weight: 100;
    }
  }
`

const formatPrice = (amount, currency) => {
  let price = (amount / 100).toFixed(2)
  let numberFormat = new Intl.NumberFormat(["en-US"], {
    style: "currency",
    currency: currency,
    currencyDisplay: "symbol",
  })
  return numberFormat.format(price)
}

const SkuCard = class extends React.Component {
  async redirectToCheckout(event, sku, quantity = 1) {
    event.preventDefault()
    const { error } = await this.props.stripe.redirectToCheckout({
      items: [{ sku, quantity }],
      successUrl: `${window.location.origin}/success`,
      cancelUrl: `${window.location.origin}/canceled`,
    })

    if (error) {
      console.warn("Error:", error)
    }
  }

  render() {
    const { sku, description, imgSrc, listItems, choices } = this.props
    return (
      <PackageWrapper className="packageWrapper">
        <h4>{sku.attributes.name.toUpperCase()}</h4>

        <p>{description}</p>
        <Img
          style={{ width: "100%", margin: "0 auto", borderRadius: "20px" }}
          fluid={imgSrc}
        />
        <ul>
          {listItems.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
        <p style={{ marginBottom: "-.25rem" }}>
          Price: <strong>{formatPrice(sku.price, sku.currency)}</strong>
        </p>
        <BasicButton onClick={event => this.redirectToCheckout(event, sku.id)}>
          PURCHASE PACKAGE
        </BasicButton>
        <p style={{ fontSize: ".8rem" }}>
          <strong>Note:</strong> Additional costs for domain name of around $14
          (estimation, not guaranteed) are not included in the package costs.
          <br />
          <br /> If you need help with your website after we've agreed that the
          initially purchased website is done, there will be an extra cost of
          unknown amount (we'll negotiate via email in case it happens).
        </p>
        {choices ? (
          <p
            style={{
              color: "white",
              padding: "10px",
              background: "#0b132b",
              border: "1px solid #fff",
            }}
          >
            We will initialize an email conversation in which you can tell me
            your choices for this package.
          </p>
        ) : null}
      </PackageWrapper>
    )
  }
}

export default SkuCard
