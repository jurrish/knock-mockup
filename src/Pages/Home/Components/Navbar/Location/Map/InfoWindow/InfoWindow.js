import React, { Component } from 'react';

class InfoWindow extends Component {



  render () {
    return (
      <div className="info-window-div">
        { this.props.name }
      </div>
    )
  }
}

export default InfoWindow;
