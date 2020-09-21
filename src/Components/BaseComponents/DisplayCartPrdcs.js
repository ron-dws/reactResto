import React, { useContext } from 'react';
import { CartContext } from './../Contexts/CartContext';
import { ContextReset } from './../Contexts/ContextReset';
import { TotalContext } from './../Contexts/TotalContext';
import '../../Css/landing-page-style.css';

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
              <ul className = "ul-display-cart-prdcs">
                <li className = "li-display-cart-prdcs-name">{ val.name }</li>
                <li className = "li-display-cart-prdcs">${ val.price }</li>
                <li className = "li-display-cart-prdcs">QTY: { val.qty }</li>
                <li className = "li-display-cart-prdcs-plus" onClick={ e => addQty (e, index, val.name, val.price, val.qty ) }>+</li>
                <li className = "li-display-cart-prdcs-minus"  onClick={ e => substractQty (e, index, val.name, val.price, val.qty ) }>-</li>
                <li className = "li-display-cart-prdcs-delete"  onClick={ e => deletePrdc (e, index, val.price ) }>X</li>
              </ul>
            </div> 
        ));
        return prdcNameInCart;
     }


     const deleteConfirm = (e, prdcindex, price) => {
        const confirmDeletion = window.confirm("Are you sure you want to delete the product ?");
        if (confirmDeletion == true) {
          deletePrdc(e, prdcindex, price);
          return;
        } else {
          return;
        }
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

     //substract quantity of a product
     const substractQty = (ev, prdcindex, name, price, qty) => {

      //Check if it is only 1 of this product in the cart
      if(qty === 1){
        alert("only 1 product in cart");
        return;
      }
      const new_qty = qty - 1;
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
       <span >Products: { disPrdName(cart) } </span>
    </>
    )
}