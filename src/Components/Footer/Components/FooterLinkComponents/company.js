import React, { Component } from 'react';

class Company extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return (  
            <div className="col-sm-3">
                <h6>Company</h6>
                <ul>
                    <li><a>About Us</a></li>
                    <li><a>Blog</a></li>
                    <li><a>Careers</a></li>
                    <li><a>Contact Us</a></li>
                    <li><a>Media Center</a></li>
                    <li><a>Policies</a></li>
                </ul>
            </div>
        );
    }
}
 
export default Company;