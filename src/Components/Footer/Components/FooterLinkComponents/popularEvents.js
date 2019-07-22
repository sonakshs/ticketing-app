import React, { Component } from 'react';

class PopularEvents extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return (  
            <div className="col-sm-3">
                <h6>Popular Events</h6>
                <ul>
                    <li><a>EsselWorld</a></li>
                    <li><a>KidZania</a></li>
                    <li><a>Water Kingdom</a></li>
                    <li><a>Water Kingdom</a></li>
                    <li><a>Adventure Park</a></li>
                    <li><a>Vineyard Tour &amp; Cycling</a></li>
                </ul>
            </div>
        );
    }
}
 
export default PopularEvents;