import React, { useState, createContext } from 'react';

export const CustomerContext = createContext();

export const CustomerProvider = (props) => {
    const [ custInfo, setCustInfo ] = useState({});
    return(
        <CustomerContext.Provider value={[ custInfo, setCustInfo ]}>
            { props.children }
        </CustomerContext.Provider>
    )
}