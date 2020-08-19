import React, { createContext, useState } from 'react';

export const DeliveryoptionsContext = createContext();

export const DeliveryoptionsProvider = (props) => {
       const [ deliveryOption, setDeliveryOption ] = useState({deliveryOption: 'no'});
       return(
           <DeliveryoptionsContext.Provider value = {[ deliveryOption, setDeliveryOption]}>
               { props.children }
           </DeliveryoptionsContext.Provider>
       )
}