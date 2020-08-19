import React, { useContext } from 'react';
import axios from 'axios';
import '../Css/landing-page-style.css';
import { LoginContext } from './Contexts/LoginContext';
import { CustomerContext } from './Contexts/CustomerContext';
import { DeliveryContext } from './Contexts/DeliveryContext';


export const Login = () => {
    const [ loginResult, setLoginResult ] = useContext(LoginContext);
    const [ custInfo, setCustInfo ] = useContext(CustomerContext);
    const [ deliveryAdd, setDeliveryInfo ] = useContext(DeliveryContext);

 
    const loginCheck = (e)=>{
        e.preventDefault();
        const email = document.querySelector('input[name="email"]').value;
        const password = document.querySelector('input[name="password"]').value;

        //Check the validation has passed the test
        let val_return = check_validation(email, password);

        if(!val_return){
          console.log("cannot process login");
          return;
        }

        //Send request to server & handle response
        const test_cust = "cust";
        const test_admin = "admin"
        const result_login = "cust";
        
        if(result_login === test_cust){
          //success login
          //alert(email + "  " + password);
          setLoginResult({getLogin: 'custSucc' });

          //get cust data and record (will come from endpoint)
          setCustInfo({fn: 'John', ln: 'Akondjo', email:'wank@yah.com', addresse: '304 Mary neet', city:'Columbus', state:'OH', zip:'54304'});

          setDeliveryInfo({
            firstName: "ron",
            email: "ron@test.com",
            phoneNumber: "6665554444",
            custAddress1: "rue du pres",
            custCity: "Columbus",
            zipCode: "54889",
            deliveryStatus: "yes"
          });

        }else if(result_login === test_admin){
          //alert("admin login");
          setLoginResult({getLogin: 'adminSucc'});

          //

        }else {
          setLoginResult({getLogin: 'no'});

        }
    
    }

  //check inputs validation
  const check_validation = (em, pass)=>{
    const val_em = document.getElementById("validate_log_email");
    const val_ps = document.getElementById("validate_log_pass");
    //hide error validation if inputs fill
    val_em.style.display = "none";
    val_ps.style.display = "none";

    let form_validity = false;

    if(em === "" && pass === ""){
        val_em.style.display = "block";
        val_ps.style.display = "block";
        setTimeout(()=>{val_em.style.opacity = "1";
                        val_ps.style.opacity = "1";
                       },200);
        
    }else if(em === ""){
      val_em.style.display = "block";
      setTimeout(()=>{val_em.style.opacity = "1";},200);

    }else if(pass === ""){
        val_ps.style.display = "block";
        setTimeout(()=>{val_ps.style.opacity = "1";},200);
        
    }else{
      //post login to api
      // console.log(JSON.stringify(this.state));

       form_validity = true;
    }
    return form_validity;
  }
 

  return(
    <div id="reg-form" className="register-form">
        <form onSubmit={ (e) => loginCheck(e) }>
            <input className="input-form" type="text" id="email" name="email" placeholder="Type your email" /><br/>
             <div id="validate_log_email" style={{display:"none"}}><span>* please enter your email</span></div>
            <input className="input-form" type="password" name="password" placeholder="Type your password" /><br/>
             <div id="validate_log_pass" style={{display:"none"}}><span>* please enter your password</span></div>
            <button className="form-btn btn-login" type="submit">Log In</button> <br/>     
        </form>
    </div>
  )

}