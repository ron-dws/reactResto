import React, {Component} from 'react';
import { HashLink } from 'react-router-hash-link';
import '../Css/nav2.css';


class Nav2 extends Component{

    constructor(props){
        super(props);
        this.state = {

        }   
    }

    //On Mobile -> display the navigation bar on fa-bars clicked
    nav2Clicked = () => {

        const getul = document.querySelector("ul.ulnav2");
        if(getul.style.left === "-100%"){
            getul.style.left = "0%";
        }else if(getul.style.left === "0%"){
            getul.style.left = "-100%";
        }

    }

    //Assign click event and handle it to each menu option
    componentDidMount = () => { this.nav2Mobile(); }

    nav2Mobile = () => {

        let nav_tab = document.querySelectorAll(".linav2");
        for(let i = 0; i < nav_tab.length; i++){
            nav_tab[i].addEventListener("click", this.optionNavClicked);
        }

    }

    //Slide the navigation bar back if menu option is clicked
    optionNavClicked = () => {

        const getul = document.getElementsByTagName("ul");
        getul[0].style.left = "-100%";

    }

    render(){ 
        return(
            <>
            <div className="nav-2" id="top-nav-2">
                <input type="checkbox" id="check"/>
                <label htmlFor="check"><i onClick={ this.nav2Clicked } className="fa fa-bars"></i></label>
                <label className="logo">Logo</label>
                <ul className = "ulnav2">
                    <li className="linav2"><HashLink to="/#reg-form" className="a-nav2 active">Home</HashLink></li>
                    <li className="linav2"><HashLink to="/#reg-form" className="a-nav2">Services</HashLink></li>
                    <li className="linav2"><HashLink to="/#reg-form" className="a-nav2">About Us</HashLink></li>
                    <li className="linav2"><HashLink to="/#reg-form" className="a-nav2">Register</HashLink></li>
                    <li className="linav2"><HashLink to="/#reg-form" className="a-nav2">Contact Us</HashLink></li>
                </ul>
            </div>
            
            <div className="contain">
                <div className="frame">
                    <img className="im" src={require('../Img/greenCheck.png')} alt="check mark" />
                    <p style={{ color: "white" }}> I love everything she said, but I wasn't sure if that was the right thing to do</p>
                </div>
            </div>
            </>
        )
    }
}

export default Nav2;