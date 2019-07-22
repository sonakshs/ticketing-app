import React, { Component } from 'react';
import VideoBlog from './videoBlog';

class HomeCategories extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return (  
            <section className="home-cat-sec text-center">
                <div className="container-fluid">
                    <h2 className="site-title">Sellers, use <a href="http://iticket.kyazoonga.com/" target="_blank" rel="noopener noreferrer" >
                    <img src="http://www.kyazoonga.com/images/iticket-logo.png" style={{width: 100}} alt="i-tickets"/></a> to create and sell your event tickets online <small>Discover and purchase tickets to cool events created and listed by organizers directly</small></h2>
                    <VideoBlog/>
                </div>
            </section>
        );
    }
}
 
export default HomeCategories;