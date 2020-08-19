import React, { useEffect, useContext } from 'react';
import { DeliveryContext } from '../Contexts/DeliveryContext';
import { useForm } from 'react-hook-form';
import '../../Css/landing-page-style.css';

export const PickupInfo = () => {
   const [ deliveryInfoPickup, setDeliveryInfoPickup ] = useContext(DeliveryContext);
   const { register, handleSubmit, errors } = useForm();
    
   useEffect(()=>{
        //Format the phone number for a better layout
        const ph =  document.getElementById('thePhone_pickup');
        ph.addEventListener('keyup',function(evt){
                //let phoneNumber = document.getElementById('thePhone');
                ph.value = phoneFormat(ph.value);
        });
    
    })

    function phoneFormat(phoneValue){
        // Strip all characters from the input except digits
        phoneValue = phoneValue.replace(/\D/g,'');

        // Trim the remaining input to ten characters, to preserve phone number format
        phoneValue = phoneValue.substring(0,10);

        // Based upon the length of the string, we add formatting as necessary
        var size = phoneValue.length;
        if(size == 0){
            phoneValue = phoneValue;
        }else if(size < 4){
            phoneValue = '('+phoneValue;
        }else if(size < 7){
            phoneValue = '('+phoneValue.substring(0,3)+') '+phoneValue.substring(3,6);
        }else{
            phoneValue = '('+phoneValue.substring(0,3)+') '+phoneValue.substring(3,6)+' - '+phoneValue.substring(6,10);
        }
        return phoneValue; 
    }

   const onSubmit = (data) => {
       setDeliveryInfoPickup({
           firstName: data.firstName,
           phoneNumber: data.phoneNumber,
           deliveryStatus: 'no'
       })
   }

    return(
        <>

          <form onSubmit={ handleSubmit(onSubmit) } style={{padding:"1rem"}}>
                    <input className="input-form cust-registration" type="text" name="firstName"  ref={register({ required: true, minLength: 2 })} placeholder="Your Name"/><br/> 
                       <div style={{color:"red"}}> 
                         {errors.firstName && errors.firstName.type === 'required' && ( <p> * Please enter your name </p> )} 
                         {errors.firstName && errors.firstName.type === 'minLength' && ( <p> * Must be at least 2 characters </p> )}
                       </div>
                    
                       <input className="input-form cust-registration" type="text" id="thePhone_pickup" name="phoneNumber" ref={register({ required: true, minLength: 10, pattern: /\d+/ })} placeholder="Enter your phone number"/><br/>
                       <div style={{color:"red"}}>
                           { errors.phoneNumber?.type === 'required' && "* Please enter your phone number"}
                           { errors.phoneNumber?.type === 'minLength' && "* Must be only numbers"}
                           { errors.phoneNumber?.type === 'pattern' && "* Must be 10 digits"} 
                       </div>
                       
                <div style={{justifyContent:"center", display:"flex"}}>
                        <ul style={{ display:"grid", gridTemplateColumns:"50% 50%", listStyle:"none", width: "100%", marginTop: "5px" }}>
                            <li>
                                <button className="form-btn-cust-register"  type="submit">Save</button> <br/>  
                            </li>
                            <li>
                            
                            </li>
                        </ul>
                </div>
          </form>

        </>
    )
}