import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components'

import CartItem from './cart/CartItem'
import EmptyCart from '../components/EmptyCart';
import CartTotals from './cart/CartTotals'
import { useSelector} from 'react-redux';
const Cart = () => {
    const itemsInCart=useSelector((state)=>state.cart.cartItems)
    // console.log(itemsInCart.cartItems);
    if (itemsInCart?.length<1){
        return <EmptyCart/>
    }
    return (
        <Wrapper>
            <Link to='/'><BackButton check >Back To Products</BackButton></Link>
            {itemsInCart?.map((item)=>{
                return <CartItem key={item._id} {...item}/>
            })}
            <CartTotals/>
        </Wrapper>    
    )
}
const Wrapper=styled.div`
    
`

const BackButton=styled.div`
padding:8px 10px;
margin-bottom: 20px;
margin-top:10px;
width:fit-content;
cursor:pointer;
border-radius:18px;
border:transparent;
color:whitesmoke;
margin-right:auto;
margin-left:auto;
background: crimson;
transition: all 0.5s linear;

/* background:#09009B; */

&:hover{
    opacity:0.8;
    /* color:pink; */
    background: chocolate;
    
}
`

export default Cart
