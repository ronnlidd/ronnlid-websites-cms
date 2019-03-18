import React, { Component } from "react"
import GoogleMapReact from "google-map-react"

const RonnlidWebsitesPin = ({ text }) => (
  <div
    style={{
      color: "#fff",
      background: "#0b132b",
      border: "1px solid #fff",
      padding: "15px 10px",
      display: "inline-flex",
      textAlign: "center",
      alignItems: "center",
      justifyContent: "center",
      borderRadius: "1rem",
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
    zoom: 12,
  }

  render() {
    return (
      <>
        <h1>Plats</h1>
        <h2>
          Ronnlid Websites är ett svenskt företag, om du bor i Stockholm kan vi
          ha ett personligt möte på plats av ditt val. Här befinner företaget
          sig. Självklart går det att sköta all kontakt digitalt.
        </h2>
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
            bootstrapURLKeys={{
              key: "AIzaSyD1DlysJyJDaLPxP7ZnSJJ3kF83BvgkU9s",
            }}
            defaultCenter={this.props.center}
            defaultZoom={this.props.zoom}
          >
            <RonnlidWebsitesPin
              lat={59.32955}
              lng={18.04477}
              text={"Ronnlid Websites"}
            />
          </GoogleMapReact>
        </div>
      </>
    )
  }
}

export default GoogleMapDavidRonnlid
