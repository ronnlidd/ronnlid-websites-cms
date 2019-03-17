import React from "react"
import "../styles/footer.css"
import Helmet from "react-helmet"
import Img from "gatsby-image"
import styled from "styled-components"
import NewsletterSignup from "../components/newsletterSignup"

const RonnlidWebsitesCopyright = styled.div`
  display: flex;
  align-items: center;
`

export default class Footer extends React.Component {
  constructor() {
    super()

    this.state = {
      year: new Date().getFullYear(),
    }
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick() {
    document.body.scrollTop = 0
    document.documentElement.scrollTop = 0
  }

  render() {
    const { imgSrc } = this.props

    return (
      <footer>
        <button className="backToTop" onClick={this.handleClick}>
          BACK TO TOP
        </button>
        <Helmet>
          <link
            rel="stylesheet"
            href="https://use.fontawesome.com/releases/v5.7.2/css/all.css"
            integrity="sha384-fnmOCqbTlWIlj8LyTjo7mOUStjsKC4pOpQbqyi7RrhN7udi9RwhKkMHpvLbHG9Sr"
            crossorigin="anonymous"
          />
        </Helmet>
        <div className="socialMediaIcons">
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
            href="https://twitter.com/RonnlidW"
            target="_blank"
            rel="noopener noreferrer"
            title="Twitter"
          >
            <i className="fab fa-twitter fa-2x" />
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
        </div>
        <RonnlidWebsitesCopyright>
          <Img
            fluid={imgSrc}
            style={{
              width: "10vw",
              marginLeft: ".2rem",
            }}
          />
          <p className="copyRightP">
            &copy; {this.state.year}, Ronnlid Websites, David Rönnlid
          </p>
        </RonnlidWebsitesCopyright>
        <NewsletterSignup />
      </footer>
    )
  }
}
