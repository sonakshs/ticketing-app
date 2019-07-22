import React, { Component } from 'react';

class FeaturedSection extends Component {
    constructor(props) {
        super(props);
        this.state = {  
          items: []
        }
    }
    componentDidMount(){
        var data = require('../../data/featured.json');
        var result = Object.keys(data).map(function(key) {
            return data[key];
        });
        this.setState({items: result})
    }
    render() { 
        const items = this.state.items.map((item, index)=>{
            return(
              <a key={index} target="_blank" rel="noopener noreferrer" href={item.link}>
                <img src={item.imgScr} alt={item.alt} />
              </a>
            )
        })
        
        return (  
        <section className="home-featured-sec text-center">
            <h2 className="site-title"><span>We've been featured in</span></h2>
            <div className="container-fluid">
                {items}
            </div>
          </section>
        );
    }
}
 
export default FeaturedSection;