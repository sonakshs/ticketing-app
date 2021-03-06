import React, { Component } from "react";

class NavHeader extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="navbar-header">
        <button
          type="button"
          className="navbar-toggle"
          data-toggle="collapse"
          data-target="#myNavbar"
        >
          <span className="icon-bar" />
          <span className="icon-bar" />
          <span className="icon-bar" />
        </button>
        <a href="/" className="site-logo">
          <img
            src="images/logo.png"
            alt="The Big Ticket"
            height={40}
            title="The Big Ticket"
          />
        </a>
      </div>
    );
  }
}

export default NavHeader;
