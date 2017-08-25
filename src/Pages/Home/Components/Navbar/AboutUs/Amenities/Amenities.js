import React, { Component } from 'react';

import './_amenities.scss';


//TODO: could clean this up to have each function call be its own component
class Amenities extends Component {
  render () {
    return (
      <div className="amenities-div content-container">
       { this.renderAmenities() }
       { this.renderParking() }
       { this.renderPets() }
       { this.renderUtilities() }
       { this.renderLaundry() }
       { this.renderLeasingDetails() }
      </div>
    )
  }

  renderAmenities () {
    const availableAmenities = this.props.community.amenities.additional
      .filter(amenity => amenity.available)
      .map(amenity => amenity.name)
      .join(', ');

    return (
      <div>
       <div className="amenity-header">
        <i className="fa fa-bell fa-fw" />
        Amenities
       </div>
       <p className="amenity-contents">
          { availableAmenities }
       </p>
      </div>
    )
  }

  renderParking () {
    const parkingAvailability = this.props.community.parking.types
    .filter(typesAvailable => typesAvailable.name) //if they have a name prop
    .map(typesAvailable => typesAvailable.name) //map to retrieve name
    .join(', ');

    return (
      <div>
        <div className="parking-header">
          <i className="fa fa-car fa-fw" /> Parking
        </div>
        <p className="parking-contents"> Parking type: { parkingAvailability } </p>
      </div>
    )

  }
  // pets last
  renderPets () {
    let petsAllowed = this.props.community.pets.allowed
    let trueKeys = Object.keys(petsAllowed);
    let filteredPets = trueKeys.filter(key => petsAllowed[key])
      .join(', ')
      .replace(/_/g, ' ');

    if (!filteredPets) {
      return (
        <div>
          <p> We do not accept pets </p>
        </div>
      )
    }

    return (
      <div>
        <div className="pets-header">
          <i className="fa fa-paw fa-fw" /> Pets
        </div>
        <p className="pets-contents"> Pets Allowed : { filteredPets } </p>
      </div>
    )

  }

  renderUtilities () {

    const utilities = this.props.community.utilities.types
      .filter(utilities => utilities.included)
      .map(utilities => utilities.name)

      if (utilities.length === 0) {
        return null; //return what we want rendered. we can return jsx here
      }

      return (
        <div>
          <div className="utilities-header">
            <i className="fa fa-lightbulb-o fa-fw" /> Covered Utilities
          </div>
          <p className="utilities-contents"> Included in utilities cost: { utilities } </p>
        </div>
      )
  }

  renderLaundry () {

    const laundry = this.props.community.laundry.types
      .filter(laundry => laundry.available)
      .map(laundry => laundry.name)

      if (laundry.length === 0) {
        return null
      }

      return (
        <div>
          <div className="laundry-header">
            <i className="fa fa-tint fa-fw" />Laundry
          </div>
          <p className="laundry-contents"> Laundry type: { laundry } </p>
        </div>
      )
      console.log(laundry);


  }

  renderLeasingDetails () {

    const leasingFee = this.props.community.leasing.application.fee;
    const deposit = this.props.community.leasing.terms.deposit;

    //put a check here to see if any apartments are even available!
    const leasingLengths = this.props.community.leasing.terms.leaseLengths
      .filter(leaseLengths => leaseLengths.isAvailable)
      .map(leaseLengths => leaseLengths.leaseLength + ' months')
      .join(', ');


    if (!leasingFee) {
      return null;
    }

    return (
      <div className="leasing-header">
        <i className="fa fa-check-circle-o fa-fw" /> Leasing Details
        <div className="leasing-details">
          <div className="leasing-options-container">
            <div> Leasing Fee: { leasingFee } </div>
            <div> Deposit: { deposit } </div>
            <div> Leasing Options: { leasingLengths } </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Amenities;
