import React, { Component } from "react"
import myVideo from "../video/logointro.mp4"
import Img from "gatsby-image"

export class LogoVideo extends Component {
  constructor() {
    super()

    this.state = {
      displayVideoState: true,
    }

    this.handleVideoEnd = this.handleVideoEnd.bind(this)
  }

  handleVideoEnd() {
    this.setState({
      displayVideoState: false,
    })
  }

  render() {
    const { displayVideoState } = this.state
    const { logo } = this.props
    return (
      <>
        {displayVideoState ? (
          <video autoPlay muted onEnded={this.handleVideoEnd} width="100%">
            <source src={myVideo} type="video/mp4" />
            <p>Video logo could not load.</p>
          </video>
        ) : (
          <Img fluid={logo} className="ronnlidWebsitesLogo" />
        )}
      </>
    )
  }
}

export default LogoVideo
