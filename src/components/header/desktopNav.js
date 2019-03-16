import React, { Component } from "react"
import "../../styles/desktopHeader.css"
import { Link } from "gatsby"
import IndexMenu from "./indexMenu"

export default class DesktopNav extends Component {
  constructor(props) {
    super(props)

    this.state = {
      hovering: false,
    }

    this.onHovering = this.onHovering.bind(this)
  }

  onHovering() {
    this.setState({
      hovering: true,
    })
  }

  render() {
    const { hovering } = this.state
    return (
      <div className="desktopHeader">
        <ul>
          <li onMouseOver={this.onHovering}>
            <Link to="/">
              <i title="Home" className="fas fa-home" /> <span>HOME</span>
            </Link>
            {hovering ? <IndexMenu /> : null}
          </li>

          <li className="buyButton">
            <Link to="/buy">
              <i title="Buy" className="fas fa-shopping-cart" />{" "}
              <span>BUY</span>
            </Link>
          </li>
          <li>
            <Link to="/posts">
              <i title="Blog" className="fas fa-blog" /> <span>BLOG</span>
            </Link>
          </li>
          <li className="contact">
            <Link to="/contact">
              <i title="Contact" className="fas fa-envelope" />{" "}
              <span>CONTACT</span>
            </Link>
          </li>
        </ul>
      </div>
    )
  }
}
