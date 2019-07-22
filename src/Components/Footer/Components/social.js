import React, { Component } from "react";

class Social extends Component {
  constructor(props) {
    super(props);
    this.state = {
      social: []
    };
  }
  componentDidMount() {
    var data = require("../../../data/social.json");
    var result = Object.keys(data).map(function(key) {
      return data[key];
    });
    this.setState({ social: result });
  }
  render() {
    const items = this.state.social.map((item, index) => {
      return (
        <li key={index}>
          <a
            className={item.class}
            href={item.link}
            target="blank"
            rel="noopener noreferrer"
          >
            <img src={item.imgScr} alt={item.alt} width={32} height={32} />
          </a>
        </li>
      );
    });
    return (
      <div className="footer-social text-center">
        <h6>Follow Us</h6>
        <ul>{items}</ul>
        <p className="copy-txt">
          Copyright ©<a href="https://github.com/sonakshs">Sonaksh Saraswat</a>.
          All rights reserved.{" "}
        </p>
      </div>
    );
  }
}

export default Social;
