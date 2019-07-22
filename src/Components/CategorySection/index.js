import React, { Component } from 'react';
import BrowseByTop from './Components/browseByTop';
import HomeCategories from './Components/homeCategories';

class CategorySection extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return (  
          <div>    
              <BrowseByTop/>
              <HomeCategories/>
          </div>
        );
    }
}
 
export default CategorySection;