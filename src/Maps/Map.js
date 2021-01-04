import React from "react";
import { GoogleMap, Marker, InfoWindow } from "react-google-maps";
import markerIcon from "../img/location2.png";
import RezervationForm from "../Forms/RezervationForm";

const DATABASE_URL = 'https://dancing-app-77d2a.firebaseio.com'

class Map extends React.Component {

  state ={
    selectedPlace: null,
    offersList: []
  }

  fetchOffers = () => {
    fetch(`${DATABASE_URL}/offers.json`)
    .then(r => r.json())
    .then(data => {
      if (!data) {
        this.setState({
          offersList: []
        })
      } else {
        const formattedData = Object.keys(data)
        .map(key => {
          return {
            id: key,
            ...data[key]
          }
        })
        console.log(formattedData);
        this.setState({
          offersList: formattedData
        })
      }
    })
  }

  componentDidMount() {
    this.fetchOffers()
  }

  
  render(){
    return (
      <GoogleMap
        defaultZoom={6.8}
        defaultCenter={{ lat: 51.919437, lng: 19.145136 }}
      >
        {this.state.offersList.map(place => (
          <Marker
            key={place.id}
            position={{
              lat: place.location.lat,
              lng: place.location.lng 
            }}
            onClick={() => {
              this.setState({
                selectedPlace: place
              })
            }}
            icon={{
              url: markerIcon,
              scaledSize: new window.google.maps.Size(47, 45)
            }}
          />
        ))}
  
        {this.state.selectedPlace && (
          <InfoWindow
            onCloseClick={() => {
              this.setState({
                selectedPlace: null
              })
            }}
            position={{
              lat: Number(this.state.selectedPlace.location.lat),
              lng: Number(this.state.selectedPlace.location.lng)
            }}
          >
            <div>
              <h4>Kajak</h4>
              <RezervationForm/>
            </div>
          </InfoWindow>
        )}
      </GoogleMap>
    );

  }  
    
}

export default Map;