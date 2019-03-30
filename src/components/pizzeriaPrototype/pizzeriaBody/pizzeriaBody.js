import React, { Component } from "react"
import PizzeriaBestall from "./pizzeriaBestall"
import PizzeriaMeny from "./pizzeriaMeny"
import PizzeriaPlats from "./pizzeriaPlats"

export class PizzeriaBody extends Component {
  render() {
    return (
      <>
        <PizzeriaMeny />
        <PizzeriaBestall />
        <PizzeriaPlats />
      </>
    )
  }
}

export default PizzeriaBody
