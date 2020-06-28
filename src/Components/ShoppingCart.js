import React, { useContext} from "react";
import { CartContext } from "./CartContext";
import { TotalContext } from "./TotalContext";
import { DisplayCartPrdcs } from "./DisplayCartPrdcs";
import { HashLink } from "react-router-hash-link";
import "../Css/shopping-cart.css";


export const ShoppingCart = () => {
   const [cart, setCart] = useContext(CartContext);
   const [ cartTotal, setCartTotal ] = useContext(TotalContext);
  
   //console.log(JSON.stringify(cart));

   //const new_all_prdcs = JSON.parse(localStorage.getItem("allprdcs"));

   //console.log(JSON.stringify(new_all_prdcs));

   const LoginClicked = () => {
     const log = document.getElementById("login-popup");
     log.style.display = "block";
   }
 
    return(
        <>
          
          <h1 className="shoppingCart-h1" >Your Cart</h1>
          <ul className="shoppingCart-ul" >
            <li className="shoppingCart-li" > Total in cart:<span className="filter-total-in-cart">${ cartTotal.total } </span></li>
          </ul>

          <DisplayCartPrdcs />
          <br/>
          <HashLink to="/#products-display">
            <button type="button" className="shoppingCart-btn" >
                <i className="fa fa-long-arrow-left" style={{font:"10px", paddingRight:"5px"}}></i>
                Continue shopping
            </button>
          </HashLink> 

          <ul className="shoppingCart-ul">
            <li>
              <button type="button" className="shoppingCart-btn" onClick={ LoginClicked }>
                  Login
              </button>
            </li>
            <li>
              <button className="shoppingCart-btn">
                  Create an account
              </button>
            </li>
            <li>
              <button className="shoppingCart-btn">
                  Continue as a guest
              </button>
            </li>
          </ul>

          <div id="login-popup" style={{display: "none"}}>
            <h1>Login</h1>
          </div>
        </>
    )
}