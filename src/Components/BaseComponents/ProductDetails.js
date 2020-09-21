import React, { useContext } from 'react';
import '../../Css/product-detail.css';
import axios from 'axios';
import { HashLink } from 'react-router-hash-link';
import { ContextReset } from './../Contexts/ContextReset';
import { TotalContext } from './../Contexts/TotalContext';
import { CartContext } from './../Contexts/CartContext';




export const ProductDetails = (props) => {
    const [myreset, setReset] = useContext(ContextReset);
    const [ cart, setCart ] = useContext(CartContext);
    const [ cartTotal, setCartTotal ] = useContext(TotalContext);

    const productId = props.match.params.value;
    const url = "https://api.punkapi.com/v2/beers/"+productId;

    React.useEffect(()=>{
        axios.get(url)
        .then( response =>{
            setReset(response.data);
        })
        .catch(() => {
            console.log("Couldn't retrieve the product detail");
        });

    },[]);

    const displayDetail = (mycart, prodc) => {
        if(!prodc.length) { return null;}
        let getPrdcDetail = prodc.map((val,index)=>(
          <div key={index}>
            <li className="li-product-detail">
               <div className="product-detail-left">
                  <img className="img-prdcs" src={ val.image_url } alt="product" />
                  <p className="prdc-detail-title" >{ val.tagline }</p>
                  <p className="short-description">{ /*prdc_arr.shortDescription */ }</p>
                  <p className="prdc-detail-date" >{val.first_brewed}</p>
                  <p className="prdc-price-detail">${ val.ibu }</p>
                  <button type="button" className="add-to-cart" onClick={() => addPrdcFromDetail(mycart, prodc, val.name, val.ibu)}>add to cart</button> 
                  <br/>
                  <HashLink to="/#products-display">
                    <button type="button" id="btn-continue-shopping" className="shoppingCart-btn" >
                        <i className="fa fa-long-arrow-left" style={{font:"10px", paddingRight:"5px"}}></i>
                        Continue shopping
                    </button>
                  </HashLink> 
               
               </div>
               <div className="product-detail-right">
                  <p className="prdc-detail-title" style={{ fontWeight:"bold" }}>Description:</p> 
                  <p className="prdc-detail-title" style={{ marginTop:"0" }} >{ val.description }</p>
                  <p className="prdc-detail-title" style={{ fontWeight:"bold" }}>Volume:</p> 
                  <p className="prdc-detail-title" style={{ marginTop:"0" }} >{ val.boil_volume.unit }</p>
                  <p className="prdc-detail-title" style={{ fontWeight:"bold" }}>url:</p>
                  <p className="prdc-detail-title" style={{ marginTop:"0" }}> { val.image_url }</p>
               </div>
            </li>
          </div>
        ));
      return getPrdcDetail;
    }

    const addPrdcFromDetail = (mycart, prdc, name, price) => {
      //e.preventDefault();

      //set the product
      const prdc_in_cart = { name: name, price: price, qty: 1 }

      console.log(mycart);

      const auto_triger = () =>{
        const back_to_shop = document.getElementById("btn-continue-shopping");
        back_to_shop.click();
      }

      //Check if the product already exist before adding to the cart
      if(!mycart.length){
          setCart(current_cartState => [...current_cartState, prdc_in_cart]);
          setCartTotal({total: price});
          alert(name + " added to cart ");
          
          auto_triger(); //auto click on the 'continue shopping'
          return;
      }

      

      var hasDuplicates = mycart.some((current_Incart) => {
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

           //We add the product to the existing products inside the cart
           alert(name + " added to cart ");
           setCart(current_cartState => [...current_cartState, prdc_in_cart]);
           
       }


      //Get the total price inside the cart
      const newArray = mycart.map((a) => ({...a})); //Copy cart so your not messing with its values
      const cart_total = newArray.map(item => item.price).reduce((prev, next) => prev + next);

      //Add it with price
      const new_total = cart_total + price;
      console.log("-------Total-----");
      setCartTotal({total: new_total});
      
      auto_triger(); //auto click on the 'continue shopping'
  }


    return(
        <>
        <div className="product-detail">
          <ul className="ul-product-detail">
                <div className="display-prdc-detail">{ displayDetail(cart, myreset) }</div>  
          </ul> 
        </div> 
        </>
    )
}