import React, { Component } from "react"
import GoogleMapReact from "google-map-react"

const AnyReactComponent = ({ text }) => <div>{text}</div>

class GoogleMapDavidRonnlid extends Component {
  static defaultProps = {
    center: {
      lat: 59.32,
      lng: 18.04,
    },
    zoom: 11,
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
