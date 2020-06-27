import React, { useContext } from 'react';
import { CartContext } from './CartContext';
import { ContextReset } from './ContextReset';
import { TotalContext } from './TotalContext';

export const DisplayCartPrdcs = () => {
    const [ cart, setCart ] = useContext(CartContext);
    const [ myreset, setReset ] = useContext(ContextReset);
    const [ cartTotal, setCartTotal ] = useContext(TotalContext);

    const disPrdName = (cart) => {
        console.log("prd :: " + JSON.stringify(cart));
        
        if(!cart.length) { return null;} 
        
    
        let prdcNameInCart = cart.map((val, index)=>(
            //track if that item is already inside the cart
            //loop through the cart and compare value
            <div key={index}>
              <ul style={{listStyle:"none", display:"flex", margin:"5px", width:"100%", justifyContent:"center"}}>
                <li style={{padding:"5px 10px 5px 10px", minWidth:"200px"}}>{ val.name }</li>
                <li style={{padding:"5px 10px 5px 10px", minWidth:"100px"}}>${ val.price }</li>
                <li style={{padding:"5px 10px 5px 10px", minWidth:"100px"}}>QTY: { val.qty }</li>
                <li style={{padding:"1px", marginTop:"3px", color:"white", width:"25px", height:"25px", borderRadius:"100%", cursor:"pointer", background:"dodgerblue"}} onClick={ e => addQty (e, index, val.name, val.price, val.qty ) }>+</li>
                <li style={{padding:"1px", marginTop:"3px", color:"white", width:"25px", height:"25px", borderRadius:"100%", cursor:"pointer", background:"red", marginLeft:"5px"}} onClick={ e => deletePrdc (e, index, val.price ) }>X</li>
              </ul>
            </div> 
        ));
        return prdcNameInCart;
    
     }

     const deletePrdc = (e, prdcindex, price) => {
        //alert(prdcindex);
        cart.splice(prdcindex,1); //remove product to the cart
        
        //localStorage.removeItem("allprdcs");
        console.log(cart);
        //setCart(cart);
        setReset([]); /*I use this so we can noticed instantly when the product 
                        is deleted from the cart. It doesn't really affect anything,
                        it just help to update the view. I must find a better way to this */
        
        const new_price = cartTotal.total - price;
        setCartTotal({total: new_price});
        console.log("substract price: " + new_price)
    }

     //update quantity of a product
     const addQty = (ev, prdcindex, name, price, qty) => {

      const new_qty = qty + 1;
      const new_price = (price/qty) * new_qty; //(price/qty) return the unit price

      //update the product price and qty values
      cart[prdcindex].price = new_price;
      cart[prdcindex].qty = new_qty;

     
      //Get the new total price inside the cart
      const arr_of_all_prdcs_price = cart.map((a) => a.price); //get only products price in array
      
      const cart_total = arr_of_all_prdcs_price.reduce((total,val) => total + val);
      setCartTotal({total: cart_total});

      setReset([]);
       
    }

    return(
    <>
       <span >Items: { disPrdName(cart) } </span>
    </>
    )
}