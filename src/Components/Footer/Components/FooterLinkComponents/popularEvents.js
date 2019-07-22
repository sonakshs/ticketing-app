import React, { Component } from "react";

class PopularEvents extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="col-sm-3">
        <h6>Popular Events</h6>
        <ul>
          <li>
            <a href="/">EsselWorld</a>
          </li>
          <li>
            <a href="/">KidZania</a>
          </li>
          <li>
            <a href="/">Water Kingdom</a>
          </li>
          <li>
            <a href="/">Water Kingdom</a>
          </li>
          <li>
            <a href="/">Adventure Park</a>
          </li>
          <li>
            <a href="/">Vineyard Tour &amp; Cycling</a>
          </li>
        </ul>
      </div>
    );
  }
}

export default PopularEvents;
