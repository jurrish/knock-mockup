import React, { Component } from 'react';
import './hero-carousel.scss';

class HeroCarousel extends Component {
  state = {
    currentImageIndex: 0
  };

  render () {
    return(
      <div className="hero-carousel-div">
        <div className="hero-carousel-images-container">
          { this.renderImages() }
          { this.props.children }
          <div className="carousel-arrows">

            <div className="right-arrow" onClick={ this.nextImage.bind(this) }>
              <i className="fa fa-angle-right fa-2x" />
            </div>

            <div className="left-arrow" onClick={ this.prevImage.bind(this) }>
              <i className="fa fa-angle-left fa-2x" />
            </div>

          </div>
        </div>
      </div>
    );
  }

  renderImages () {
    return this.props.images.map((image, index) => {
      const className = this.state.currentImageIndex !== index ? 'hero-carousel-image hero-carousel-image-hidden' : 'hero-carousel-image';

      return <div className={ className } style={ { backgroundImage: 'url(' + image.url + ')'} }></div>
    });
  }

  //TODO: set max length of photoArray to 4 IF it's in photoCarousel class. ELSE keep the array as is.


  nextImage () {

    //if the the currentIndex is at the end of the imageArray (images.length-1), set it to 0, else incremement the imageIndex
    const imageIndex = this.state.currentImageIndex === this.props.images.length - 1 ? 0 : this.state.currentImageIndex + 1;

    this.setState({
      currentImageIndex: imageIndex
    })
  }

  prevImage () {
    const imageIndex = this.state.currentImageIndex === 0 ? this.props.images.length - 1 : this.state.currentImageIndex - 1;

    this.setState({
      currentImageIndex: imageIndex
    })
  }
}

export default HeroCarousel;
