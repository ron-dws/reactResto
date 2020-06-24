import React, { Component } from 'react';
import './../Css/landing-page-style.css';
import Section_2_right from './Section_2_right';

export class Body_section_2 extends Component{
    constructor(props){
        super(props);
        this.state = {
            
        }
    }
    render(){
        return(
           <div className="main-body-section-2">
               <div className="h1-section-2-container">
                 <h1 className="h1-section-2">All Your Food</h1>
               </div>
                <section className="section-2">
                    <div className="section-2-left">
                        
                    </div>
                    <div className="section-2-right">
                        <Section_2_right />
                    </div>
                </section>
           </div>
        );
    }
}

export default Body_section_2;