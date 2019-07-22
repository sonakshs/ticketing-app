import React, { Component } from "react";
import $ from "jquery";

class VideoBlog extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount() {
    $(document).ready(function() {
      $("#dvYoutube").html(
        "<iframe style='width: 100%; height: 400px' src='https://www.youtube.com/embed/jrfKzj3qaf8?controls=0' frameborder='0' allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture' allowfullscreen></iframe>"
      );
    });
  }
  render() {
    return (
      <div className="row">
        <div className="col-sm-6 cat-box">
          <div id="dvYoutube" />
        </div>
        <div className="col-sm-6 cat-box">
          <a href="/" className="block-link">
            <div className="cat-txt">
              <h3>Ticket.com Blog</h3>
            </div>
            <img
              src="https://static2.kyazoonga.com/Images/kzconsumer/kz-blog.jpg"
              alt=""
              className="img-full-width"
            />
          </a>
        </div>
      </div>
    );
  }
}

export default VideoBlog;
