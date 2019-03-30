import React, { Component } from "react"
import {
  DesktopNavbar,
  DesktopUl,
  DesktopLi,
} from "../../styledComponents/styledDesktopComponents"
import { Link } from "gatsby"

export class DesktopPizzeriaMenu extends Component {
  render() {
    return (
      <DesktopNavbar>
        <DesktopUl>
          <Link to="/pizzeria-prototyp#meny">
            <DesktopLi>MENY</DesktopLi>
          </Link>
          <Link to="/pizzeria-prototyp#bestall">
            <DesktopLi>BESTÄLL</DesktopLi>
          </Link>
          <Link to="/pizzeria-prototyp#plats">
            <DesktopLi>PLATS</DesktopLi>
          </Link>
        </DesktopUl>
      </DesktopNavbar>
    )
  }
}

export default DesktopPizzeriaMenu
