import React, { Component } from "react"
import GoogleMapReact from "google-map-react"

const AnyReactComponent = ({ text }) => (
  <div
    style={{
      color: "white",
      background: "grey",
      padding: "15px 10px",
      display: "inline-flex",
      textAlign: "center",
      alignItems: "center",
      justifyContent: "center",
      borderRadius: "100%",
      transform: "translate(-50%, -50%)",
    }}
  >
    {text}
  </div>
)

class GoogleMapDavidRonnlid extends Component {
  static defaultProps = {
    center: {
      lat: 59.33,
      lng: 18.04,
    },
    zoom: 10,
  }

  render() {
    return (
      <div
        style={{
          height: "400px",
          width: "100%",
          overflowX: "scroll",
          margin: "1rem auto",
          borderRadius: "1rem",
        }}
      >
        <GoogleMapReact
          bootstrapURLKeys={{ key: "AIzaSyD1DlysJyJDaLPxP7ZnSJJ3kF83BvgkU9s" }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
          <AnyReactComponent
            lat={59.32955}
            lng={18.04477}
            text={"Ronnlid Websites"}
          />
        </GoogleMapReact>
      </div>
    )
  }
}

export default GoogleMapDavidRonnlid
