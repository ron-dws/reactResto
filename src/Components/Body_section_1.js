import React, { Component } from 'react';
import Main_nav from './Main_nav';
import Nav2 from './Nav2';
import './../Css/landing-page-style.css';
import { HashLink } from 'react-router-hash-link';



class Body_section_1 extends Component {
    constructor(props){
        super(props);
        this.state = {

        }
    }

    
      
   //Animate the main title and button when component load
   componentDidMount = () => { this.addh1class(); }

        addh1class = () => { 

            //Back to top button display condition
            const myScrollFunc = () => {
                let y = window.pageYOffset;
                const btn_back_top = document.getElementById("back-to-top");
                if (y >= 800) {
                  btn_back_top.style.display = "block";
                } else {
                  btn_back_top.style.display = "none";
                }
              };

            //Check the position of the page to display or hide the back to top button
           // window.addEventListener("scroll", myScrollFunc);

            //Animate the text and buttons in the header
            let x = document.getElementById("st-main");
            setTimeout(()=>{
                x.classList.add("h1-main-cl"); 
            },1000);

            setTimeout(()=>{
            x.style.transform = "translate(-50%,-65%)";
            },2000)

            setTimeout(()=>{
                let x = document.getElementById("btn1-main");
                    x.style.transform = "translate(0,0)";
                    x.style.opacity = 1;
            },3000);

            setTimeout(()=>{
               let x = document.getElementById("special-rect");
               //let y = document.getElementById("special-rect-text");
                   x.classList.add("rect-special");
            },4000);

            setTimeout(()=>{
                let x = document.getElementById("special-rect-text");
                    x.style.opacity = 1;
            },5000)
        }

        
    render(){
        return(
            <>
             <div className="main-body-section-1">
                <Nav2 />
                <section id="st-main" className="section-1">
                    <h1 id="h1-main">Here To Serve You</h1>
                    <HashLink to="/#products-display">
                        <button id="btn1-main" className="section-1-btn">
                            Menu
                        </button>
                    </HashLink>
                    <br/>
                    <svg>
                        <g>
                            <rect width="150" height="40" stroke="#aaa" strokeWidth="1" fill="none" id="special-rect"></rect>
                            <text x="75" y="20" alignmentBaseline="middle" fontSize="20" strokeWidth="0" fill="white" textAnchor="middle" id="special-rect-text">Special</text>
                        </g>
                    </svg>
                </section> 
                <HashLink to="/#top-nav-2">
                  <button id="back-to-top" style={{ borderRadius:"100%", height:"50px", display:"none", cursor:"pointer", width:"50px", position:"fixed", background:"green", color:"white", border:"none", right:"5px", bottom:"5px" }}><i className="fa fa-hand-pointer-o"></i></button> 
                </HashLink>
             </div>
             <hr className="hr-bar" />
             
            </>
        )
    }
}

export default Body_section_1;