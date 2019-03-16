import React, { Component } from "react"
import styled from "styled-components"
import Toggle from "../components/toggle"
import { Link } from "gatsby"

const MainNav = styled.nav`
overflow: hidden;

ul {
  display: none;
}

.slideInMenu {
  animation: .3s linear 0s 1 slideInFromLeft;
}  

@media screen and (max-width: 1000px) {

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
    border: 1px solid #fff;
    border-right: none;
    background: #0b132b;
    max-width: 100%;
    box-shadow: 0px 6px 10px 0px rgba(0, 0, 0, 0.75);
    font-family: sans-serif;
    margin-top: 1rem;
    border-bottom-left-radius: 2.5rem;
    border-top-left-radius: 2.5rem;

    li {
      padding: 2px;
      border-bottom: 2px ridge #fff;
      margin-left: 20px;
      -webkit-transition: border-bottom 0.3s;
      transition: border-bottom 0.3s;
      color: #5bc0be;
      & :hover {
        cursor: pointer;
        color: #3a506b;
        
        & a {
          color: #3a506b;
        }
        border-bottom-color: #0b132b;
      }

      & a {
        text-decoration: none;
        color: #fff;
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
          border-bottom: 1px solid #fff;
          margin: 0 -.3rem;

          & :hover {
            border-bottom: 1px solid #3a506b;    
          }
        }
      }
    } 
  }
}

.noBorderBottom {
  border-bottom: none;
  margin-top: 3px;

  & :hover {
    border-bottom: none;
  }
}

  .extraMarginTop {
    margin-top: 7px;
  }
`

export class MobileNav extends Component {
  render() {
    return (
      <Toggle>
        {({ on, toggle }) => (
          <>
            {on ? (
              <MainNav>
                <ul className="slideInMenu">
                  <li onClick={toggle}>
                    <i
                      title="Toggle to close"
                      className="fas fa-times noBorderBottom extraMarginTop"
                    />
                  </li>
                  <li>
                    <Link to="/">
                      <i title="Home" className="fas fa-home" />{" "}
                      <span>HOME</span>
                    </Link>
                  </li>
                  <li className="buyButton">
                    <Link to="/buy">
                      <i title="Buy" className="fas fa-shopping-cart" />{" "}
                      <span>BUY</span>
                    </Link>
                  </li>
                  <li>
                    <Link to="/posts">
                      <i title="Blog" className="fas fa-blog" />{" "}
                      <span>BLOG</span>
                    </Link>
                  </li>
                  <li>
                    <Link to="/contact">
                      <i title="Contact" className="fas fa-envelope" />{" "}
                      <span>CONTACT</span>
                    </Link>
                  </li>
                </ul>
              </MainNav>
            ) : (
              <MainNav>
                <ul>
                  <li onClick={toggle} className="noBorderBottom">
                    <i
                      title="Toggle to open"
                      className="fas fa-bars noBorderBottom"
                    />
                  </li>
                </ul>
              </MainNav>
            )}
          </>
        )}
      </Toggle>
    )
  }
}

export default MobileNav
