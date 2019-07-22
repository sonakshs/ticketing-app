import React, { Component } from 'react';
import DropDownComponent from './Components/dropdownComponent';
import Newsletter from './Components/newsletter';
import Social from './Components/social';
import FooterLinks from './Components/footerLinks';

class Footer extends Component {
    constructor(props) {
        super(props);
        this.state = {  
        }
    }
    render() { 
        return (  
            <footer className="site-footer" style={{textAlign: 'left'}}>
            <div className="container">
              <div className="row">
                <DropDownComponent/>
                <Newsletter/>
              </div>
              <FooterLinks/>
              <Social/>
            </div>
          </footer>
        );
    }
}
 
export default Footer;