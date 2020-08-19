import React, { createContext, useState } from 'react';

export const AllprdcsContext = createContext();

export const AllprdcsProvider = (props) => {
    const [allprdcs, setAllPrdcs] = useState([]);
    return(
     <AllprdcsContext.Provider value = {[allprdcs, setAllPrdcs] }>
        { props.children }
     </AllprdcsContext.Provider>
    )   
}