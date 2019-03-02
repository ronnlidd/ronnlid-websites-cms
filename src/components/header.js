import { Link } from "gatsby"
import PropTypes from "prop-types"
import React, { Component } from "react"
import styled from "styled-components"
import Img from "gatsby-image"
import ReactDOM from "react-dom"

const HeaderWrapper = styled.div`
  background: purple;
  margin-bottom: 1.45rem;
  overflow: hidden;
  position: relative;
  height: ${({ isHome }) => (isHome ? "40vh" : "20vh")};
`
const HeaderContainer = styled.div`
  margin: 0 auto;
  max-width: 960px;
  padding: 1.45rem 1.0875rem;
  z-index: 2;
  position: relative;
`

export default class Header extends Component {
  componentDidMount = (prevProps, prevState) => {
    const { location } = this.props
    if (location.pathname === "/") {
      this.wrapper.animate([{ height: "20vh" }, { height: "40vh" }], {
        duration: 200,
        fill: "forwards",
        easing: "linear",
        iterations: 1,
      })
    } else {
      this.wrapper.animate([{ height: "40vh" }, { height: "20vh" }], {
        duration: 200,
        fill: "forwards",
        easing: "linear",
        iterations: 1,
      })
    }
  }

  render() {
    const { siteTitle, background } = this.props

    return (
      <header>
        <HeaderWrapper
          ref={wrapper => (this.wrapper = ReactDOM.findDOMNode(wrapper))}
          isHome={this.props.location.pathname === "/"}
        >
          <HeaderContainer>
            <Link
              to="/"
              style={{
                color: `white`,
                textDecoration: `none`,
              }}
            >
              <h1>{siteTitle}</h1>
            </Link>
            <nav>
              <ul>
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/about">About</Link>
                </li>
              </ul>
            </nav>
          </HeaderContainer>

          <Img
            fluid={background}
            style={{
              position: "absolute",
              left: 0,
              top: 0,
              width: "100%",
              height: "100%",
              opacity: 0.5,
            }}
          />
        </HeaderWrapper>
      </header>
    )
  }
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}
