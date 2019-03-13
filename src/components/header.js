import { Link } from "gatsby"
import React, { Component } from "react"
import styled from "styled-components"
import Img from "gatsby-image"
import Helmet from "react-helmet"
import Toggle from "../components/toggle"

const HeaderWrapper = styled.header`
  background: linear-gradient(-130deg, black, #f7f7f7, #221f1f);
  margin-bottom: 1.45rem;
  overflow: hidden;
  position: relative;
  border-bottom: 0.35rem ridge gold;
  box-shadow: 0 4px 4px rgb(0, 0, 0);
  border-bottom-left-radius: 5rem;

  .ronnlidWebsitesLogo {
    width: 150px;
    margin-left: 1rem;
  }

  @media screen and (min-width: 1000px) {
    margin: 0 auto;
    padding: 0;
    border: none;
    background: none;
    box-shadow: none;
    .background {
      display: none;
    }

    & .ronnlidWebsitesLogo {
      width: 24vw;
      margin: 0 auto;
    }
  }
`
const HeaderContainer = styled.div`
  margin: 0 auto;
  padding: 0.85rem 0;
  z-index: 2;
  position: relative;
`

const MainNav = styled.nav`
.slideInMenu {
  animation: .3s linear 0s 1 slideInFromLeft;
}  

@keyframes slideInFromLeft {
  0% {
      transform: translateX(110%);
  }
  100% {
      transform: translateX(20%);
  }
}

ul {
    float: right;
    display: flex;
    align-items: flex-start;
    justify-items: flex-start;
    list-style: none;
    padding: 6px 6px 6px 0;
    border: 1px solid gold;
    border-right: none;
    background: #221f1f;
    max-width: 100%;
    box-shadow: 0px 6px 10px 0px rgba(0, 0, 0, 0.75);
    font-family: sans-serif;
    margin-top: 1rem;
    border-bottom-left-radius: 2.5rem;
    border-top-left-radius: 2.5rem;

.fa-lock-open {
  color: green;
  &:hover {
    color: darkgreen;
  }

}

    li {
      padding: 2px;
      border-bottom: 2px ridge gold;
      margin-left: 20px;
      -webkit-transition: border-bottom 0.3s;
      transition: border-bottom 0.3s;
      color: red;
      :hover {
        cursor: pointer;
        color: darkred;
        a {
          color: gold;

        }
        border-bottom-color: black;
      }

      a {
        text-decoration: none;
        color: white;
       
      }
    }
    .buyButton {
      border-bottom-color: white;
      box-shadow: 0px 10px 12px 4px rgba(255, 255, 255, 1)
      border-right: 14px solid gold;
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

  @media screen and (max-width: 450px) {
    & ul {
      max-height: 3rem;
      & li {
        visibility: hidden;
        & span { display: none;
        }
          & i {
          visibility: visible;
          padding-bottom: .5rem;
          border-bottom: 1px solid gold;
          margin: 0 -.3rem;

          & :hover {
            border-bottom: 1px solid black;    
          }
        }
      }
    } 
  }
`

export default class Header extends Component {
  render() {
    const { background, logo } = this.props

    return (
      <HeaderWrapper>
        <Helmet>
          <link
            rel="stylesheet"
            href="https://use.fontawesome.com/releases/v5.7.2/css/all.css"
            integrity="sha384-fnmOCqbTlWIlj8LyTjo7mOUStjsKC4pOpQbqyi7RrhN7udi9RwhKkMHpvLbHG9Sr"
            crossorigin="anonymous"
          />
        </Helmet>
        <HeaderContainer>
          <Img fluid={logo} className="ronnlidWebsitesLogo" />
          <Toggle>
            {({ on, toggle }) => (
              <>
                {on ? (
                  <MainNav>
                    <ul className="slideInMenu">
                      <li onClick={toggle}>
                        <i
                          title="Toggle to close"
                          className="fas fa-lock-open"
                        />
                      </li>
                      <li className="buyButton">
                        <Link to="/buy">
                          <i title="Buy" className="fas fa-shopping-cart" />{" "}
                          <span>Buy</span>
                        </Link>
                      </li>
                      <li>
                        <Link to="/">
                          <i title="Home" className="fas fa-home" />{" "}
                          <span>Home</span>
                        </Link>
                      </li>
                      <li>
                        <Link to="/posts">
                          <i title="Blog" className="fas fa-blog" />{" "}
                          <span>Blog</span>
                        </Link>
                      </li>
                      <li>
                        <Link to="/contact">
                          <i title="Contact" className="fas fa-envelope" />{" "}
                          <span>Contact</span>
                        </Link>
                      </li>
                    </ul>
                  </MainNav>
                ) : (
                  <MainNav>
                    <ul>
                      <li onClick={toggle}>
                        <i title="Toggle to open" className="fas fa-lock" />
                      </li>
                    </ul>
                  </MainNav>
                )}
              </>
            )}
          </Toggle>
        </HeaderContainer>

        <Img
          fluid={background}
          className="background"
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
    )
  }
}
