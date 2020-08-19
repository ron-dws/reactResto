import React, { useContext, useEffect } from 'react';
import './../Css/landing-page-style.css';
import { CartContext } from './Contexts/CartContext';
import { AllprdcsContext } from './Contexts/AllprdcsContext';
import { FilterContext } from './Contexts/FilterContext';
import { ContextReset } from './Contexts/ContextReset';
import { TotalContext } from './Contexts/TotalContext';
import { DisplayCartPrdcs } from './DisplayCartPrdcs';
import axios from 'axios';

export const Filter_products = ( ) => {
    const [cart, setCart] = useContext(CartContext);
    const [allprdcs, setAllPrdcs] = useContext(AllprdcsContext);
    const [ myreset, setReset ] = useContext(ContextReset);
    const [filterData, setFilterData] = useContext(FilterContext);
    const [ cartTotal, setCartTotal ] = useContext(TotalContext);
    const search_name = "product";

    const Prdc_to_search = (e) => { e.target.name = e.target.value; }

    /*
    Get all products from API & display
    06/20/2020
    */

    //Use axios to get the products from end point (json file)
    //const url_0 = "beers.json";
    const url = "https://api.punkapi.com/v2/beers";

    /*If I don't add [] with use useEffect, axios will run continuously, 
      the console.log was rendering response from the server
      continuosly
     */
    React.useEffect(() => {
        axios.get(url)
        .then( response => {
                console.log(response.data);
                const prdcs_data = response.data;
                setAllPrdcs(prdcs_data);
                displayDefault(prdcs_data); //default -> Will display the first time the page load
                }
            )
        .catch( error => console.log("error: "+error));
        
      }, []);

      useEffect(() => {
        //Hide or display checkout & clear cart btn
        checkoutDisplay();
      })
    
      //Filter by ....
      const displayDefault = (all) => {
          
        if(!all.length) { return null; }

        let sortById = all.sort((a,b)=>{
            let prdcid_a = a.id;
            let prdcid_b = b.id;
            return prdcid_a - prdcid_b;
        })
        setFilterData(sortById);

      }

      //Filter by date
      const displaySomePrdcs = (allPrdcs)=>{
        if(!allPrdcs.length) { return null; }

        //Sort products by Date
        let sortByDate = allPrdcs.sort((a,b) => { 
            //return (a.first_brewed > b.first_brewed) ? 1 : ((b.first_brewed > a.first_brewed) ? -1 : 0);
            let new_date_a = a.first_brewed;
            let new_dd_arr_a = new_date_a.split("/");
            let new_dd_reverse_a = new_dd_arr_a.reverse();
            let new_dd_st_again_a = new_dd_reverse_a.join("-"); //date a in the format we want (good for sorting)

            let new_date_b = b.first_brewed;
            let new_dd_arr_b = new_date_b.split("/");
            let new_dd_reverse_b = new_dd_arr_b.reverse();
            let new_dd_st_again_b = new_dd_reverse_b.join("-"); //date b in the format we want (good for sorting)

            //return new Date(new_dd_st_again_b) - new Date(new_dd_st_again_a);
            return new Date(new_dd_st_again_a) - new Date(new_dd_st_again_b);
            
        });
        console.log(sortByDate);
        setFilterData(sortByDate);

      } 

      //Filter By Price
      const displayByPrice = (allProducts) => {
            if(!allProducts.length) { return null }

            let sortByPrice = allProducts.sort((a,b) => { 
                let price_a = a.ibu;
                let price_b = b.ibu;
                return price_a - price_b; 
            });
            console.log(sortByPrice);
            setFilterData(sortByPrice);
      }

      //Apply the filters
      const filterSelected = () => {
          let optionSelected = document.getElementById("prdc-filter-display");
          if(optionSelected.value === "By_date"){
              //alert("by date");
              displaySomePrdcs(allprdcs);
              setReset([]);
          }else if(optionSelected.value === "By_Price"){
              //alert("by price");
              displayByPrice(allprdcs);
              setReset([]);
          }else if(optionSelected.value === "By_default"){
              //default
              displayDefault(allprdcs);
              setReset([]);
          }
      }

    const checkoutDisplay = () => {
        const get_checkout_show = document.querySelector("#checkout-show");
        if(!cart.length){
            get_checkout_show.style.display = 'none';
        }else{
            get_checkout_show.style.display = 'block';
        }
    }
      
    const cleanCart = (e) => {
        e.preventDefault();
        const confirmResponse = window.confirm("are you sure you want to clear your cart ?");
        if(confirmResponse){
            setCart([]);
            setCartTotal([]);
           // localStorage.removeItem("allprdcs");
        }else{
            return;
        }
        
    }
 
    const sendToCheckout = (e) =>{
        
        e.preventDefault();
        window.location.href = "./#/shoppingcart";
 
    }

        return(
            <>
            <div  id="products-display">
              <h1>Our Products</h1>
              <ul className="ul-filter-prdc">
                  <li>
                      <select id="prdc-filter-display" name="nm_prd_filter_display" onChange = { filterSelected }>
                          <option value="By_default">By products</option> 
                          <option value="By_date">By Date</option> 
                          <option value="By_Price">By Price</option>   
                      </select> 
                  </li>
                  <li>
                      <input 
                         type="text"
                         className = "input-prdc-search"
                         placeholder = "Search product"
                         onChange={ Prdc_to_search }
                         name = "prdc"
                        //  value = { search_name }
                      />
                  </li>
                  <li> Total in cart:<span className="filter-total-in-cart">${ cartTotal.total } </span></li>
              </ul>
              
             <DisplayCartPrdcs />
             <br/>
             <div id="checkout-show">
                <button type="button" style={{padding:"6px", borderRadius:"5px", margin:"5px", border:"none",background:"dodgerblue", color:"white" }} onClick={e => sendToCheckout(e) }>Checkout</button>
                <button type="button" style={{padding:"6px", borderRadius:"5px", margin:"5px", border:"none",background:"dodgerblue", color:"white" }} onClick={ e => cleanCart(e) }>clean cart</button>
             </div>
           </div>
         </>
        )
}

export default Filter_products;