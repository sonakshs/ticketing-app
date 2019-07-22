import React, { Component } from 'react';

class MobileNav extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            isDropdownOpen: false
        }
        this.toggleDropdownOpen = this.toggleDropdownOpen.bind(this)
    }
    toggleDropdownOpen(){
        this.setState({ isDropdownOpen: !this.state.isDropdownOpen });
    }
    render() { 
        const menuClass = `dropdown-menu${this.state.isDropdownOpen ? " show" : ""}`;
        return (  
            <ul className="nav navbar-nav top-nav hide-on-desktop">
                <li><a>Sign Up</a></li>
                <li><a>Sign In</a></li>
                <li><a><i className="fa fa-shopping-basket" aria-hidden="true" /><span className="badge">4</span></a></li>
                <li className="dropdown">
                <a className="dropdown-toggle" onClick={this.toggleDropdownOpen} data-toggle="dropdown" aria-haspopup="true" aria-expanded="true"><i className="fa fa-bell" aria-hidden="true" /><span className="badge">10</span></a>
                <ul className={menuClass} aria-labelledby="dropdownMenu1">
                    <li><a>Action</a></li>
                    <li><a>Another action</a></li>
                    <li><a>Something else here</a></li>
                    <li><a>Separated link</a></li>
                </ul>
                </li>
            </ul>
        );
    }
}
 
export default MobileNav;