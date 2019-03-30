import React, { Component } from "react"
import styled from "styled-components"
import PizzeriaHeader from "./pizzeriaHeader/pizzeriaHeader"
import { PizzeriaBody } from "./pizzeriaBody/pizzeriaBody"
import { PizzeriaFooter } from "./pizzeriaFooter/pizzeriaFooter"

const PizzeriaLayoutDiv = styled.div`
  width: 100%;
  background: ${props => props.theme.bg};
  margin: 0 auto;
  position: relative;
  border-radius: 0.5rem;
`

export class PizzeriaLayout extends Component {
  constructor() {
    super()

    this.state = {
      bigScreen: true,
    }
  }

  componentDidMount() {
    if (window.innerWidth > 800) {
      this.setState({
        bigScreen: true,
      })
    } else {
      this.setState({
        bigScreen: false,
      })
    }
  }

  render() {
    const { bigScreen } = this.state
    return (
      <PizzeriaLayoutDiv>
        <PizzeriaHeader bigScreen={bigScreen} />
        <PizzeriaBody bigScreen={bigScreen} />
        <PizzeriaFooter />
      </PizzeriaLayoutDiv>
    )
  }
}

export default PizzeriaLayout
