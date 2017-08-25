import React, { Component } from 'react';

import './footer.scss';

class Footer extends Component {

  render(){
    return(
    <div className="footer-wrapper">
      <div className="footer-content">
      { this.props.children }
      </div>
        <div className="footer" />
    </div>
    );
  }
}

export default Footer;
