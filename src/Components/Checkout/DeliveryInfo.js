import  React, { useContext, useEffect } from 'react';
import { CustomerContext } from '../Contexts/CustomerContext';
import { ContextReset } from '../Contexts/ContextReset';
import { useForm } from 'react-hook-form';
import './../../Css/landing-page-style.css';
import { DeliveryContext } from '../Contexts/DeliveryContext';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const DeliveryInfo = () => {
   const [ deliveryInfo, setDeliveryInfo ] = useContext(DeliveryContext);
   const [ myreset, setReset ] = useContext(ContextReset);
   const { register, handleSubmit, errors } = useForm();

   useEffect(()=>{
        //Format the phone number for a better layout
        const ph =  document.getElementById('thePhone');
        ph.addEventListener('keyup',function(evt){
                let phoneNumber = document.getElementById('thePhone');
                phoneNumber.value = phoneFormat(phoneNumber.value);
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
   

    const onSubmit = (data) =>{

         console.log(data);
         setDeliveryInfo({
             firstName: data.firstName,
             email: data.email,
             phoneNumber: data.phoneNumber,
             custAddress1: data.custAddress1,
             custCity: data.custCity,
             zipCode: data.zipCode,
             deliveryStatus: "yes"
         });

         toastDisplay();
    }

    const toastDisplay = () => { toast.success("Delivery info successfuly saved",  {position: toast.POSITION.TOP_LEFT})}
    
    return(
        <div id="reg-form" className="register-form">
               
                <ToastContainer />
                {/* <h1>Create your account</h1> */}
                <form onSubmit={ handleSubmit(onSubmit) }>
                    <input className="input-form cust-registration" type="text" name="firstName"  ref={register({ required: true, minLength: 2 })} placeholder="Your Name"/><br/> 
                       <div style={{color:"red"}}> 
                         {errors.firstName && errors.firstName.type === 'required' && ( <p> * Please enter your name </p> )} 
                         {errors.firstName && errors.firstName.type === 'minLength' && ( <p> * Must be at least 2 characters </p> )}
                       </div>

                    
                    <input className="input-form cust-registration" type="text" name="email" ref={register({required: true, })} placeholder="Enter your email"  /><br/>
                       <div style={{color:"red"}}> {errors.email && errors.email.type === 'required' && ( <p> * Please enter your email </p> )} </div>

                    <input className="input-form cust-registration" type="text" id="thePhone" name="phoneNumber" ref={register({ required: true, minLength: 10, pattern: /\d+/ })} placeholder="Enter your phone number"/><br/>
                       <div style={{color:"red"}}>
                           { errors.phoneNumber?.type === 'required' && "* Please enter your phone number"}
                           { errors.phoneNumber?.type === 'minLength' && "* Must be only numbers"}
                           { errors.phoneNumber?.type === 'pattern' && "* Must be 10 digits"} 
                       </div>

                    <input className="input-form cust-registration" type="text" name="custAddress1"   ref={register({required: true, maxLength: 150,})} placeholder="Your address"  /><br/>
                       <div style={{color:"red"}}>
                           {errors.custAddress1?.type === 'required' && "* Please enter your address" }
                           {errors.custAddress1?.type === 'maxLength' && "* Please enter a valid address" }
                       </div>
                    
                    {/* <input className="input-form cust-registration" type="text" name="custAddress2"   ref={register} placeholder="Apartment, house, office #" /><br/> */}
                    
                    <div style={{justifyContent:"center", display:"flex"}}>
                    <ul style={{ display:"grid", gridTemplateColumns:"50% 50%", listStyle:"none", width: "100%", marginTop: "5px" }}>
                        <li>
                            <input className="input-form cust-registration" type="text" name="custCity" ref={register({ required: true, })} placeholder="Enter the city" /><br/>
                               <div style={{color:"red"}}>{errors.custCity?.type === 'required' && " * Please enter the city name "}</div>
                        </li>
                        <li>
                            <input className="input-form2" type="text" name="zipCode"   ref={register({ required: true, pattern: [0-9], maxLength: 5, minLength: 5})} placeholder="Enter the zip code" /><br/>
                              <div style={{color:"red"}}>
                                   {errors.zipCode?.type === 'required' && "* Please enter your zip code " }
                                   {errors.zipCode?.type === 'pattern' && " * Must be numbers only " }
                                   {errors.zipCode?.type === 'maxLength' && "* Must be 5 digits"}
                                   {errors.zipCode?.type === 'minLength' && "* Must be 5 digits"}
                              </div>
                        </li>
                    </ul>
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

            </div>
    )
}