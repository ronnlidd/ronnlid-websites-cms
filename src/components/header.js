import { Link } from "gatsby"
import React, { Component } from "react"
import styled from "styled-components"
import Img from "gatsby-image"

const HeaderWrapper = styled.div`
  background: #586789;
  margin-bottom: 1.45rem;
  overflow: hidden;
  position: relative;
  height: "18vh";
  border-bottom: 0.25rem ridge gold;
  box-shadow: 0 4px 4px rgb(0, 0, 0);
`
const HeaderContainer = styled.div`
  margin: 0 auto;
  padding: 0.85rem 0;
  z-index: 2;
  position: relative;
`

const MainNav = styled.nav`
  ul {
    float: right;
    display: flex;
    align-items: flex-start;
    justify-items: flex-start;
    list-style: none;
    padding: 6px 6px 6px 0;
    border: 1px solid gold;
    border-right: none;
    background: black;

    li {
      padding: 2px;
      border-bottom: 2px ridge gold;
      margin-left: 20px;
      box-shadow: 0 1px 1px rgb(0, 0, 0);
      -webkit-transition: border-bottom 0.3s;
      transition: border-bottom 0.3s;
      :hover {
        a {
          color: gold;
        }
        border-bottom: none;
      }

      a {
        text-decoration: none;
        color: white;
      }
    }
    .buyButton {
      border-bottom-color: white;
      & a {
        color: gold;
      }
      & :hover {
        a {
          color: lightblue;
        }
      }
    }
  }
`

export default class Header extends Component {
  render() {
    const { background, logo } = this.props

    return (
      <header>
        <HeaderWrapper>
          <HeaderContainer>
            <Link
              to="/"
              style={{
                color: `white`,
                textDecoration: `none`,
              }}
            >
              <Img
                fluid={logo}
                style={{
                  width: "150px",
                  marginLeft: "1rem",
                }}
              />{" "}
            </Link>
            <MainNav>
              <ul>
                <li className="buyButton">
                  <Link to="/buy">Buy</Link>
                </li>
                <li>
                  <Link to="/">Home</Link>
                </li>

                <li>
                  <Link to="/posts">Blog</Link>
                </li>
                <li>
                  <Link to="/contact">Contact</Link>
                </li>
              </ul>
            </MainNav>
          </HeaderContainer>

          <Img
            fluid={background}
            style={{
              position: "absolute",
              left: 0,
              top: 0,
              width: "100%",
              height: "100%",
              opacity: 0.25,
            }}
          />
        </HeaderWrapper>
      </header>
    )
  }
}
