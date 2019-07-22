import React, { Component } from 'react';

class DropDownComponent extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            isDropdownOpen: false
        }
        this.toggleDropdownOpen = this.toggleDropdownOpen.bind(this)
    }
    toggleDropdownOpen(){
        this.setState({ isDropdownOpen: !this.state.isDropdownOpen });
    }
    render() { 
        const menuClass = `dropdown-menu${this.state.isDropdownOpen ? " show" : ""}`;
        return (  
            <div className="col-sm-3 cont-drop">
                <div className="dropdown">
                <button className="btn btn-default dropdown-toggle" onClick={this.toggleDropdownOpen} type="button" id="dropdownMenu1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
                    Dropdown
                    <span className="caret" style={{marginLeft: '10px'}} />
                </button>
                <ul className={menuClass} aria-labelledby="dropdownMenu1">
                    <li><a>Action</a></li>
                    <li><a>Another action</a></li>
                    <li><a>Something else here</a></li>
                    <li role="separator" className="divider" />
                    <li><a>Separated link</a></li>
                </ul>
                </div>
            </div>
                
        );
    }
}
 
export default DropDownComponent;