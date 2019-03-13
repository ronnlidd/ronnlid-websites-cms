import React, { Component } from "react"
import styled from "styled-components"
import { Link } from "gatsby"

export const IndexPageMenu = styled.ul`
  list-style: none;
  border: 1px solid black;
  padding: 10px;
  background: #f5f5f1;
  border-radius: 10px;
  margin: 1rem auto;

  @media screen and (min-width: 1000px) {
    float: left;
    position: relative;
    right: 40px;
  }

  & h2 {
    color: black;
    border-bottom: 1px solid black;
    padding-bottom: 0.5rem;
  }

  & li {
    & a {
      margin: 23px;
      text-decoration: none;
      font-family: sans-serif;
      padding: 3px;
      transition: box-shadow 0.2s;

      & :hover {
        border-bottom: none;
        color: #252;
        box-shadow: 2px 4px 2px black;
      }
    }
  }
`

export class IndexMenu extends Component {
  render() {
    return (
      <IndexPageMenu id="homeNav">
        <li>
          <h2
          // style={{
          //   fontFamily: "serif",
          // }}
          >
            Go to
          </h2>
        </li>
        <li>
          <Link to="/#about">About</Link>
        </li>
        <li>
          <Link to="/#value-proposition">Value Proposition</Link>
        </li>
        <li>
          <Link to="/#faq">FAQ</Link>
        </li>
      </IndexPageMenu>
    )
  }
}

export default IndexMenu
