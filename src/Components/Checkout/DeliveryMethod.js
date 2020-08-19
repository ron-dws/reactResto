import React, { useContext, useEffect } from 'react';
import { DeliveryoptionsContext } from '../Contexts/DeliveryoptionsContext';

export const DeliveryMethod = () => {
  // useEffect(() => {
  //   checkOptionSelected();
  // },[])


  const [ deliveryOption, setDeliveryOption ] = useContext(DeliveryoptionsContext);

  function checkOptionSelected() {
    const delivery = document.getElementById("delivery");
    const pickup = document.getElementById("pick_up");

    if(delivery.checked){
        setDeliveryOption({ deliveryOption: 'delivery' });
    }else if(pickup.checked){
       setDeliveryOption({deliveryOption: 'pickup'});
    }else{
       setDeliveryOption({deliveryOption: 'no'});
    }
  }

    return(
        <>
         <ul className="delivery-method" style={{padding: "1rem 0", display:"grid", gridTemplateColumns:"50% 50%"}}>
            
            <li>
             <input type="radio" id="delivery" name="methodOfDelivery" onClick={ checkOptionSelected } value="delivery" />
             <label htmlFor="delivery"> Delivery</label>
            </li>
            <li>
              <input type="radio" id="pick_up" name="methodOfDelivery" onClick={ checkOptionSelected } value="pickup" />
              <label htmlFor="pickup"> Pick up</label>
            </li>

          </ul>
        </>
    )
}