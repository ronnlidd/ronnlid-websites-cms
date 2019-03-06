import React, { Component } from "react"
import styled from "styled-components"
import { BasicButton } from "../components/styledComponents"

const Aside = styled.form`
  display: none;
  @media (min-width: 1000px) {
    display: block;
    position: absolute;
    top: 33vw;
    right: 0;
    width: 50vw;
    input {
      color: black;
      border: 1px solid #4285f4;
      font-weight: 100;
      font-family: sans-serif;
      border-radius: 6px;
      color: white;
      background: darkblue;
      margin-left: 3px;
      margin-top: 6px;
    }
  }
`

export default class AsideContentIndexPage extends Component {
  render() {
    return (
      <Aside
        name="newsletter"
        method="POST"
        data-netlify="true"
        action="/newsletter-success/"
      >
        <label>
          <strong>Sign up for the RW newsletter:</strong>{" "}
          <input placeholder="   Email" type="email" name="email" />
        </label>
        <BasicButton
          type="submit"
          style={{ position: "relative", right: "1rem" }}
        >
          Sign me up!
        </BasicButton>
      </Aside>
    )
  }
}
