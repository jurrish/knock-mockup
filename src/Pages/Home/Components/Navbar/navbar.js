import React, { Component } from 'react';
import CommunityService from '../../../../Services/CommunityService.js';

import './navbar.scss';

//for all attributes onClick .setState showNavigation : false;

class Navbar extends Component {
  state = {
    isFixed: false
  }

  componentDidMount () {
    //fetch to CommunityService for photoUrl
    //CommunityService.getCommunity('abc123')
    //this.setState({ community: responseFromCall })
    CommunityService.getCommunity('XENdZJJQ3MRbDdlD')
      .then(response => response.json())
      .then(json => {
        this.setState({ community: json.community })
      });

      this._scrollHandler = this.onScroll.bind(this);
      window.addEventListener('scroll', this._scrollHandler);
  }

  onScroll () {
    if (window.scrollY >= 555 && !this.state.isFixed) {
      this.setState({ isFixed: true })
    }

    if (window.scrollY < 555 && this.state.isFixed) {
      this.setState({ isFixed: false })
    }
  }

  componentWillUnmount () {
    window.removeEventListener('scroll', this._scrollHandler)
  }

  onClick(event) {
    console.log(event.target, ' = clicked target ');
  }

  render(){
    const createdClass = this.state.isFixed ? 'navbar-div navbar-div-fixed' : 'navbar-div';

    return(
      <div>
        <div className={ createdClass }>
          <div className="navbar-div-links">
            <a href="#aboutUs" >About Us</a>
            <a href="#location">Location</a>
            <a href="#home">Home</a>
          </div>
        </div>
        { this.state.isFixed ? <div className="navbar-div-push-down"></div> : null }
      </div>
    );
  }
}

export default Navbar;
