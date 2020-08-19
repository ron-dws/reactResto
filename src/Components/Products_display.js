import React, { useContext } from 'react';
import './../Css/landing-page-style.css';
import './../Css/add-cartnote-modal.css';
import { CartContext } from './Contexts/CartContext';
import { AllprdcsContext } from './Contexts/AllprdcsContext';
import { FilterContext } from './Contexts/FilterContext';
import { ContextReset } from './Contexts/ContextReset';
import { TotalContext } from './Contexts/TotalContext';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';

const Products_displays = () =>  {
    const [ cart, setCart ] = useContext(CartContext);
    const [ filterData, setFilterData ] = useContext(FilterContext);
    const [ myreset, setReset ] = useContext(ContextReset);
    const [ cartTotal, setCartTotal ] = useContext(TotalContext);


    // Get the modal
    var modal = document.getElementById("myModal");

    // Get the <span> element that closes the modal
    var span = document.getElementsByClassName("close")[0];

    
    const displaySomePrdcs = (prdcs) => {
        let getPrdcsToDisplay = prdcs.slice(0,8).map((val, index) =>(
            <div key={index}>
                
                    <li className="li-each-product">
                       <Link to= { "/productdetail/"+val.id } >
                        <img className="img-prdcs" src={ val.image_url } alt="product" />
                        <p className="short-description">{ /*prdc_arr.shortDescription */ }</p>
                        <p className="a-prdc-detail" >{val.first_brewed}</p>
                        <p className="prdc-price">${ val.ibu }</p>
                        </Link>
                        {/* <button type="button" className="add-to-cart" onClick={() => addNote(cart, val.name, val.ibu)}>add to cart</button> */}
                        <button type="button" className="add-to-cart" onClick={() => addPrdc(cart, val.name, val.ibu)}>add to cart</button> 
                    </li>
                
            </div>
        ));
        
        return getPrdcsToDisplay;
    }

    //Popup suggestion to add a note to the product 
    const addNote = (cart, name, price) => {
       
       // When the user clicks the button, open the modal 
       modal.style.display = "block";
       
       
       // When the user clicks on <span> (x), close the modal
       span.onclick = function() {
         modal.style.display = "none";
       }
       
       // When the user clicks anywhere outside of the modal, close it
       window.onclick = function(event) {
         if (event.target == modal) {
           modal.style.display = "none";
         }
       }

    }

    //Check if a note has been added and add the product to the cart
    const addit = () => {
        //e.preventDefault();
        let note_added = document.getElementById("id-cart-note").value;
        alert(note_added);

        //Add the note and the product to the cart

        //clean the textarea & hide the modal
        note_added = ""; 
        modal.style.display = "none";
      }

    //Cancel adding note
    const cancel_add_note = () => {
        modal.style.display = "none";
    }

    //Add the product to the cart
    const addPrdc = (cart, name, price) => {
        //e.preventDefault();
         
        //modal.style.display = "block";  /*Display the modal to allow the user to enter a note*/ 

        //const getAddResult = 
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
          {/* <h1 className="h1-all-products">All Products</h1> */}
          <ul className="ul-all-products" id="display-products-desktop">
                <div className="displayPrdcs">{ displaySomePrdcs(filterData) }</div>  
          </ul> 

        {/* <!-- Modal--> */}
        <div id="myModal" class="modal">
            <div class="modal-content">
                <span class="close" onClick= { cancel_add_note } >&times;</span>
                <label>Add a note</label><br/>
                <textarea cols="30" rows="6" placeholder="add a note" id="id-cart-note"></textarea><br/>
                <button type="button" onClick = { addit }>Add</button>
                <button type="button" onClick = { cancel_add_note } style={{margin: "5px"}}>Cancel</button>
            </div>
        </div>
        </>
    )
    
}

export default Products_displays;