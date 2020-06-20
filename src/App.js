import React, { Component } from 'react';
import './App.css';
import Main_nav from './Components/Main_nav';
import Body_section_1 from './Components/Body_section_1';
import Body_section_2 from './Components/Body_section_2';
import Body_section_3 from './Components/Body_section_3';
import Form_registration from './Components/Form_registration';
import { Footer } from './Components/Footer';
import Products_display from './Components/Products_display';
import Filter_products from './Components/Filter_products';


class App extends Component {
  
   constructor(props){
     super(props)
     this.state = {
       appTotal: 0,
     }
   }

   getTotal = (total, name)=>{
     this.setState({
        appTotal: total,
       })
     console.log("from app: " + this.state.appTotal);
   }

  render(){

    return (
      <div className="App"> 
        <Body_section_1 />
        <Body_section_2 />
        <Body_section_3 />
        <Form_registration />
        <Filter_products theTotal = { this.state.appTotal } />
        <Products_display parentCallback = { this.getTotal } />
        <Footer />
      </div>
    );

  }
}

export default App;
