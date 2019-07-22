import React, { Component } from 'react';

class Countries extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return (  
            <div className="col-sm-3 country-flag-sec">
                <h6>Popular Events</h6>
                <ul>
                    <li><a href="http://www.kyazoonga.com.au/" target="_blank" rel="noopener noreferrer"><img src="../../images/CountriesFlag/aus.png" alt=""/>Australia</a></li>
                    <li><a href="http://www.kyazoonga.com/" target="_blank" rel="noopener noreferrer"><img src="../../images/CountriesFlag/ind.png" alt="" />India</a></li>
                    <li><a href="http://www.kyazoonga.ie/" target="_blank" rel="noopener noreferrer"><img src="../../images/CountriesFlag/ireland.png" alt="" />Ireland</a></li>
                    <li><a href="http://www.kyazoonga.ae/" target="_blank" rel="noopener noreferrer"><img src="../../images/CountriesFlag/uae.png" alt="" />United Arab Emirates</a></li>
                    <li><a href="http://www.kyazoonga.com/" target="_blank" rel="noopener noreferrer"><img src="../../images/CountriesFlag/usa.png" alt="" />United States</a></li>
                </ul>
            </div>
        );
    }
}
 
export default Countries;