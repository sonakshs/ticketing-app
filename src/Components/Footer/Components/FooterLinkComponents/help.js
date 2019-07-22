import React, { Component } from "react";

class Help extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="col-sm-3">
        <h6>Help</h6>
        <ul>
          <li>
            <a href="/">24x7 Customer Service</a>
          </li>
          <li>
            <a href="/">Regenerate your PAH e-Ticket</a>
          </li>
          <li>
            <a href="/">Reprint Confirmation</a>
          </li>
          <li>
            <a href="/">Regenerate-e-Ticket</a>
          </li>
          <li>
            <a href="/">Track Courier</a>
          </li>
        </ul>
      </div>
    );
  }
}

export default Help;
