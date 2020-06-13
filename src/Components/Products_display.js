import React, { Component } from 'react';
import './../Css/landing-page-style.css';
import axios from 'axios';

/*
  Get all products from API & display
  04/28/2020
*/

class Products_displays extends Component {
    constructor(props){
        super(props);

        this.state = {
            prx: '',
        }


        //Use axios to get the products from end point (json file)
            let fetch_data;

            //let fetch_data;
            fetch_data = () => {
                const url_0 = "http://localhost:8080/April_2020/Omarketing/api/customers/read.php";
                //const url = "https://api.punkapi.com/v2/beers";
                axios.get(url_0, { headers: { 'Content-Type' : 'application/json' }})
                .then( response => {
                        console.log("reneeee");
                        console.log(response.data.data[0].firstName);

                        //this.setState({ prx: response.data.data[0].firstName});
                        
                        //  for(var i=0; i < response.data.length; i++){
                        //     console.log("response: " + response.data[i].name);
                        //   }
                        }
                    )
                .catch( error => console.log("error: "+error))
            }
       window.addEventListener("load", fetch_data);
    }

    

    render(){
        return(
            <>
                {/* <h1 className="h1-all-products">All Products</h1> */}
                <ul className="ul-all-products">
                    <li className="li-each-product">
                        <img className="img-prdcs" src={require('../Img/products/prdc1.jpg')} alt="" />
                        <p className="short-description"></p>
                        <a href="https://i.picsum.photos/id/67/200/150.jpg" className="a-prdc-detail" >Get Details</a>
                        <p className="prdc-price">${ this.state.prx }</p>
                    </li>
                    <li className="li-each-product">
                        <img className="img-prdcs" src={require('../Img/products/prdc2.jpg')} alt="" />
                        <p className="short description"></p>
                        <a href="https://i.picsum.photos/id/67/200/150.jpg" className="a-prdc-detail" >Get Details</a>
                        <p className="prdc-price">$450</p>
                    </li>
                    <li className="li-each-product">
                        <img className="img-prdcs" src={require('../Img/products/prdc3.jpg')} />
                        <p className="short description"></p>
                        <a href="https://i.picsum.photos/id/67/200/150.jpg" className="a-prdc-detail" >Get Details</a>
                        <p className="prdc-price">$450</p>
                    </li>
                </ul>
            </>
        )
    }
}

export default Products_displays;