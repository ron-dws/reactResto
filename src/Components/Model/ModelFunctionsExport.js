import axios from 'axios'

//All request to the server will be handle here
/*We will use an identifier which role to tie all info link to the specific order (like an order#)
  -Identifier ties
    ->cart Info
    ->cust Info
    ->delivery Info
    ->Payment Info
*/
const resto_name = "will come from ....."
const url = "www.restotest.com/"+ resto_name;

export const promptMessage = (cart, customer, cart_total, delivery, delivery_method)=>{
    /*---First case -> I assign identifier to the cart only 

        order has cart data + the 'identifier' attribute (identifier helps to identify the specific order)
        const order = cart.map((obj) => ({... obj, 'identifier':'0001'}));
        alert(order.map((val) => val.order ));

    ----*/

    /*---Second I assign identifier to an object that regroup all the info linked to that order ----*/
    //create the identity obj
    const obj_identity = {'identity':'0002'};

    //Create an object that will hold all the data for this specific order
    //const groupInfo2 = [].concat(cart, customer, cart_total, delivery, delivery_method);
    const groupInfo = [].concat(cart, customer, cart_total, delivery, delivery_method, obj_identity );//[...cart, ...delivery, ...delivery_method];
    

    //const groupInfo_identifier = groupInfo2.map((obj)=>({...obj, 'identity':'00002'}));
    //alert(groupInfo_identifier.map((val)=> val.identity));
    //alert(groupInfo.map((val)=> val.identity ));

    console.log("la carte");
    console.log(groupInfo);
    console.log("-----------JSON--------")
    console.log(JSON.stringify(groupInfo));
 }

//post the order
export const postOrder = (cart) => {

    axios.post(url, 
        {cart}
    )
    .then(
        resp => resp.data
    );

}

//post info about the client who is making the order
export const postClientInfo = (client) => {

}

//post delivery info if order set to delivery
export const postDelivery = (deliveryInfo) => {

}

//post payment info
export const postPayment = (payment) => {

}