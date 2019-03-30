import React, { Component } from "react"
import {
  StyledH1,
  StyledH2,
  StyledP,
} from "../../styledComponents/textStyledComponents"
import GoogleMapDavidRonnlid from "../../googleMapDavidRonnlid"

export default class PizzeriaPlats extends Component {
  render() {
    return (
      <div id="plats">
        <StyledH1>Plats</StyledH1>
        <StyledH2>Här finns vi:</StyledH2>
        <GoogleMapDavidRonnlid pizzeria={true} />
        <StyledP>Pipersgatan 4. 112 24. Stockholm.</StyledP>
      </div>
    )
  }
}
