import React, { Component } from "react"
import Helmet from "react-helmet"
import { Player } from "video-react"

export class LogoVideo extends Component {
  render() {
    return (
      <>
        <Helmet>
          <link
            rel="stylesheet"
            href="https://video-react.github.io/assets/video-react.css"
          />
        </Helmet>
        <Player>
          <source src="../logointro.mp4" />
        </Player>
      </>
    )
  }
}

export default LogoVideo
