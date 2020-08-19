import React from 'react';
import './../../Css/payment-registration.css';
import { useForm } from 'react-hook-form';

export const PaymentRegistration = () => {
    const { register, handleSubmit, errors } = useForm();
    return(
        <> 
            <h1 style={{fontSize:"1.5rem"}}>Enter your card information</h1>
            <input className="input-form-payment cust-registration" type="text" name="cartNumber"  ref={register} placeholder="Your cart number"/><br/>
            <input className="input-form-payment cust-registration" type="text" name="nameOnCart"  ref={register} placeholder="Name on the Cart"/><br/>
            <div style={{ justifyContent:"center", display:"flex"}} >
                <ul style={{ display:"grid", gridTemplateColumns:"48% 48%", gridGap:"4%", listStyle:"none", width: "100%", marginTop: "5px"  }}>
                    <li>
                        <select className="input-form2-payment input-form2-payment-left" name="custState" id="cust_sate" ref={register}  placeholder="Expiration date">
                                <option value="minnesota">January</option>
                                <option value="february">February</option>
                                <option value="march">March</option>
                                <option value="april">April</option>
                        </select><br/>
                    </li>
                    <li>
                        <select className="input-form2-payment input-form2-payment-right" name="custState" id="cust_sate" ref={register} >
                                <option value="2020">2020</option>
                                <option value="2021">2021</option>
                                <option value="2022">2022</option>
                                <option value="2023">2023</option>
                        </select><br/>
                    </li>
                    {/* <li>
                      <input className="input-form2" type="text" name="zipCode"   ref={register} placeholder="Security #" /><br/>
                    </li> */}
                </ul> 
            </div>
            <input className="input-form-payment cust-registration" type="text" name="cvv"   ref={register} placeholder="CVV" /><br/>

            <div className="icon-container" style={{display:"flex", marginTop: "1rem" }}>
              <i className="fa fa-cc-visa" style={{color:"navy", fontSize: "3rem", marginRight: ".5rem" }}></i>
              <i className="fa fa-cc-amex" style={{color:"blue", fontSize: "3rem", margin: "0 .5rem" }}></i>
              <i className="fa fa-cc-mastercard" style={{color:"red", fontSize: "3rem", margin: "0 .5rem"}}></i>
              <i className="fa fa-cc-discover" style={{color:"orange", fontSize: "3rem", margin: "0 .5rem"}}></i>
            </div>
        </>
    )
}