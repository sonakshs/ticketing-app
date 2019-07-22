import React, { Component } from 'react';

class CarouselInner extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            carouselData: []
        }
    }
    componentWillMount(){
        var data = require('../../../data/carousel.json');
        var result = Object.keys(data).map(function(key) {
            return data[key];
        });
        this.setState({carouselData: result})
    }
    render() { 
        const videos = this.state.carouselData.map((carousel, index) => {
            return(
              <div key={index} data-slide={carousel.dataSlide} id={carousel.id} className="item">
                <img src={carousel.src} alt="" className="hide-on-desktop" />
                <div className="hide-on-mobile">
                  <video title={carousel.dataSlide} autoPlay loop muted poster={carousel.poster}>
                    <source src={carousel.videoSrc} type="video/mp4" />Your browser does not support the video tag.</video>
                </div>
              </div>
            )
        });
        return (  
            <div className="carousel-inner">
              {videos}
            </div>
        );
    }
}
 
export default CarouselInner;