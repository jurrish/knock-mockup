import React, { Component } from 'react';
import Navbar from '../Navbar/navbar.js';

import './header.scss';

class Header extends Component {
  state = {
    showNavigation: false
  }
// if .showNavigation is true, change the header-div class to fixed
// else show header-div
  render () {
    const headerClassName = this.state.showNavigation ? 'header-div header-div-fixed' : 'header-div';

    return(
      <div className={ headerClassName }>
        <div className="logo-name">{ this.props.title }</div>

        <div onClick={ this.toggleShowNavigation.bind(this) } className="hamburger-div">
          <i className="fa fa-bars fa-2x" />
          { this.renderNavComponent() }
        </div>
      </div>
    );
  }

  toggleShowNavigation () {
    this.setState( { showNavigation: !this.state.showNavigation } )
  }

//how does this show Navbar if we haven't passed that component to Home.js? I tried passing HeroCarousel to PhotoCarousel and having PhotoCarousel render HeroCarousel if a specific className was triggered, but im having issues with PhotoCarousel rendering <HeroCarousel /> in the return function
  renderNavComponent () {
    const className = this.state.showNavigation ? 'navigation-div' : 'navigation-div hidden';

    return (
      <div className={ className }>
        <div>
          <a href="#aboutUs">About Us</a>
        </div>
        <div>
          <a href="#location">Location</a>
        </div>
        <div>
          <a href="#home">Home</a>
        </div>
      </div>
    )
  }
}

export default Header;
