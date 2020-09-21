import React from 'react';
import { findByLabelText } from '@testing-library/react';

export const BusinessInfo = () => {
  return(
       <div className="business-info" style={{ display:"flex", flexDirection:"column", justifyContent:"center" }}>
           <h1 style={{color: "rgba(255, 146, 0, 0.98)", fontWeight: "500" }}>Paz Y Calma</h1>
           <p>3425 Ekie Sud Yaounde Cameroon</p>
           <p>Tel: (237)-645-6767</p>
       </div>
  )
}