import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";


function ShippingInfo(){

    const navigate = useNavigate();
    const { state } = useLocation();
    const order = state

    const [shippingInfo, setShippingInfo] = useState({address_1:'',address_2:'',city:'',state:'',zip:'',email:''})

    function handleSubmission(e){

        e.preventDefault()
        const localAddr = 'http://localhost:3000/shipping-info'
        const awsAddr = 'https://slxicufy92.execute-api.us-east-2.amazonaws.com/deploy/shipping-info'
        console.log(shippingInfo)
        fetch(awsAddr, 
            {
            method: 'POST',
            body: JSON.stringify(shippingInfo),
            headers: {
            },
            mode:'cors'
        })
        .then((response) => {
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }

                //console.log(order)
                order.address_1 = shippingInfo.address_1
                order.address_2 = shippingInfo.address_2
                order.city = shippingInfo.city
                order.state = shippingInfo.state
                order.zip = shippingInfo.zip

                
                navigate('/home/payment-info',{state:order});
        })

    }
    return (
        <>
            <div>
                <h2>Shipping Info</h2>
                <form onSubmit={handleSubmission}>
                    <label>Address 1: <input type="text" value={shippingInfo.address_1} onChange={(e)=>{setShippingInfo({...shippingInfo,address_1:e.target.value})}}></input></label><br/>
                    <label>Address 2: <input type="text" value={shippingInfo.address_2} onChange={(e)=>{setShippingInfo({...shippingInfo,address_2:e.target.value})}}></input></label><br/>
                    <label>City: <input type="text" value={shippingInfo.city} onChange={(e)=>{setShippingInfo({...shippingInfo,city:e.target.value})}}></input></label><br/>
                    <label>State: <input type="text" value={shippingInfo.state} onChange={(e)=>{setShippingInfo({...shippingInfo,state:e.target.value})}}></input></label><br/>
                    <label>ZIP: <input type="text" value={shippingInfo.zip} onChange={(e)=>{setShippingInfo({...shippingInfo,zip:e.target.value})}}></input></label><br/>
                    <label>Email: <input type="text" value={shippingInfo.email} onChange={(e)=>{setShippingInfo({...shippingInfo,email:e.target.value})}}></input></label><br/>
                    <button type="submit">Add Shipping Info</button>
                    
                </form>                
            </div>
        </>
    )
}

export default ShippingInfo;