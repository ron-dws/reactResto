import React, { useContext} from "react";
import { CartContext } from "./CartContext";
import { TotalContext } from "./TotalContext";
import { DisplayCartPrdcs } from "./DisplayCartPrdcs";
import { HashLink } from "react-router-hash-link";


export const ShoppingCart = () => {
   const [cart, setCart] = useContext(CartContext);
   const [ cartTotal, setCartTotal ] = useContext(TotalContext);
  
   //console.log(JSON.stringify(cart));

   //const new_all_prdcs = JSON.parse(localStorage.getItem("allprdcs"));

   //console.log(JSON.stringify(new_all_prdcs));
 
    return(
        <>
          
            <h1 style={{marginTop:"2rem"}}>Your Cart</h1>
          <ul style={{display:"flex", justifyContent:"center", alignItems:"center", height:"4rem"}}>
            <li style={{display:"flex", justifyContent:"center", alignItems:"center",}}> Total in cart:<span className="filter-total-in-cart">${ cartTotal.total } </span></li>
          </ul>

          <DisplayCartPrdcs />
          <br/>
          <HashLink to="/#products-display">
            <button type="button" style={{padding:"6px", borderRadius:"5px", margin:"5px", border:"none",background:"dodgerblue", color:"white" }}>
                <i className="fa fa-long-arrow-left" style={{font:"10px", paddingRight:"5px"}}></i>
                back to cart
            </button>
          </HashLink> 
        </>
    )
}