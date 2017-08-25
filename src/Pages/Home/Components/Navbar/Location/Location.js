import React, { Component } from 'react';

import './_location.scss';

class Location extends Component {

  constructor (props) {
    super (props);
  }

  render () {
    return (
      <div className='location-div content-container'>
      { this.renderNowLeasing() }
      </div>
    )
  }

  renderNowLeasing () {
    const address = this.props.community.location.address.raw
      .split('.', 2);

    return (
      <div className="address-info-div" id="location">
        <div className="now-leasing-div">
          <p> Now Leasing </p>
          <div className="address-div">
            <div className="map-marker-div">
              <i className="fa fa-map-marker fa-fw" />
            </div>
            <div className="street-address-div">
              <div className ="address-one"> { address[0] } </div>
              <div className="address-two"> { address[1] } </div>
            </div>
          </div>
        </div>
        <div className="office-hours-div">
          <div className="office-hours-content-container">
            <p> Office Hours </p>
            <div className="clock-container-div">
              <div className="clock-marker-div">
                <i className="fa fa-clock-o fa-fw" />
              </div>
              <div className="hours-info-div">
                <p> Mon-Fri 9am-5pm </p>
              </div>
            </div>
          </div>
        </div>
        <div className="phone-icon-div">
          <div className="phone-content-container">
            <p> Questions? </p>
            <div className="phone-container-div">
              <div className="phone-marker-div">
                <i className="fa fa-mobile-phone fa-fw" />
              </div>
              <div className="phone-ptag-container">
                <p className="phone-number-div"> (415)-765-9898 </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }

}

export default Location;
