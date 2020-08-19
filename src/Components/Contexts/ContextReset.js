import React, { createContext, useState } from 'react';

export const ContextReset = createContext();

export const ContextProvider = (props) => {
    const [ myreset, setReset ] = useState([]);
    
    return(
        <ContextReset.Provider value = {[ myreset, setReset ]}>
            {  props.children }
        </ContextReset.Provider>
    )
}
