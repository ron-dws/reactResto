import React, { useContext } from 'react';
import './../Css/landing-page-style.css';
import { CartContext } from './CartContext';
import { AllprdcsContext } from './AllprdcsContext';
import { FilterContext } from './FilterContext';

const Products_displays = (props) =>  {
    const [cart, setCart] = useContext(CartContext);
    const [filterData, setFilterData ] = useContext(FilterContext);

    // React.useEffect(() => {
    //     setCart([{total: 0},{name:"", price:""}]);
    //   }, []);

    const displaySomePrdcs = (prdcs) => {
        console.log("products");
        console.log(prdcs);
        let getPrdcsToDisplay = prdcs.slice(0,8).map((val, index) =>(
            <div key={index}>
                <li className="li-each-product">
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

        //Check if Cart already exist in cart
        const prdc_in_cart = { name: name, price: price }

        console.log("new new new");
        console.log(cart);

        //Check if the product already exist before adding to the cart
        if(!cart.length){
            setCart(current_cartState => [...current_cartState, prdc_in_cart]);
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

        //
        console.log(price);
        let tt = cart.total;
        let new_total = tt + price;

        console.log(new_total);
        //setCart([{total: new_total}]); //Modify the total globaly
        console.log("total " + cart.total); 
    }
    return(
        <>
          {/* <h1 className="h1-all-products">All Products</h1> */}
          <ul className="ul-all-products">
                <div className="displayPrdcs">{ displaySomePrdcs(filterData) }</div>  
          </ul> 
          {/* {console.log("data in filter" + filterData)} */}
        </>
    )
    
}

export default Products_displays;