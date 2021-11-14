import React from 'react'
// import CartTotals from './cart/CartTotals'
import styled from 'styled-components';
import {createOrder} from '../redux2/actions/orderActions'
import {useNavigate} from 'react-router-dom'
import { useSelector,useDispatch } from 'react-redux'
const PlaceOrder = () => {
  const cart=useSelector((state)=>state.cart)
  // const userInfo=useSelector((state)=>state.userSignin)
  const navigate=useNavigate()
  if(!cart.ShippingInfo){
    navigate('/shipping')
  }
  const dispatch=useDispatch()
  const handleClick=()=>{
    dispatch(createOrder(cart?.cartItems,cart?.tax,cart?.shippingFee))
  }
  return (
    <Wrapper>
       <Title>Order Summary</Title>
       <Text>
          Total to be paid:Kshs {cart?.cartTotal?.toFixed()}
       </Text>
       <ShippingInfo>
         <Header>Delivery Address</Header>
          <Text>Town:{" "} 
            {cart.shippingAddress.town}
          </Text>
          <Text>Address:{" "} 
            {cart?.shippingAddress?.townaddress}
          </Text>
          <Text>Home Address:{" "} 
            {cart?.shippingAddress?.homeaddress}
          </Text>
          <Text>Postal Address:{" "} 
            {cart?.shippingAddress?.postaladdress}
          </Text>
       </ShippingInfo>
       <Payment>
         Payment Method: {" "}
         {cart?.paymentMethod}
       </Payment>
       <Button onClick={handleClick}>PlaceOrder</Button>
    </Wrapper>
   
    
  )
}
const Wrapper=styled.div`
  display: flex;
  flex-direction: column;
  justify-content:center;
  align-items: center;
  width: 90vw;
  max-width: 500px;
  margin-left: auto;
  margin-right: auto;
  margin-top: 19vh;
`

const ShippingInfo=styled.div`
  margin: 20px 0;
`

const Title=styled.h3`
  margin-bottom: 14px;
`

const Header=styled.h4`
  margin-bottom: 6px;
  text-decoration: underline;
`
const Text=styled.h5`
  margin-bottom: 5px;
`
const Payment=styled.h5`
margin-top: 9px;
`
const Button=styled.button`
padding:14px 35px;
margin-top: 30px;
/* width:fit-content; */
cursor:pointer;
border-radius:27px;
border:transparent;
color:whitesmoke;

background: crimson;
transition: all 0.5s linear;


&:hover{
    opacity:0.8;
    background: chocolate;
    
}
`

export default PlaceOrder
