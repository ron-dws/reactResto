import React, { createContext, useState } from 'react';


export const TotalContext = createContext();

export const TotalProvider = (props) => {
    const [ cartTotal, setCartTotal ] = useState([{total: 0}]);

    return(
        <TotalContext.Provider value={[cartTotal, setCartTotal]}>
            { props.children }
        </TotalContext.Provider>
    )

}
