import React, { Component } from 'react';

import './App.css';
import './bootstrap.css';
import './site.css';
import Navbar from './Components/Navbar';
import Carousel from './Components/Carousel';
import TicketSection from './Components/TicketSection';
import CategorySection from './Components/CategorySection';
import FeaturedSection from './Components/FeaturedSection';
import Footer from './Components/Footer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div>
          <Navbar/>
          <Carousel/>
          <TicketSection/>
          <CategorySection/>
          <FeaturedSection/>
          <Footer/>
        </div>

      </div>
    );
  }
}

export default App;
