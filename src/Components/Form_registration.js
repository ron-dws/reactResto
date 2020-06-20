import React, { Component } from 'react';
import './../Css/landing-page-style.css';
import axios from 'axios';

class Form_registration extends Component {
    constructor(props){
        super(props);

        //create state to hold the data
        this.state = {
            firstName: "",
            lastName: "",
            email: "",
            phoneNumber: "",
        }
    }

    Value_has_changed = (e) => {this.setState( { [e.target.name]: e.target.value } )}

    Form_submited = (e) =>{
        const url ="www.you.com/json"
        e.preventDefault();
        //console.log(this.state);
        axios.post(url, this.state)
         .then(response => { console.log(response); })
         .catch(error => { console.log(error) })
    }

    Form_clear = () => { this.setState (
        {
            firstName: "",
            lastName: "",
            email: "",
            phoneNumber: "",
        }
    )}

    
    render(){
        const {firstName, lastName, email, phoneNumber } = this.state
        return(
            <div id="reg-form" className="register-form">
                <div className="hr-register-form-container">
                   <hr className="hr-register-form" />
                </div>
                <h1>Please Fill The Form</h1>
                <form onSubmit={ this.Form_submited }>
                   <input className="input-form" type="text" name="firstName"   onChange={this.Value_has_changed} value={ firstName } placeholder="Your name"/><br/>
                   <input className="input-form" type="text" name="lastName"    onChange={this.Value_has_changed} value={ lastName }    placeholder="Enter your last name" /><br/>
                   <input className="input-form" type="text" name="email"       onChange={this.Value_has_changed} value={ email }       placeholder="Enter your email" /><br/>
                   <input className="input-form" type="text" name="phoneNumber" onChange={this.Value_has_changed} value={ phoneNumber } placeholder="Enter your phone number" /><br/>
                   <button className="form-btn" type="submit">Register</button> <br/>     
                </form>

                <button className="form-btn" onClick={this.Form_clear}>Clear</button> <br/>
            </div>
        )
    }
}

export default Form_registration;