import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import { Home } from "./Components/Home";
import { ShoppingCart } from "./Components/ShoppingCart";
import { CartProvider } from './Components/CartContext';
import { AllprdcsProvider } from './Components/AllprdcsContext';
import { FilterProvider } from './Components/FilterContext';
import { ErrorPage } from './Components/ErrorPage';


const App = () => {
  
  //  constructor(props){
  //    super(props)
  //    this.state = {
  //      appTotal: 0,
  //    }
  //  }

  const getTotal = (total, name)=>{
     this.setState({
        appTotal: total,
       })
     console.log("from app: " + this.state.appTotal);
   }

    return (
      <div className="App"> 
       <BrowserRouter>
        <AllprdcsProvider>
            <CartProvider>
              <FilterProvider>

                <Switch>
                  <Route exact path="/" component = { Home } />
                  <Route path = "/shoppingcart" component = { ShoppingCart } />
                  <Route path = "*" component = { ErrorPage } />
                </Switch>
                
              </FilterProvider>
            </CartProvider> 
          </AllprdcsProvider>
       </BrowserRouter> 
       
        {/* <Filter_products theTotal = { this.state.appTotal } />
        <Products_display parentCallback = { this.getTotal } /> */}
      </div>
    );
}

export default App;

