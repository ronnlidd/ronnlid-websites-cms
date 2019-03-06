import React, { Component } from "react"
import styled from "styled-components"
import { Link } from "gatsby"

export const IndexPageMenu = styled.ul`
position absolute;
top: 6vw;
right 28vw;
list-style: none;
color: white;
padding: 1rem;
border: 1px solid blue;
border-radius: 1rem;
box-shadow: 0 3px 3px black;
& li {
    & a {
        color: black;
        margin: 23px;
        text-decoration: none;
        font-family: sans-serif;
        border-bottom: 3px solid blue;
    }

    & :hover {
        & a {
            border-bottom: none;
        }
    }
}

@media screen and (max-width:999px) {
    position: static;
    li {
    }
}
`

export class IndexMenu extends Component {
  render() {
    return (
      <IndexPageMenu>
        <li>
          <h2
            style={{
              fontFamily: "serif",
              color: "black",
              borderBottom: ".4px solid black",
            }}
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
