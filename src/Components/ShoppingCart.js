import React, { useContext, useEffect} from "react";
import { DisplayCartPrdcs } from "./DisplayCartPrdcs";
import { Login } from "./Login";
import { HashLink } from "react-router-hash-link";
import { useHistory } from 'react-router-dom';
import   CustomerRegistration from "./Customers/CustomerRegistration";
import { DeliveryMethod } from "./Checkout/DeliveryMethod";
import { DeliveryInfo } from './Checkout/DeliveryInfo';
import { PickupInfo } from './Checkout/PickupInfo';

import { LoginContext } from "./Contexts/LoginContext";
import { ContextReset } from "./Contexts/ContextReset";
import { DeliveryoptionsContext } from "./Contexts/DeliveryoptionsContext";
import { CartContext } from "./Contexts/CartContext";
import { TotalContext } from "./Contexts/TotalContext";
import "../Css/shopping-cart.css";
import { DeliveryContext } from "./Contexts/DeliveryContext";
import { CustomerContext } from "./Contexts/CustomerContext";


export const ShoppingCart = () => {
   const [ cart, setCart] = useContext(CartContext);
   const [ cartTotal, setCartTotal ] = useContext(TotalContext);
   const [ loginResult, setLoginResult ] = useContext(LoginContext);
   const [ deliveryAdd, setDeliveryInfo ] = useContext(DeliveryContext);
   const [ deliverySelected, setDeliverySelected ] = useContext(DeliveryoptionsContext);
   const [ custInfo, setCustInfo ] = useContext(CustomerContext);
   const [ crest, setReset ] = useContext(ContextReset);

   useEffect(()=>{

      //This component must be accessible only if the cart has product (s)
         checkCart();
      
      //Check Login Status to display the right component
        check_login_status_on_shoppingCart_load();

      //Hide or display the next button
        nextBtnDisplay();

   });

   function checkCart() {
     if(cart.length < 1 ){
         //redirect to the home page if the cart is empty
         //window.location.href = "/reactResto";
         const backHome = document.getElementById("btn-continue-shopping");
         backHome.click();

      }else{
        return;
      }
   }

   function check_login_status_on_shoppingCart_load(){

      const registration_show = document.querySelector("#cust-registration-show");
      const delivery_show = document.querySelector("#cust-delivery-show");
      const login_btn_show = document.querySelector("#btn-login-on-shipping");
      const login_component_show = document.querySelector("#login-component-show");
      //const guestBtn_show = document.querySelector("#btn-continue-as-guest-on-shipping");
      const create_account_btn_show = document.querySelector("#create-account-btn-show");
      const btn_continue_shopping = document.querySelector("#btn-continue-shopping");

      const chk_log = loginResult.getLogin;

      registration_show.style.display = 'none';
      delivery_show.style.display = 'none';
      login_btn_show.style.display = 'none';


      if(chk_log === "custSucc"){
        delivery_show.style.display = 'block';
        create_account_btn_show.style.display = 'none';
        login_component_show.style.display = 'none';
       // guestBtn_show.style.display = 'none';
        btn_continue_shopping.style.transition = '.5s ease';
        btn_continue_shopping.style.transform = 'translateY(50px)';

      }else if(chk_log === "no"){

        registration_show.style.display = 'block';
        delivery_show.style.display = 'block';
        login_btn_show.style.display = 'block';
        login_component_show.style.display = 'block';
        //guestBtn_show.style.display = 'block';
        create_account_btn_show.style.display = 'block';
        btn_continue_shopping.style.transform = 'translateY(0px)';

      }

   }


   function checkboxDeliveryAddressChecked(){
    const chck = document.getElementById("cust-add-delivery-checkbox");
    const displayNextBtn = document.getElementById("wraper-shopping-cart-next");
    const display_checkbox_cust_add = document.querySelector("#delivery-checkbox-show");
    const display_delivery_address_show = document.querySelector("#delivery-info-show");
    const display_delivery_pickup_show = document.querySelector("#delivery-pickup-show");
    const default_address = document.getElementById("display_default_address");
    //display_checkbox_cust_add.style.display = 'none';

    //display_checkbox_cust_add.style.display =  chck.checked ? 'block':'none'; 
    if(chck.checked){
      default_address.style.display = 'none';
      //display_checkbox_cust_add.style.display = 'none';
      displayNextBtn.style.display = 'none';
      display_delivery_pickup_show.style.display = 'none';
      display_delivery_address_show.style.display = 'block';

      setDeliveryInfo({
        firstName: custInfo.fn,
        email: custInfo.email,
        phoneNumber: custInfo.phoneNumber,
        custAddress1: custInfo.addresse,
        custCity: custInfo.city,
        zipCode: custInfo.zip,
        deliveryStatus: "yes"
      });

    }else{
      default_address.style.display = 'block';
      display_checkbox_cust_add.style.display = 'block';
      displayNextBtn.style.display = 'block';
      display_delivery_address_show.display = 'none';

    }

    nextBtnDisplay();
      
   }

   function nextBtnDisplay(){

      const displayNextBtn = document.getElementById("wraper-shopping-cart-next");
      const display_delivery_address_show = document.querySelector("#delivery-info-show");
      const display_delivery_pickup_show = document.querySelector("#delivery-pickup-show");
      const display_checkbox_cust_add = document.querySelector("#delivery-checkbox-show");
      const default_address = document.getElementById("display_default_address");

      if(deliverySelected.deliveryOption === 'delivery'){
        display_delivery_pickup_show.style.display = 'none';
      }

      const chck = document.getElementById("cust-add-delivery-checkbox");
      //Condition to display the next button
      //Make sure the cart is not empty
        if(cart.length){

          if(deliverySelected.deliveryOption === 'delivery'){

            //if login status yes display cust address as the location to deliver
            if(loginResult.getLogin === 'custSucc' && !chck.checked){
               //alert("here");
               display_checkbox_cust_add.style.display = 'block';
               displayNextBtn.style.display = 'block';
               display_delivery_address_show.style.display = 'none';
               display_delivery_pickup_show.style.display = 'none';
               return;
            }

            display_delivery_address_show.style.display = 'block';

              if(deliveryAdd.deliveryStatus === 'yes'){

                displayNextBtn.style.display = "block";

              }else{

                //alert("Please set a delivery address");
                displayNextBtn.style.display = "none";

              }
            
          }else if(deliverySelected.deliveryOption === 'pickup'){
            //bcuz is a 'pickup' order there is no need for a delivery address, we will only need the name & phone# => display pickupInfo
            display_checkbox_cust_add.style.display = 'none';
            display_delivery_address_show.style.display = 'none';
            display_delivery_pickup_show.style.display = 'block';
            displayNextBtn.style.display = "none";

            if(deliveryAdd.deliveryStatus === 'no'){

              displayNextBtn.style.display = "block";

            }else{

              //alert("Please set a delivery address");
              displayNextBtn.style.display = "none";

            }

          }else{
            //alert("Please select a delivery method");
            displayNextBtn.style.display = "none";
          }

        }else{
          // alert("you must have products inside your cart");
          displayNextBtn.style.display = "none";
        }
   }

   const LoginClicked = () => {
     const log = document.getElementById("login-popup");
     log.classList.toggle("login-popup-prime");
   }

   const createAccountClicked = () => {
     
     const create_acc_roll = document.getElementById("create_account_btn");
     create_acc_roll.classList.toggle("active");

        var panel = create_acc_roll.nextElementSibling;
        if (panel.style.maxHeight) {
          panel.style.maxHeight = null;
        } else {
          panel.style.maxHeight = panel.scrollHeight + "rem";
          create_acc_roll.scrollIntoView(true); 
        } 
      
   }


   const deliveryInfoClicked = () => {

      const create_acc_roll = document.getElementById("delivery_info_btn");
      create_acc_roll.classList.toggle("active");

       var panel = create_acc_roll.nextElementSibling;
       if (panel.style.maxHeight) {
         panel.style.maxHeight = null;
       } else {
         panel.style.maxHeight = panel.scrollHeight +"rem";
         create_acc_roll.scrollIntoView(true); 
       } 

   }

   const deliveryMethodClicked = () => {

      const create_acc_roll = document.getElementById("delivery_method_btn");
      create_acc_roll.classList.toggle("active");

       var panel = create_acc_roll.nextElementSibling;
       if (panel.style.maxHeight) {
         panel.style.maxHeight = null;
       } else {
         panel.style.maxHeight = panel.scrollHeight + "rem";
         create_acc_roll.scrollIntoView(true); 
       } 

   }

    return(
      <>
          <div className="shopping-cart">
             <div className="shopping-cart-left">
                <h1 className="shoppingCart-h1" >Your Cart</h1>

                <ul className="shoppingCart-ul" >
                  <li className="shoppingCart-li" > Total in cart:<span className="filter-total-in-cart">${ cartTotal.total } </span></li>
                </ul>

                <DisplayCartPrdcs />
                  
                <br/>
                <HashLink to="/#products-display">
                  <button type="button" id="btn-continue-shopping" className="shoppingCart-btn btn-adjust" >
                      <i className="fa fa-long-arrow-left" style={{font:"10px", paddingRight:"5px"}}></i>
                      Continue shopping
                  </button>
                </HashLink> 
                
                <div id="create-account-btn-show">
                  <button type="button" id="btn-create-account" className="shoppingCart-btn btn-adjust" onClick={ createAccountClicked } >
                        Create an Account
                  </button>
                </div>

                <ul className="shoppingCart-ul">
                  <li id="btn-login-on-shipping">
                    <button type="button" className="shoppingCart-btn" onClick={ LoginClicked }>
                        Login
                    </button>
                  </li>

                  {/* <li id="btn-continue-as-guest-on-shipping">
                    <button className="shoppingCart-btn">
                        Continue as a guest
                    </button>
                  </li> */}
                </ul>

          </div>

          <div className="shopping-cart-right">

            <div id="login-component-show">
              <div className="login-popup-prime" id="login-popup" >
                <Login />
              </div>
            </div>
  
            <div id="cust-registration-show">
              <button className="accordion" type="button" id="create_account_btn" onClick={ createAccountClicked }>Create your account</button>
              <div className="panel">
                <CustomerRegistration />
              </div>
            </div>
            
            <div id="cust-delivery-show" >  
              <button className="accordion" type="button" id="delivery_method_btn" onClick={ deliveryMethodClicked }>Delivery Method</button>
              <div className="panel">
                <DeliveryMethod />
              </div>
            </div>

            <div id="delivery-checkbox-show" style={{display:"none"}}>
               <input type="checkbox" name="delivery_on_cust_address" id="cust-add-delivery-checkbox" onClick= { checkboxDeliveryAddressChecked }/> &nbsp;
               <label>deliver to a different address</label>

               

               <ul id="display_default_address" style={{ display: "flex", flexDirection:"column", listStyle: "none", margin: "1rem" }}>
                <li><h4>Your order will be delivered at: </h4></li>
                 {/* <li>Address: { custRegister.address } &nbsp; { custRegister.city } &nbsp; { custRegister.zipcode} </li> */}
                 <li>{ deliveryAdd.custAddress1 } { deliveryAdd.custCity } { deliveryAdd.zipCode }</li>
                 {/* <li> 1243 Rue du pres Columbus 43608 </li> */}
               </ul>
            </div>

            <div id="delivery-info-show" style={{display:"none"}}>  
              <button className="accordion" type="button" id="delivery_info_btn" onClick={ deliveryInfoClicked }>Delivery Information</button>
              <div className="panel">
                <DeliveryInfo />
              </div>
            </div>

            <div id="delivery-pickup-show" style={{display:"none"}}>  
              {/* <button className="accordion" type="button" id="delivery_info_btn" onClick={ deliveryInfoClicked }>Delivery Information</button>
              <div className="panel"> */}
                <PickupInfo />
              {/* </div> */}
            </div>

            <div id="wraper-shopping-cart-next" style={{ display:"none" }}>
                <HashLink to="/payment">
                  <button type="button" id="btn-shopping-cart-next" className="shoppingCart-btn btn-adjust">
                       Next
                       <i className="fa fa-long-arrow-right" style={{font:"10px", paddingLeft:"5px"}}></i>
                  </button>
                </HashLink>
            </div>
          
          
            {/* <button className="accordion" onClick={ accordionClicked } >Payment</button>
            <div className="panel">
              <PaymentRegistration />
            </div> */}
                
          </div>
        </div>
       </>
    )
}