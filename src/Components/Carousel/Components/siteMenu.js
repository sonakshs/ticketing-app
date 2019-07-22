import React, { Component } from 'react';

class SiteMenu extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            li: []
        }
    }
    componentDidMount(){
        var data = require('../../../data/site-menu.json');
        var result = Object.keys(data).map(function(key) {
            return data[key];
        });
        this.setState({li: result})
    }
    render() { 
        const items = this.state.li.map((item, index)=>{
            return(
                <li key={index}><a href="" className={item.className}>{item.name}</a></li>
            )
        })
        return (  
            <div className="site-manu container">
              <div className="collapse navbar-collapse hide-on-mobile">
                <ul className="nav navbar-nav sub-main-nav">
                  {items}
                </ul>
              </div>
              <div className="banner-serch-box"><input id="txtSearchBox" className="q" defaultValue={this.state.value} placeholder="Search for an event, venue or city" type="text" /><a href="javascript:void(0);" onClick={this.search}><i className="fa fa-search" aria-hidden="true" /></a></div>
            </div>
        );
    }
}
 
export default SiteMenu;