import React from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import { Home } from "./Components/Home";
import { ShoppingCart } from "./Components/ShoppingCart";
import { ValidationAndPayment } from './Components/Checkout/ValidationAndPayment';
import { UpdateCart } from './Components/UpdateCart';
import { UpdateDeliveryInfo } from './Components/UpdateDeliveryInfo';
import { CartProvider } from './Components/Contexts/CartContext';
import { AllprdcsProvider } from './Components/Contexts/AllprdcsContext';
import { FilterProvider } from './Components/Contexts/FilterContext';
import { ContextProvider } from './Components/Contexts/ContextReset';
import { TotalProvider } from './Components/Contexts/TotalContext';
import { ErrorPage } from './Components/ErrorPage';

import { CustomerProvider } from './Components/Contexts/CustomerContext';
import { LoginProvider } from './Components/Contexts/LoginContext';

import { ProductDetails } from './Components/ProductDetails';
import { DeliveryProvider } from './Components/Contexts/DeliveryContext';
import { DeliveryoptionsProvider } from './Components/Contexts/DeliveryoptionsContext';




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
       <HashRouter>
        <AllprdcsProvider>
            <CartProvider>
              <FilterProvider>
                <ContextProvider>
                  <TotalProvider>
                    <CustomerProvider>
                      <LoginProvider>
                        <DeliveryoptionsProvider>
                          <DeliveryProvider>
                       
                            <Switch>
                              <Route exact path="/" component = { Home } />
                              <Route path= "/updatecart" component = { UpdateCart } />
                              <Route path= "/updatedelivery" component= { UpdateDeliveryInfo } />
                              <Route path = "/shoppingcart" component = { ShoppingCart } />
                              <Route path = "/productdetail/:value" component = { ProductDetails } />
                              <Route path = "/payment" component = { ValidationAndPayment } />
                              <Route path = "*" component = { ErrorPage } />
                            </Switch>

                          </DeliveryProvider>
                        </DeliveryoptionsProvider>
                     </LoginProvider>
                    </CustomerProvider>
                  </TotalProvider>
                </ContextProvider> 
              </FilterProvider>
            </CartProvider> 
          </AllprdcsProvider>
       </HashRouter>
      </div>
    )
}

export default App;

