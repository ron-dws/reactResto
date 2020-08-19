import React, { useContext, useEffect } from 'react';
import './../../Css/landing-page-style.css';
import { CustomerContext } from '../Contexts/CustomerContext';
import axios from 'axios';
import { ContextReset } from '../Contexts/ContextReset';
import { useForm } from 'react-hook-form';

const CustomerRegistration = () => {
   const [ custRegister, setcustRegister ] = useContext(CustomerContext);
   const [ myreset, setReset ] = useContext(ContextReset);
   const { register, handleSubmit, errors } = useForm();

    const onSubmit = (data) => {
        setcustRegister({
            "firstName": data.firstName,
            "address": data.custAddress1,
            "city": data.custCity,
            "zipcode": data.zipCode,
        });
    }

    const Form_clear = (e) => {
        e.preventDefault();
        setcustRegister([{firstName:'', lastName:'', email:'', phoneNumber:''}]);
        console.log(custRegister);
        const x = document.getElementsByClassName("input-form");
        for(var i = 0; i < x.length; i++){
            x[i].value = "";
        } 
    }

    
        return(
            <div id="reg-form" className="register-form">
                {/* <h1>Create your account</h1> */}
                <form onSubmit={ handleSubmit(onSubmit) }>
                   <input className="input-form cust-registration" type="text" name="firstName"  ref={register({required: true, minLength: 2} )} placeholder="Enter your first name"/><br/>
                          <div  style={{color:"red"}}>
                              { errors.firstName?.type === 'required' && "* Please enter your first name " }
                              { errors.firstName?.type === 'minLength' && "* Must be at least 2 characters " }
                          </div>
                   <input className="input-form cust-registration" type="text" name="lastName"   ref={register({required: true, minLength: 2} )} placeholder="Enter your last name" /><br/>
                          <div style={{color:"red"}}>
                             { errors.lastName?.type === 'required' && "* Please enter your last name" }
                             { errors.lastName?.type === 'minLength' && "* Must be at least 2 characters "}
                          </div>

                   <input className="input-form cust-registration" type="text" name="email" ref={register({required: true,})} placeholder="Enter your email" /><br/>
                          <div style={{color:"red"}}>
                             { errors.email?.type === 'required' && "* Please enter your email" }
                          </div>

                   <input className="input-form cust-registration" type="text" name="phoneNumber" ref={register({ required: true, minLength: 10, pattern: /\d+/ })} placeholder="Enter your phone number" /><br/>
                         <div style={{color:"red"}}>
                            { errors.phoneNumber?.type === 'required' && "* Please enter your phone number"}
                            { errors.phoneNumber?.type === 'minLength' && "* Must be at least 10 digits"}
                            { errors.phoneNumber?.type === 'pattern' && "* Must be only numbers"} 
                         </div>

                   <input className="input-form cust-registration" type="text" name="custAddress1"   ref={register({required: true, maxLength: 150 })} placeholder="Your address" /><br/>
                         <div style={{color:"red"}}>
                           {errors.custAddress1?.type === 'required' && "* Please enter your address" }
                           {errors.custAddress1?.type === 'maxLength' && "* Please enter a valid address" }
                         </div>

                   {/* <input className="input-form cust-registration" type="text" name="custAddress2"   ref={register} placeholder="Apartment, house, office #" /><br/> */}
                          
                   <input className="input-form cust-registration" type="text" name="custCity" ref={register({required: true})} placeholder="Your city" /><br/>
                          <div style={{color:"red"}}>{errors.custCity?.type === 'required' && " * Please enter the city name "}</div>

                   <div style={{justifyContent:"center", display:"flex"}}>
                   <ul style={{ display:"grid", gridTemplateColumns:"50% 50%", listStyle:"none", width: "100%", marginTop: "5px" }}>
                       <li>
                          <select className="input-form2" name="custState" id="cust_sate"  >
                                <option value="minnesota">Minnesota</option>
                                <option value="ohio">Ohio</option>
                                <option defaultValue value="wisconsin">Wisconsin</option>
                                <option value="Texas">Texas</option>
                          </select><br/>
                       </li>
                       <li>
                          <input className="input-form2" type="text" name="zipCode" ref={register({ required: true, pattern: [0-9], maxLength: 5, minLength: 5})} placeholder="Your zip code" /><br/>
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
                            <button className="form-btn-cust-register"  type="submit">Register</button> <br/>  
                        </li>
                        <li>
                            <button className="form-btn-cust-register" type="button" onClick={ (e) => Form_clear(e) }>Clear</button> <br/>
                        </li>
                    </ul>
                   </div>

                   
                      
                </form>

                
            </div>
        )
}

export default CustomerRegistration;