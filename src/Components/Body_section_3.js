import React, { Component } from 'react';
import Section_2_right from './Section_2_right';
import './../Css/landing-page-style.css';

class Body_section_3 extends Component {
    constructor(props){
        super(props);
        this.state = {

        }

    }
    
    render(){
        return(
            <div className="main-body-section-2">
                <section className="section-2">
                    <div className="section-2-right">
                        <Section_2_right />
                    </div>
                    <div className="section-2-left">
                        
                    </div>
                </section>
                <div className="hr-register-form-container">
                    <hr className="hr-register-form" />
                </div>
           </div>
        )
    }
}

export default Body_section_3;