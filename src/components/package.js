import React, { Component } from "react"
import Img from "gatsby-image"
import styled from "styled-components"
import { BasicButton } from "./styledComponents"

const PackageWrapper = styled.div`
  border: 1px solid black;
  padding: 1rem;
  margin-bottom: 1rem;
  width: 30%;
  box-shadow: 0px 3px 3px black;

  & ul {
    list-style: none;
    width: 100%;
    margin: 1rem auto;
    & li {
      padding: 1rem;
      background: black;
      color: white;
    }
  }
`

export class Package extends Component {
  render() {
    const { name, imgSrc, shortDescription, listItems } = this.props
    return (
      <PackageWrapper>
        <h2>The {name} package</h2>
        <p>{shortDescription}</p>
        <Img style={{ width: "100%", margin: "0 auto" }} fluid={imgSrc} />
        <ul>
          {listItems.map(item => (
            <li>{item}</li>
          ))}
        </ul>
        <BasicButton>Buy</BasicButton>
      </PackageWrapper>
    )
  }
}

export default Package
