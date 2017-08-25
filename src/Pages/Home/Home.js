import React, { Component } from 'react';
import Header from './Components/Header/header.js';
import HeroCarousel from './Components/HeroCarousel/hero-carousel.js';
import Navbar from './Components/Navbar/navbar.js';
import Description from './Components/Navbar/AboutUs/Description/description.js';
import Amenities from './Components/Navbar/AboutUs/Amenities/Amenities.js';
import Location from './Components/Navbar/Location/Location.js';
import InfoWindow from './Components/Navbar/Location/Map/InfoWindow/InfoWindow.js'
import CommunityGoogleMap from './Components/Navbar/Location/Map/CommunityGoogleMap.js';
import Footer from './Components/Footer/footer.js';
import CommunityService from '../../Services/CommunityService.js';


import "./Components/Header/header.scss";
import "./Components/Navbar/navbar.scss";
import "./Components/HeroCarousel/hero-carousel.scss";
import "./Components/Footer/footer.scss";
import "./Home.scss";

class Home extends Component {
  // state = {
  //   community: null,
  // };

  //will contain all other components
  constructor (props) {
    super(props);
    this.state = {
      community: null
    }
  }

  componentDidMount () {

    CommunityService.getCommunity('XENdZJJQ3MRbDdlD')
      .then(response => response.json())
      .then(json => {
        this.setState({ community: json.community})
      });

  }

//question for kiefer:
//Why do i have to import all the components contained in NavBar if NavBar is responsible for rendering those children components? Cant i just import the one Navbar component and have it render it's own children on change? Why do i import all the children components AS WELL as the Navbar? shouldn't Home's structure be:

   // <div>
        // <component1 />
        // <component2Contains3ChildrenComps />
        // <footer />
   //</div>

  render () {
    if(!this.state.community) {
      return null;
    }

    return (
      <div className="home-div" id="home">
        <Header title={ this.state.community.location.name } />
        <HeroCarousel images={ this.state.community.photos }>
          <h2 className="carousel-title">{ this.state.community.location.name }</h2>
        </HeroCarousel>
        <Navbar />
        <Description description={ this.state.community.description } />
        <Amenities community={ this.state.community } />
        <Location community={ this.state.community } />
        <CommunityGoogleMap community={ this.state.community } />
        <Footer community={ this.state.community } >
          <h2> { this.state.community.location.name } </h2>
        </Footer>
      </div>
    )
  }
}


export default Home;
