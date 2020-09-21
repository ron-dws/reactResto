import React, { Component } from 'react';
import './../../Css/landing-page-style.css';

export class Footer extends Component{
    constructor(props){
        super(props);
        this.state = {

        }

    }
    render(){
        return(
            <div className="my-footer">
                <div className="footer-col-1">
                    <ul className="ul-my-footer-col-1">
                        <li className = "li-my-footer"><a href="http://google.com">Home</a></li>
                        <li className = "li-my-footer"><a href="http://google.com">Services</a></li>
                        <li className = "li-my-footer"><a href="http://google.com">About Us</a></li>
                        <li className = "li-my-footer"><a href="http://google.com">Contact Us</a></li>
                    </ul>
                </div>
                <div className="footer-col-2 ">
                    <h3>How We Started</h3>
                    <p>
                       1903 State Route 256 <br/>
                       Reynoldsburg,  OH  43068 <br/>
                       614/759-7764 <br/>
                       https://www.myresto.com
                    </p>
                </div>  
            </div>
        )
    }
}