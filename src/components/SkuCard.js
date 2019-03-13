import React from "react"
import { BasicButtonBuy } from "../components/styledComponents"
import Img from "gatsby-image"
import styled from "styled-components"

const PackageWrapper = styled.div`
  border: 1px solid black;
  padding: 1rem;
  margin-bottom: 1rem;
  width: 30%;
  box-shadow: 0px 3px 3px black;
  background: #f5f5f1;

  & ul {
    list-style: none;
    width: 100%;
    margin: 1rem auto;

    & li {
      padding: 1rem;
      background: radial-gradient(circle, rgb(255, 217, 0), blue 100px);
      background-size: 8px 11px;
      border: 1px solid black;
      box-shadow: 0 2px 2px black;
      color: black;
      border-radius: 0.75rem;
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
        Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji",
        "Segoe UI Symbol";
      font-weight: 100;
    }
  }

  & .textColor {
    color: black;
  }

  .h3 {
    padding: 1rem;
    background: #221f1f;
    box-shadow: 0 2px 2px #221f1f;
    border: 2px ridge #f5f5f1;
    color: #f5f5f1;
    margin-bottom: 0.75rem;
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
    const { sku, description, imgSrc, listItems } = this.props
    return (
      <PackageWrapper className="packageWrapper">
        <h3 className="textColor h3">{sku.attributes.name}</h3>

        <p className="textColor">{description}</p>
        <Img
          style={{ width: "100%", margin: "0 auto", borderRadius: "20px" }}
          fluid={imgSrc}
        />
        <ul>
          {listItems.map((item, index) => (
            <li key={index} className="textColor liColor">
              {item}
            </li>
          ))}
        </ul>
        <p className="textColor" style={{ marginBottom: "-.25rem" }}>
          Price: {formatPrice(sku.price, sku.currency)}
        </p>
        <BasicButtonBuy
          onClick={event => this.redirectToCheckout(event, sku.id)}
        >
          PURCHASE PACKAGE
        </BasicButtonBuy>
        <p className="textColor" style={{ fontSize: ".8rem" }}>
          <strong>Note:</strong> Additional costs for domain name of around $14
          (estimation, not guaranteed) are not included in the package costs.
          <br />
          <br /> If you need help with your website after we've agreed that the
          initially purchased website is done, there will be an extra cost of
          unknown amount (we'll negotiate via email in case it happens).
        </p>
      </PackageWrapper>
    )
  }
}

export default SkuCard
