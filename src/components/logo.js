import React from "react"
import Img from "gatsby-image"

function Logo(props) {
  return (
    <>
      <Img fluid={props.logoImg} className="ronnlidWebsitesLogo" />
    </>
  )
}

export default Logo
