import React, { Component } from 'react';
import './../../Css/landing-page-style.css';


class Main_nav extends Component {
    constructor(props){
        super(props);
        this.state = {

        }
    }

    showNav(){
        var  x = document.getElementById("ulid-nav-bar-main");
        //var  y = document.getElementsByClassName("ul-nav-bar-main");
        x.classList.toggle("ul-nav-bar-main");
    }
    
     render(){
         return(
             <div>
                <div className="nav-mobile" onClick={this.showNav}><i className="fa fa-bars"></i></div>
                <div className="nav-bar-main">
                    <h5 style={{ paddingLeft: "3rem", color: "white" }}>Logo</h5>
                    <ul className="ul-nav-bar-main" id="ulid-nav-bar-main">
                        <a href="https://www.google.com"><li className="li-nav-bar-main"> Home</li></a>
                        <a href="https://www.google.com"><li className="li-nav-bar-main"> Services</li></a>
                        <a href="#reg-form"><li className="li-nav-bar-main"> Register</li></a>
                        <a href="https://www.google.com"><li className="li-nav-bar-main"> About Us</li></a>
                        <a href="https://www.google.com"><li className="li-nav-bar-main">Contact Us</li></a>
                    </ul>
                </div>
             </div>  
         )
     }
}

export default Main_nav;