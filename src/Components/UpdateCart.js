import React from 'react';
import { DisplayCartPrdcs } from './DisplayCartPrdcs';
import { HashLink } from 'react-router-hash-link';
import '../Css/landing-page-style.css';

export const UpdateCart = () => {
    return(
        <div className="update-cart">
           <h1>Update the delivery address</h1>
           <DisplayCartPrdcs />
           <HashLink to="/payment">
                  <button type="button" id="btn-continue-shopping" className="shoppingCart-btn btn-adjust">
                      <i className="fa fa-long-arrow-right" style={{font:"10px", paddingRight:"5px"}}></i>
                      Back to Payment
                  </button>
            </HashLink> 
            <HashLink to="/#products-display">
                  <button type="button" id="btn-continue-shopping" className="shoppingCart-btn btn-adjust">
                      <i className="fa fa-long-arrow-left" style={{font:"10px", paddingRight:"5px"}}></i>
                      Continue Shopping
                  </button>
            </HashLink>
        </div>
    )
}