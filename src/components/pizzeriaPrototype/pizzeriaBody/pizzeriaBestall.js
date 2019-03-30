import React, { Component } from "react"
import { StyledH1, StyledH2 } from "../../styledComponents/textStyledComponents"
import { StdBtn } from "../../styledComponents/styledComponents"

export default class PizzeriaBestall extends Component {
  render() {
    return (
      <div id="bestall">
        <StyledH1>Beställ</StyledH1>
        <StyledH2>Ring:</StyledH2>
        <a href="tel:0709440037">
          <StdBtn style={{ marginLeft: "3rem", marginBottom: "1rem" }}>
            <i className="fas fa-phone" /> 0709-44 00 37
          </StdBtn>
        </a>
      </div>
    )
  }
}
