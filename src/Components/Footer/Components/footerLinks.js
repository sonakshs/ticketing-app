import React, { Component } from 'react';
import Help from './FooterLinkComponents/help';
import Company from './FooterLinkComponents/company';
import PopularEvents from './FooterLinkComponents/popularEvents';
import Countries from './FooterLinkComponents/countries';

class FooterLinks extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return (  
            <div className="row footer-links">
                <Help/>
                <Company/>
                <PopularEvents/>
                <Countries/>
            </div>
        );
    }
}
 
export default FooterLinks;