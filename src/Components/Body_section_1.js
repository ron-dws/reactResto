import React, { Component } from 'react';
import Main_nav from './Main_nav';
import Nav2 from './Nav2';
import './../Css/landing-page-style.css';



class Body_section_1 extends Component {
    constructor(props){
        super(props);
        this.state = {

        }
    }

   //Animate the main title and button when component load
   componentDidMount = () => { this.addh1class(); }

        addh1class = () => { 
            let x = document.getElementById("st-main");
            setTimeout(()=>{
                x.classList.add("h1-main-cl");
            },1000);

            setTimeout(()=>{
            x.style.transform = "translate(-50%,-65%)";
            },2000)

            setTimeout(()=>{
                let x = document.getElementById("btn1-main");
                    x.style.opacity = 1;
            },3000);
        }

        //If Menu btn clicked -> display "welcome"
        displayName = ()=> {
            alert("Welcome");
        }

    render(){
        return(
            <>
             <div className="main-body-section-1">
                <Nav2 />
                <section id="st-main" className="section-1">
                    <h1 id="h1-main">Here To Serve You</h1>
                    <button id="btn1-main" className="section-1-btn" onClick={ this.displayName }>
                        Menu
                    </button>
                    <br/>
                    <svg>
                        <g>
                            <rect width="150" height="40" stroke="#aaa" strokeWidth="1" fill="none"></rect>
                            <text x="75" y="20" alignmentBaseline="middle" fontSize="20" strokeWidth="0" fill="white" textAnchor="middle">HueLink</text>
                        </g>
                    </svg>
                </section>  
             </div>
             <hr className="hr-bar" />
            </>
        )
    }
}

export default Body_section_1;