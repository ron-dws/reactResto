import React, { Component } from 'react';
import Main_nav from './Main_nav';
import './../Css/landing-page-style.css';

window.addEventListener("load",addh1class);

function addh1class(){ 
    let x = document.getElementById("st-main");
    setTimeout(()=>{
        x.classList.add("h1-main-cl");
    },1000);

    setTimeout(()=>{
       x.style.transform = "translate(-50%,-90%)";
    },2000)

    setTimeout(()=>{
        let x = document.getElementById("btn1-main");
            x.style.opacity = 1;
    },3000);
}

function displayName() {
    alert("Welcome");
}

class Body_section_1 extends Component {
    constructor(props){
        super(props);
        this.state = {

        }

    }
    render(){
        return(
            <>
             <div className="main-body-section-1">
                <Main_nav />
                <section id="st-main" className="section-1">
                    <h1 id="h1-main">Here To Serve You</h1>
                    <button id="btn1-main" className="section-1-btn" onClick={ displayName }>Menu</button>
                </section>  
             </div>
             <hr className="hr-bar" />
            </>
        )
    }
}

export default Body_section_1;