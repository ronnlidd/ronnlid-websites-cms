import React, { Component } from "react"
import "../styles/desktopHeader.css"
import { Link } from "gatsby"

export default class DesktopNav extends Component {
  render() {
    return (
      <div className="desktopHeader">
        <ul>
          <li>
            <Link to="/">
              <i title="Home" className="fas fa-home" /> <span>HOME</span>
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
