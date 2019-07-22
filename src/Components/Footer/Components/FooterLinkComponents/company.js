import React, { Component } from "react";

class Company extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="col-sm-3">
        <h6>Company</h6>
        <ul>
          <li>
            <a href="/">About Us</a>
          </li>
          <li>
            <a href="/">Blog</a>
          </li>
          <li>
            <a href="/">Careers</a>
          </li>
          <li>
            <a href="/">Contact Us</a>
          </li>
          <li>
            <a href="/">Media Center</a>
          </li>
          <li>
            <a href="/">Policies</a>
          </li>
        </ul>
      </div>
    );
  }
}

export default Company;
