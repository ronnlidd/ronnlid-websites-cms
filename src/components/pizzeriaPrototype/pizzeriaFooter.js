import React, { Component } from "react"
import styled from "styled-components"

const PizzeriaFooterDiv = styled.div`
  border-bottom-left-radius: 0.5rem;
  border-bottom-right-radius: 0.5rem;
  background: black;
  postition: absolute;
  bottom: 0;
`

export class PizzeriaFooter extends Component {
  render() {
    return <PizzeriaFooterDiv>Footer</PizzeriaFooterDiv>
  }
}

export default PizzeriaFooter
