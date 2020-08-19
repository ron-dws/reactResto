import React, { createContext, useState } from 'react';

export const DeliveryContext = createContext();

export const DeliveryProvider = (props) => {
    const[deliveryInfo, setDeliveryInfo] = useState({});

    return(
        <DeliveryContext.Provider value = {[ deliveryInfo, setDeliveryInfo ]}>
            {props.children}
        </DeliveryContext.Provider>
    )
}