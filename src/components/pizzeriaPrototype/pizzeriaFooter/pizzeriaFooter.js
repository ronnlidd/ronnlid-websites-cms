import React, { Component } from "react"
import styled from "styled-components"
import ScrollButton from "./scrollToTop"

const PizzeriaFooterDiv = styled.div`
  border-bottom-left-radius: 0.5rem;
  border-bottom-right-radius: 0.5rem;
  background: ${props => props.theme.fg};
  postition: absolute;
  bottom: 0;
  padding: 1rem;
  border-top: 4px ridge ${props => props.theme.bgComp};
`

const SocialMediaIcons = styled.div`
  display: flex;
  width: 100%;
  flex-direction: row;
  justify-content: space-evenly;
  height: 7vh;

  & a {
    color: ${props => props.theme.fgComp};
    transition: color 0.6s;

    &:hover {
      color: ${props => props.theme.bg};
    }
  }
`

export class PizzeriaFooter extends Component {
  constructor() {
    super()

    this.state = {
      year: new Date().getFullYear(),
    }
  }
  render() {
    return (
      <PizzeriaFooterDiv>
        <SocialMediaIcons>
          <a
            href="https://www.yelp.se/biz/david-r%C3%B6nnlid-stockholm"
            target="_blank"
            rel="noopener noreferrer"
            title="Yelp"
          >
            <i className="fab fa-yelp fa-2x" />
          </a>
          <a
            href="https://www.facebook.com/RonnlidWebsites"
            target="_blank"
            rel="noopener noreferrer"
            title="Facebook"
          >
            <i className="fab fa-facebook fa-2x" />
          </a>
          <a
            href="https://onlinepizza.se/"
            target="_blank"
            rel="noopener noreferrer"
            title="Onlinepizza"
          >
            <i className="fas fa-pizza-slice fa-2x" />
          </a>
          <a
            href="https://www.linkedin.com/company/ronnlidwebsites"
            target="_blank"
            rel="noopener noreferrer"
            title="LinkedIn"
          >
            <i className="fab fa-linkedin fa-2x" />
          </a>
          <a
            href="mailto:david@ronnlidwebsites.com"
            rel="noopener noreferrer"
            target="_blank"
            title="E-mail"
          >
            <i className="fas fa-envelope fa-2x" />
          </a>
        </SocialMediaIcons>
        <p className="copyRightP">
          &copy; {this.state.year}, Ronnlid Websites, David Rönnlid
        </p>
        <ScrollButton scrollStepInPx="50" delayInMs="16.66" />
      </PizzeriaFooterDiv>
    )
  }
}

export default PizzeriaFooter
