//Use axios to get the products from end point (json file)
    //const url_0 = "beers.json";
    const url = "https://api.punkapi.com/v2/beers";

    /*If I don't use useEffect axios will run continuously, 
      the console.log was rendering response from the server
      continuosly
     */
    React.useEffect(() => {
        setCart({total: 0});
        axios.get(url)
        .then( response => {
                console.log(response.data);
                const prdcs_data = response.data;
                //this.setState({ prdcs_data_fr_api: prdcs_data });
                setAllPrdcs(prdcs_data);
                }
            )
        .catch( error => console.log("error: "+error))
      }, []);
    

    const displaySomePrdcs = (allPrdcs)=>{
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
                    <button type="button" className="add-to-cart" onClick={() => addPrdc(val.ibu)}>add to cart</button>  
                </li>
            </div>
        ));
 
        return getPrdcsToDisplay;
    } 