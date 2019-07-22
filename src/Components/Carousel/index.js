import React, { Component } from 'react';
import $ from 'jquery';
import CarouselInner from './Components/carouselInner';
import SiteMenu from './Components/siteMenu';

class Carousel extends Component {
    constructor(props) {
        super(props);
        this.state = { 
          value: '',
          active: 0
        }
        this.search = this.search.bind(this);
        this.slider = this.slider.bind(this);
    }
    search(){
      console.log("Search");
    }
    slider(){
      var elemCurr = $('#bgvid'+this.state.active%5);
      var elemNext = $('#bgvid'+(this.state.active+1)%5);
      elemCurr.removeClass('active');
      elemNext.addClass('active');
      this.setState({active: (this.state.active+1)%5});
    }
    componentDidMount(){
      $('#bgvid0').addClass('active');
      setInterval(this.slider, 12000)
      $(document).ready(function() {
        $('#txtSearchBox').blur(function() {
          $("#loading").hide()
        }).focus(function() {
          $("#loading").show()
        });
      });
    }
    render() { 
        return (  
          <div id="myCarousel" className="carousel slide carousel-fade home-slider" data-ride="carousel">
            <h1>Tickets made simple for everyone, everywhere</h1>
            <SiteMenu/>
            <CarouselInner/>
          </div>
          
        );
    }
}
 
export default Carousel;