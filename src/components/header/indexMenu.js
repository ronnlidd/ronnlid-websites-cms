import React, { Component } from "react"
import styled from "styled-components"
import { Link } from "gatsby"

export const IndexPageMenu = styled.ul`
  transition: height 500ms ease;
  list-style: none;
  border: none;
  background: #3a506b;
  border-radius: 0;
  // width: 100%;
  margin-left: 0.4rem;

  & li {
    border-right: 1px solid white;
    & a {
      text-decoration: none;
      font-family: sans-serif;
      transition: box-shadow 0.2s;
      color: #fff;

      & :hover {
        border-bottom: none;
        color: #5bc0be;
      }
    }
  }
`

export class IndexMenu extends Component {
  render() {
    return (
      <IndexPageMenu id="homeNav">
        <li>
          <Link to="/#value-proposition">
            <i className="fas fa-money-bill-wave" /> Value Proposition
          </Link>
        </li>
        <li>
          <Link to="/#about">
            <i className="fas fa-info" /> About
          </Link>
        </li>
        <li>
          <Link to="/#faq">
            <i className="fas fa-question" /> FAQ
          </Link>
        </li>
      </IndexPageMenu>
    )
  }
}

export default IndexMenu
