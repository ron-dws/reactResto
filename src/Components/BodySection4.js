import React, { useContext } from 'react';
import './../Css/landing-page-style.css';
import { CartContext } from './CartContext';
import { AllprdcsContext } from './AllprdcsContext';
import { FilterContext } from './FilterContext';
import { ContextReset } from './ContextReset';
import { TotalContext } from './TotalContext';

const BodySection4 = ( ) => {
  const [ cart, setCart ] = useContext(CartContext);
    const [ filterData, setFilterData ] = useContext(FilterContext);
    const [ myreset, setReset ] = useContext(ContextReset);
    const [ cartTotal, setCartTotal ] = useContext(TotalContext);

    // React.useEffect(() => {
    //     setCart([{total: 0},{name:"", price:""}]);
    //   }, []);

    const displaySomePrdcs = (prdcs) => {
        let getPrdcsToDisplay = prdcs.slice(0,8).map((val, index) =>(
            <div key={index}>
                <li className="li-item">
                    <img className="img-prdcs" src={ val.image_url } alt="product" />
                    <p className="short-description">{ /*prdc_arr.shortDescription */ }</p>
                    <a href="https://i.picsum.photos/id/67/200/150.jpg" className="a-prdc-detail" >{val.first_brewed}</a>
                    <p className="prdc-price">${ val.ibu }</p>
                    <button type="button" className="add-to-cart" onClick={() => addPrdc(cart, val.name, val.ibu)}>add to cart</button> 
                </li>
            </div>
        ));
        
        return getPrdcsToDisplay;
    }

    
    const addPrdc = (cart, name, price) => {
        //e.preventDefault();

        //set the product
        const prdc_in_cart = { name: name, price: price, qty: 1 }

        //Check if the product already exist before adding to the cart
        if(!cart.length){
            setCart(current_cartState => [...current_cartState, prdc_in_cart]);
            setCartTotal({total: price});
            return;
        }
        var hasDuplicates = cart.some((current_Incart) => {
         if(current_Incart.name === name){
                return true;
            }else{
                return false;
            } 
         });
 
         if(hasDuplicates){
 
             //The product is already inside the cart
             alert("product already in cart");
             return;
 
         }else{
 
             //We add the product to the cart
             setCart(current_cartState => [...current_cartState, prdc_in_cart]);
         }


        //Get the total price inside cart
        const newArray = cart.map((a) => ({...a})); //Copy cart so your not messing with its values
        const cart_total = newArray.map(item => item.price).reduce((prev, next) => prev + next);
        //Add it with price
        const new_total = cart_total + price;
        console.log("-------Total-----");
        setCartTotal({total: new_total});
    }

    return(
     <>
     <div id="display-produtcs-mobile" className="body-section-4" >
        <h1 style={{ color: "rgba(54, 54, 59, 0.93)" }}> Special Drink</h1>
        <ul className="hs full no-scrollbar">
          { displaySomePrdcs(filterData) }
        </ul>  
      </div>
     </>
    )
}

export default BodySection4;