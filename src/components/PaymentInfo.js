import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { useLocation } from "react-router-dom";

function PaymentInfo(){


    const navigate = useNavigate()
    const { state } = useLocation();
    const order = state;

    const [paymentInfo, setPaymentInfo] = useState({
        holder_name:'',
        card_no:'',
        expiration_date:'',
        cvv:''
    })

    function handleSubmission(e){

        console.log(order)

        e.preventDefault()
        const localAddr = 'http://localhost:3000/payment-info'
        const awsAddr = 'https://slxicufy92.execute-api.us-east-2.amazonaws.com/deploy/payment-info'
        console.log(paymentInfo)
        fetch(awsAddr, 
            {
            method: 'POST',
            body: JSON.stringify(paymentInfo),
            headers: {
                'Content-Type':'application/json'
            },
            mode:'cors'
        })
        .then((response) => response.json())
        .then((data)=>{

            console.log(data)

                order.card_holder_name = paymentInfo.holder_name
                order.credit_card_number = paymentInfo.card_no
                order.expiration_date = paymentInfo.expiration_date
                order.cvv = paymentInfo.cvv
                order.paymentInfoId = data.result

                console.log('Order State at Shipping',order)

                
                navigate('/home/shipping-info',{state:order});
        })

    }


    return(
        <>
            <div>
                <h2>Payment Info</h2>
                <form onSubmit={handleSubmission}>
                    <label>Name: <input type="text" value={paymentInfo.holder_name} onChange={(e)=>{setPaymentInfo({...paymentInfo,holder_name:e.target.value})}}></input></label><br/>
                    <label>Card Number: <input type="text" value={paymentInfo.card_no} onChange={(e)=>{setPaymentInfo({...paymentInfo,card_no:e.target.value})}}></input></label><br/>
                    <label>Expiration Date: <input type="date" value={paymentInfo.expiration_date} onChange={(e)=>{setPaymentInfo({...paymentInfo,expiration_date:e.target.value})}}></input></label><br/>
                    <label>CVV: <input type="text" value={paymentInfo.cvv} onChange={(e)=>{setPaymentInfo({...paymentInfo,cvv:e.target.value})}}></input></label><br/>
                    <button type="submit">Add Payment Info</button>
                    
                </form>                
            </div>
        </>
    )
}

export default PaymentInfo