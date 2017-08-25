import React, { Component } from 'react';

class MapMarker extends Component {
  render () {
    return (
      <div className="map-marker" lat={ this.props.lat } lng={ this.props.lng }>
        <i className="fa fa-map-marker fa-fw fa-2x" />
      </div>
    )
  }
}

export default MapMarker;
