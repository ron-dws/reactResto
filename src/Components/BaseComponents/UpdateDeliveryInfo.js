import React from 'react'
import { DeliveryInfo } from './../Checkout/DeliveryInfo';
import { HashLink } from 'react-router-hash-link';

export const UpdateDeliveryInfo = () => {
    return(
        <div className="update-cart">
           <h1>Update the delivery address</h1>
           <DeliveryInfo />
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