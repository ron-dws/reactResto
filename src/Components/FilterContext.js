import React, { createContext, useState } from 'react';

export const FilterContext = createContext();

export const FilterProvider = (props) =>{
    const [ filterData, setFilterData ] = useState([]);
    return(
       <FilterContext.Provider value= {[ filterData, setFilterData ]}>
           { props.children }
       </FilterContext.Provider>
    )
}