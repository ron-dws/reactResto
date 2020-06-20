import React, { Component } from 'react';

//Exporting context object
export const MContext = React.createContext();

class CartProvider extends Component{
    constructor(props){
        super(props);
        this.state = {

            message:"",

        }
    }

    render(){
        return(
            <MContext.Provider value = {{
                 state: this.state,
                 setMessage: (value) => this.setState({
                    message: value 
                 })
            
            }}>

            {this.props.children} {/*It Indicates that the global store is accessible
                                     to all the child tags with CartProvider as Parents
                                   */}

            </MContext.Provider>)
    }
}

export default CartProvider;