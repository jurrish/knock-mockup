import React, { Component } from 'react';
import { GOOGLE_API_KEY } from '../../../../../../config.js';
import GoogleMapReact from 'google-map-react';
import MapMarker from './MapMarker/MapMarker';
import InfoWindow from './InfoWindow/InfoWindow.js';

import './InfoWindow/_infoWindow.scss';
import './_map.scss';

class CommunityGoogleMap extends React.Component {
  render() {
    const mapCenter = {
      lat: 37.774929,
      lng: -122.419416,
    };

    const MAP_OPTIONS = {
      scrollwheel: false,
    }

    const information = {
      name: this.props.community.location.name
    }

    return (
      <div className="map-div">
        <GoogleMapReact options= { MAP_OPTIONS } defaultCenter={ mapCenter } defaultZoom={ 17 }>
          <MapMarker lat={ mapCenter.lat } lng={ mapCenter.lng } />
        </GoogleMapReact>

        <div className="community-info-window">
          <InfoWindow name={ information.name }> </InfoWindow>
        </div>
      </div>
    );
  }
}

export default CommunityGoogleMap;
