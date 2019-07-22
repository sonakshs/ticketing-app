import React, { Component } from 'react';

class Newsletter extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return (  
            <div className="col-sm-9 home-newsletter">
                <div className="row">
                <div className="col-sm-5 news-subs-txt">
                    <h3>Subscribe to our Newsletter</h3>
                </div>
                <div className="col-sm-7">
                    <div className="input-group">
                    <input type="email" className="form-control" placeholder="Enter your email" />
                    <span className="input-group-btn">
                        <button className="btn btn-theme" type="submit">Subscribe</button>
                    </span>
                    </div>
                </div>
                </div>
            </div>
        );
    }
}
 
export default Newsletter;