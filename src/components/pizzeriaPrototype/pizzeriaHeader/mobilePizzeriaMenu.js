import React, { Component } from "react"
import {
  StyledMobileNav,
  StyledMobileUl,
  StyledMobileLi,
} from "../../styledComponents/mobileStyledComponents"
import { Link } from "gatsby"

export class MobilePizzeriaMenu extends Component {
  state = {
    menuOpen: false,
  }

  toggleMenu = () => {
    this.setState(prevState => ({
      menuOpen: !prevState.menuOpen,
    }))
  }

  render() {
    const { menuOpen } = this.state
    return (
      <StyledMobileNav>
        {menuOpen ? (
          <StyledMobileUl>
            <StyledMobileLi onClick={this.toggleMenu}>
              <i className="fas fa-times" />
            </StyledMobileLi>
            <Link to="/pizzeria-prototyp#meny">
              <StyledMobileLi>MENY</StyledMobileLi>
            </Link>
            <Link to="/pizzeria-prototyp#bestall">
              <StyledMobileLi>BESTÄLL</StyledMobileLi>
            </Link>
            <Link to="/pizzeria-prototyp#plats">
              <StyledMobileLi>PLATS</StyledMobileLi>
            </Link>
          </StyledMobileUl>
        ) : (
          <StyledMobileUl>
            <StyledMobileLi onClick={this.toggleMenu}>
              <i className="fas fa-bars" />
            </StyledMobileLi>
          </StyledMobileUl>
        )}
      </StyledMobileNav>
    )
  }
}

export default MobilePizzeriaMenu
