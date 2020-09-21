import React, { useContext, useEffect } from 'react';
import { PaymentRegistration } from './PaymentRegistration';
import { BusinessInfo } from '../BaseComponents/BusinessInfo';
import { HashLink } from 'react-router-hash-link';
import { DeliveryContext } from '../Contexts/DeliveryContext';
import '../../Css/validation.css'
import { TotalContext } from '../Contexts/TotalContext';
import { CartContext } from '../Contexts/CartContext';
import { DeliveryoptionsContext } from '../Contexts/DeliveryoptionsContext';
import { CustomerContext } from '../Contexts/CustomerContext';
import { promptMessage } from '../Model/ModelFunctionsExport';



export const ValidationAndPayment = () => {

   useEffect(()=>{

      //Check basic to access this component
      checkCartAndDeliveryMethod();

      //Hide or display the next button
      checkTheDeliveryStatus();
   
  });

    const [deliveryAdd, setDelAdd] = useContext(DeliveryContext);
    const [deliveryMeth, setDelMeth] = useContext(DeliveryoptionsContext);
    const [ cartTotal, setCartTotal ] = useContext(TotalContext);
    const [ cart, setCart ] = useContext(CartContext);
    const [ cust, setCustc] = useContext(CustomerContext);

     const getCartTotal = cartTotal.total;
     const tax_applied = Number((getCartTotal * .05).toFixed(2));        //toFixed => round to 2 digit after coma
     const theTotal = Number((getCartTotal + tax_applied).toFixed(2));

     //Basic check to access to component
     const checkCartAndDeliveryMethod = () => {

        const backHome = document.getElementById("btn-continue-shopping");

        if(cart.length > 0 ){
           if(deliveryMeth.deliveryOption == 'pickup' || deliveryMeth.deliveryOption == 'delivery'){
              return;
           }else{
              //window.location.href = '/reactResto';
              backHome.click();
           }
        }else{
           //window.location.href = '';
           backHome.click();
        }
     }
    
    
    const checkTheDeliveryStatus = () =>{

      const show_delivery_add = document.querySelector("#delivery-address-show");
      const show_pickup_person = document.querySelector("#delivery-pickup-display-show");

      if(deliveryMeth){
         if(deliveryMeth.deliveryOption === 'pickup'){ 

            //display pickup person info and hide delivery address
            show_pickup_person.style.display = 'block';
            show_delivery_add.style.display = 'none';

         }else{

            //show delivery address and hide the pickup person info
            show_delivery_add.style.display = 'block';
            show_pickup_person.style.display = 'none';

         }
      }else{
         return;
      }
   }

    const displayCart = (cart) => {
       let mycart = cart.map((val, index) => (
          <div className="listing-products" key={index}>
            <ul style={{ display:"flex", justifyContent:"space-evenly", margin:".5rem 0" }}>
               <li style={{width:"8rem", textAlign:"left"}}>{ val.name }</li>
               <li style={{width:"4rem", textAlign:"left"}}>{ val.price }</li>
               <li style={{width:"3rem", textAlign:"left"}}>{ val.qty }</li>
               <li style={{width:"4rem", textAlign:"left"}}>{ (val.price * val.qty) }</li>
            </ul>
          </div>
       ));

       return mycart;
    }

    //post the order
    const postOrderAndPayment = (e, cart_info, cust_info, cart_total, delivery_info, method_of_delivery ) => {
         e.preventDefault();
         promptMessage(cart_info, cust_info, cart_total, delivery_info, method_of_delivery);
    }

    return(
        <>
        <div className="validation-and-payment">
          <BusinessInfo />
          <hr />
          <div className="shopping-cart">
             <div className="shopping-cart-left">

                <div id="delivery-pickup-display-show">
                    <div style={{ marginBottom: "1rem", paddingLeft: "1rem", textAlign:"left", float:"left" }}>
                        <h4>Pickup By: </h4>
                        <ul style={{ listStyle:"none", textAlign: "left", marginTop:".5rem" }}>
                           <li>{ deliveryAdd.firstName }</li>
                           <li>{ deliveryAdd.phoneNumber }</li>
                        </ul>
                     </div>
                     <hr style={{margin:"0 0 1rem 0", clear:"both"}} />
                </div>

                <div id="delivery-address-show">
                     <div style={{ marginBottom: "1rem", paddingLeft: "1rem", textAlign:"left", float:"left" }}>
                        <h4>Delivery address: </h4>
                        <ul style={{ listStyle:"none", textAlign: "left", marginTop:".5rem" }}>
                           <li>{ deliveryAdd.firstName }</li>
                           <li>{ deliveryAdd.phoneNumber }</li>
                           <li>{ deliveryAdd.custAddress1 } { deliveryAdd.custCity } { deliveryAdd.zipCode }</li>
                        </ul>
                     </div>
                     <HashLink to="/updatedelivery">
                        <button type="button" style={{ float: "right", borderRadius: "100%", border: "none", background: "dodgerblue", color: "white", padding: ".5rem", margin: ".5rem"}}>
                           <i className="fa fa-pencil" style={{font:"10px", paddingRight:"5px"}}></i>
                        </button>
                     </HashLink> 
                     <hr style={{margin:"0 0 1rem 0", clear:"both"}} />
                </div>

                <ul style={{ display:"flex", justifyContent:"space-evenly" }}>
                  <li style={{fontWeight:"bold", width:"8rem", textAlign:"left"}}> Product </li>
                  <li style={{fontWeight:"bold", width:"4rem", textAlign:"left"}}> Price </li>
                  <li style={{fontWeight:"bold", width:"4rem", textAlign:"left"}}> Qty </li>
                  <li style={{fontWeight:"bold", width:"4rem", textAlign:"left"}}> Total </li>
               </ul>

               <div>{ displayCart(cart) }</div>

               <HashLink to="/updatecart">
                  <button type="button" style={{ float: "right", borderRadius: "100%", border: "none", background: "dodgerblue", color: "white", padding: ".5rem", margin: ".5rem"}}>
                      <i className="fa fa-pencil" style={{font:"10px", paddingRight:"5px"}}></i>
                  </button>
                </HashLink> 
                {/* <DisplayCartPrdcs />  */}

                <ul style={{ listStyle:"none", marginTop:"2rem", marginLeft:"2rem", textAlign:"left" }}>
                  <li>Total In Cart: &nbsp; ${ getCartTotal }</li>
                  <li>Tax: &nbsp; ${ tax_applied }</li>
                  <li style={{paddingTop:"1rem"}}><b>Total:</b> &nbsp; <span style={{color: "green", fontWeight:"600"}}>${ theTotal }</span></li>
                </ul>

             </div>

             <div className="divider" style={{ borderLeft: ".5px solid rgba(249, 189, 0, 0.99)" }}>
                <div className="shopping-cart-right" style={{margin:"1rem", marginTop:"3rem"}}>
                   <PaymentRegistration />
                </div>
             </div>
             
             {/* <button type="button" id="test-function" onClick={ (e) => postOrderAndPayment(e, cart, cust, cartTotal, deliveryAdd, deliveryMeth) } className="shoppingCart-btn btn-adjust" style={{ margin:"0 0 2rem" }}>
                      <i className="fa fa-long-arrow-left" style={{font:"10px", paddingRight:"5px"}}></i>
                      Test function
            </button> */}

             <HashLink to="/#products-display">
                  <button type="button" id="btn-continue-shopping" className="shoppingCart-btn btn-adjust" style={{ margin:"0 0 2rem" }}>
                      <i className="fa fa-long-arrow-left" style={{font:"10px", paddingRight:"5px"}}></i>
                      Continue shopping
                  </button>
            </HashLink> 
          </div>
        </div>
        </>
    )
} 