import React, { Component } from 'react';
import './../Css/landing-page-style.css';
import axios from 'axios';

/*
  Get all products from API & display
  06/20/2020
*/

class Products_displays extends Component {
    constructor(props){

        super(props);

        this.state = {
            total:0,
            prdcs_data_fr_api:{}
        }
    }

    //Use axios to get the products from end point (json file)
    componentDidMount = () => { this.fetch_data(); }

    fetch_data = () => {

        //const url_0 = "beers.json";
        const url = "https://api.punkapi.com/v2/beers";
        axios.get(url)
        .then( response => {
                //console.log("Mardi Test");
                console.log(response.data);
                const prdcs_data = response.data;
                this.setState({ prdcs_data_fr_api: prdcs_data });
                }
            )
        .catch( error => console.log("error: "+error))

    }

    displaySomePrdcs = (allPrdcs)=>{
        if(!allPrdcs.length) return null;

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

        //Get only the 8 first products in the sortByDate array
        let getPrdcsToDisplay = sortByDate.slice(0,8).map((val, index) =>(
            <div key={index}>
                <li className="li-each-product">
                    <img className="img-prdcs" src={ val.image_url } alt="product" />
                    <p className="short-description">{ /*prdc_arr.shortDescription */ }</p>
                    <a href="https://i.picsum.photos/id/67/200/150.jpg" className="a-prdc-detail" >{val.first_brewed}</a>
                    <p className="prdc-price">${ val.ibu }</p>
                    <button type="button" className="add-to-cart" onClick={() => this.addPrdc(val.ibu)}>add to cart</button>  
                </li>
            </div>
        ));
 
        return getPrdcsToDisplay;
    }

     
    addPrdc = (val) => {
        //e.preventDefault();
        console.log(val);
        let tt = this.state.total;
        let new_total = tt;
        new_total = tt + val;
        console.log(new_total);
        this.setState({total: new_total});

        //send the total to App
        this.props.parentCallback(new_total);
    }
   
    render(){
        return(
            <>
                {/* <h1 className="h1-all-products">All Products</h1> */}
                <ul className="ul-all-products">
                    <div className="displayPrdcs">{ this.displaySomePrdcs(this.state.prdcs_data_fr_api) }</div>
                </ul> 
            </>
        )
    }
}

export default Products_displays;