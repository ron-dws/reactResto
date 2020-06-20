import React, { Component } from 'react';
import './../Css/landing-page-style.css';

class Filter_products extends Component{
    constructor(props){
        super(props);

        this.state = {
              prdc: "",
              prdcsTotalCart: 0,
        }
    }

    Prdc_to_seach = (e) => { this.setState({[e.target.name] : e.target.value}); }
    render(){
        return(
            <>
              <h1>Our Products</h1>
              <ul className="ul-filter-prdc">
                  <li>
                      <select id="prdc-filter-display" name="nm_prd_filter_display">
                          <option value="By_Price">By Price</option> 
                          <option value="By_date">By Date</option>   
                      </select> 
                  </li>
                  <li>
                      <input 
                         type="text"
                         className = "input-prdc-search"
                         placeholder = "Search product"
                         onChange={this.Prdc_to_seach}
                         name = "prdc"
                         value = { this.name }
                      />
                  </li>
                  <li> Total in cart:<span className="filter-total-in-cart"> ${ this.props.theTotal } </span></li>
              </ul>
            </>
        )
    }
}

export default Filter_products;