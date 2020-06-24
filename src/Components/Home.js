import React from 'react';
import Main_nav from './Main_nav';
import Body_section_1 from './Body_section_1';
import Body_section_2 from './Body_section_2';
import Body_section_3 from './Body_section_3';
import Form_registration from './Form_registration';
import { Footer } from './Footer';
import Products_display from './Products_display';
import BodySection4 from './BodySection4';
import Filter_products from './FilterProducts';



export const Home = () => {
    return(
        <>
         <Body_section_1 />
         <Body_section_2 />
         <Body_section_3 />
         <Form_registration />
         <Filter_products />
         <Products_display /> 
         <BodySection4 />
         <Footer />
        </>
    )
}