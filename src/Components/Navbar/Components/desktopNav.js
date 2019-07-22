import React, { Component } from "react";

class DesktopNav extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isDropdownOpen: false
    };
    this.toggleDropdownOpen = this.toggleDropdownOpen.bind(this);
  }
  toggleDropdownOpen() {
    this.setState({ isDropdownOpen: !this.state.isDropdownOpen });
  }
  render() {
    const menuClass = `dropdown-menu${
      this.state.isDropdownOpen ? " show" : ""
    }`;
    return (
      <ul className="nav navbar-nav top-nav hide-on-mobile">
        <li>
          <a href="/">Sign Up</a>
        </li>
        <li>
          <a href="/">Sign In</a>
        </li>
        <li>
          <a href="/">
            <i className="fa fa-shopping-basket" aria-hidden="true" />
            <span className="badge">4</span>
          </a>
        </li>
        <li className="dropdown">
          <a
            href="/"
            className="dropdown-toggle"
            onClick={this.toggleDropdownOpen}
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="true"
          >
            <i className="fa fa-bell" aria-hidden="true" />
            <span className="badge">10</span>
          </a>
          <ul className={menuClass} aria-labelledby="dropdownMenu1">
            <li>
              <a href="/">Action</a>
            </li>
            <li>
              <a href="/">Another action</a>
            </li>
            <li>
              <a href="/">Something else here</a>
            </li>
            <li>
              <a href="/">Separated link</a>
            </li>
          </ul>
        </li>
        <li>
          <a href="/">
            <span className="label label-primary">Ticket Your Event</span>
          </a>
        </li>
      </ul>
    );
  }
}

export default DesktopNav;
