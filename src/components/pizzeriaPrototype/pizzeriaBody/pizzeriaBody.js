import React, { Component } from "react"
import PizzeriaBestall from "./pizzeriaBestall"
import PizzeriaMeny from "./pizzeriaMeny"
import PizzeriaPlats from "./pizzeriaPlats"
import { StyledH2, StyledP } from "../../styledComponents/textStyledComponents"

export class PizzeriaBody extends Component {
  render() {
    const { bigScreen } = this.props
    return (
      <>
        <StyledH2>Öppettider</StyledH2>
        <StyledP>
          Mån-Fre: 11:00-22:00 <br />
          Lör-Sön: 12:00-22:00
        </StyledP>
        <PizzeriaMeny bigScreen={bigScreen} />
        <PizzeriaBestall />
        <PizzeriaPlats />
      </>
    )
  }
}

export default PizzeriaBody
