import React, { Component } from "react";

class BrowseByTop extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: []
    };
  }
  componentDidMount() {
    var data = require("../../../data/categories.json");
    var result = Object.keys(data).map(function(key) {
      return data[key];
    });
    this.setState({ items: result });
  }
  render() {
    const items = this.state.items.map((item, index) => {
      return (
        <div key={index} className="col-sm-4 cat-box">
          <a href="/" className="block-link">
            <div className="cat-txt">
              <h3>{item.name}</h3>
            </div>
            <img src={item.imgSrc} alt="" className="img-full-width" />
          </a>
        </div>
      );
    });
    return (
      <section className="home-cat-sec text-center">
        <div className="container">
          <h2 className="site-title">Browse by top categories</h2>
          <div className="row">{items}</div>
        </div>
      </section>
    );
  }
}

export default BrowseByTop;
