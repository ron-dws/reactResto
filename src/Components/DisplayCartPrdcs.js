import React, { useContext } from 'react';
import { CartContext } from './CartContext';

export const DisplayCartPrdcs = () => {
    const [cart, setCart] = useContext(CartContext);

    const disPrdName = (cart) => {
        console.log("prd :: " + JSON.stringify(cart));
        
        if(!cart.length) { return null;} 
        
    
        let prdcNameInCart = cart.map((val, index)=>(
            //track if that item is already inside the cart
            //loop through the cart and compare value
            <div key={index}>
              <ul style={{listStyle:"none", display:"flex", margin:"5px", width:"100%", justifyContent:"center"}}>
                <li style={{padding:"5px 10px 5px 10px", minWidth:"200px"}}>{val.name}</li>
                <li style={{padding:"5px 10px 5px 10px", minWidth:"100px"}}>${val.price}</li>
                <li style={{padding:"1px", marginTop:"3px", color:"white", width:"25px", height:"25px", borderRadius:"100%", cursor:"pointer", background:"red"}} onClick={ e => deletePrdc(e, index) }>X</li>
              </ul>
            </div> 
        ));
        return prdcNameInCart;
    
     }

     const deletePrdc = (e, prdcindex) => {
        //alert(prdcindex);
        cart.splice(prdcindex,1); //remove product to the cart
        
        //localStorage.removeItem("allprdcs");
        console.log(cart);
        disPrdName(cart);
    }
    return(
    <>
      <span >Items: { disPrdName(cart) } </span>
    </>
    )
}