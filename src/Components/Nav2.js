import React, { useEffect, useContext } from 'react';
import { HashLink } from 'react-router-hash-link';
import '../Css/nav2.css';
import { LoginContext } from './Contexts/LoginContext';
import { CustomerContext } from './Contexts/CustomerContext';
import { DeliveryContext } from './Contexts/DeliveryContext';


const Nav2 = () => {
    const [ loginResult, setLoginResult ] = useContext(LoginContext);
    const [ custInfo, setCustInfo ] = useContext(CustomerContext);
    const [ deliveryAdd, setDeliveryInfo ] = useContext(DeliveryContext);

    //On Mobile -> display the navigation bar on fa-bars clicked
   const nav2Clicked = () => {

        const getul = document.querySelector("ul.ulnav2");
        if(getul.style.left === "-100%"){
            getul.style.left = "0%";
        }else if(getul.style.left === "0%"){
            getul.style.left = "-100%";
        }

    }

    //Assign click event and handle it to each menu option
    //componentDidMount = () => { nav2Mobile(); }
    useEffect(()=>{
        nav2Mobile();

        showHideLogin();
    })

   const nav2Mobile = () => {

        let nav_tab = document.querySelectorAll(".linav2");
        for(let i = 0; i < nav_tab.length; i++){
            nav_tab[i].addEventListener("click", optionNavClicked);
        }

    }

    //Slide the navigation bar back if menu option is clicked
    const optionNavClicked = () => {

        const getul = document.getElementsByTagName("ul"); 
        getul[0].style.left = "-100%";

    }

    function showHideLogin(){
        const login_show = document.getElementById("display-login");
        const logout_show = document.getElementById("display-logout");
        

        if(loginResult.getLogin == 'custSucc'){
            //display logout
            logout_show.style.display = 'inline-block';
            login_show.style.display = 'none';


        }else{
            //display login
            login_show.style.display = 'inline-block';
            logout_show.style.display = 'none';
        }
    }

    const loginTriggered = () => {
        setLoginResult({ getLogin: 'custSucc' });

        //set delivery to the customer address from server
            //get cust data and record (will come from endpoint)
            setCustInfo({fn: 'John', ln: 'Akondjo', email:'wank@yah.com', addresse: '304 Mary neet', city:'Columbus', state:'OH', zip:'54304'});

            setDeliveryInfo({
                firstName: "ron",
                email: "ron@test.com",
                phoneNumber: "6665554444",
                custAddress1: "rue du pres",
                custCity: "Columbus",
                zipCode: "54889",
                deliveryStatus: "yes"
            });

            //nav2Clicked();
            optionNavClicked();

    }

    const logoutTriggered = () => {
        setLoginResult({ getLogin: 'no' });

        setDeliveryInfo({});

        optionNavClicked();
        
    }

    
        return(
            <>
            <div className="nav-2" id="top-nav-2">
                <input type="checkbox" id="check"/>
                <label htmlFor="check"><i onClick={ nav2Clicked } className="fa fa-bars"></i></label>
                <label className="logo">Logo</label>
                <ul className = "ulnav2">
                    <li className="linav2"><HashLink to="/#reg-form" className="a-nav2 active">Home</HashLink></li>
                    <li className="linav2"><HashLink to="/#reg-form" className="a-nav2">Services</HashLink></li>
                    <li className="linav2"><HashLink to="/#reg-form" className="a-nav2">About Us</HashLink></li>
                    <li className="linav2"><HashLink to="/#reg-form" className="a-nav2">Register</HashLink></li>
                    <li className="linav2"><HashLink to="/#reg-form" className="a-nav2">Contact Us</HashLink></li>
                    
                    <li className="linav2" id="display-login" onClick={ loginTriggered } style={{marginTop:"0", color: "white", fontSize:"1rem"}}>Log In</li>
                    <li className="linav2" id="display-logout" onClick={ logoutTriggered } style={{marginTop:"0", color: "white", fontSize:"1rem"}}>Log Out</li>
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

export default Nav2;