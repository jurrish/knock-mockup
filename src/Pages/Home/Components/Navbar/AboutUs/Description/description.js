import React, { Component } from 'react';
import Navbar from '../../navbar.js';

import './description.scss';

class Description extends Component {
  constructor(props) {
    super(props);
  }

  render () {
    return(
      <div className="description-div" id="aboutUs">
          <p> { this.props.description.short } </p>
      </div>
    );
  }
}

export default Description;
