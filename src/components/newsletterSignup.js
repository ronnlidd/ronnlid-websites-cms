import React, { Component } from "react"
import { BasicButton, NetlifyForm } from "./styledComponents/styledComponents"
import styled from "styled-components"

const NewsletterInput = styled.input`
  border: 1px solid #1c2541;
  font-weight: 100;
  font-family: sans-serif;
  border-radius: 6px;
  color: #0b132b;
  background: #fff;
  margin-left: 3px;
  margin-right: 10px;
  margin-top: 6px;
`

export default class NewsletterSignup extends Component {
  render() {
    return (
      <NetlifyForm
        name="newsletter"
        method="POST"
        data-netlify="true"
        action="/newsletter-success/"
        netlify-honeypot="bot-field"
        style={{ width: "90%", margin: "0 auto" }}
      >
        <label>
          <strong style={{ fontFamily: "abel, sans-serif", color: "white" }}>
            Sign up for the RW newsletter:
          </strong>{" "}
          <NewsletterInput
            placeholder="   Email"
            type="email"
            name="email"
            required
          />
        </label>
        <BasicButton
          type="submit"
          style={{
            fontWeight: "300",
            width: "40vw",
            border: "1px solid white",
          }}
        >
          SIGN ME UP
        </BasicButton>
      </NetlifyForm>
    )
  }
}
