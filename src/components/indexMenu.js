import React, { Component } from "react"
import styled from "styled-components"
import { Link } from "gatsby"

export const IndexPageMenu = styled.ul`
  list-style: none;
  border: 1px solid #fff;
  padding: 10px;
  background: #3a506b;
  border-radius: 10px;
  margin: 1rem auto;
  box-shadow: 0 1px 1px #0b132b;

  & h2 {
    color: #fff;
    border-bottom: 1px solid #fff;
    padding-bottom: 0.5rem;
  }

  & li {
    & a {
      margin: 23px;
      text-decoration: none;
      font-family: sans-serif;
      padding: 3px;
      transition: box-shadow 0.2s;
      color: #fff;

      & :hover {
        border-bottom: none;
        color: #5bc0be;
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
          <h2>Go to</h2>
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
