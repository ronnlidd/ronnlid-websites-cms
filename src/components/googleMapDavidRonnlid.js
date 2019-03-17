import React, { Component } from "react"
import GoogleMapReact from "google-map-react"

const AnyReactComponent = ({ text }) => <div>{text}</div>

class GoogleMapDavidRonnlid extends Component {
  static defaultProps = {
    center: {
      lat: 59.95,
      lng: 30.33,
    },
    zoom: 11,
  }

  render() {
    return (
      // Important! Always set the container height explicitly
      <div style={{ height: "100vh", width: "100%", overflowX: "scroll" }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: "AIzaSyD1DlysJyJDaLPxP7ZnSJJ3kF83BvgkU9s" }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
          <AnyReactComponent
            lat={59.955413}
            lng={30.337844}
            text={"Ronnlid Websites"}
          />
        </GoogleMapReact>
      </div>
    )
  }
}

export default GoogleMapDavidRonnlid
