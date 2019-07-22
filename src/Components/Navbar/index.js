import React, { Component } from 'react';
import NavHeader from './Components/navHeader';
import DesktopNav from './Components/desktopNav';
import MobileNav from './Components/mobileNav';

class Navbar extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return (  
            <nav className="navbar navbar-inverse site-nav">
                <NavHeader/>
                <div className="collapse navbar-collapse navbar-right " id="myNavbar">
                    <DesktopNav/>
                    <MobileNav/>
                </div>
            </nav>
        );
    }
}
 
export default Navbar;