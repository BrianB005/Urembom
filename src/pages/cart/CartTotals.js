import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components'
const CartTotals = () => {
  return (
    <TotalsWrapper>
      <Link to="/shipping"><Button >CheckOut</Button></Link>
      <Wrapper>
        <SubTotal>SubTotal : <Span> Kshs. 900</Span></SubTotal>
        <Tax>Tax:<Span> Kshs. 800.99</Span></Tax>
        <Shipping>Shipping Fee : <Span> Kshs. 607.67</Span></Shipping>
        <Total>Total:<TotalSpan>Kshs. 1978.17</TotalSpan></Total>
      </Wrapper>  
    </TotalsWrapper>
  )
}
const Wrapper=styled.div`
  max-width:350px;
  /* display: flex; */
  /* flex-direction: column; */
  width:60vw;
  margin: auto;
  display: grid;
  place-items: end;
  padding: 10px 20px;
  background: #EEEBDD;
  color: chocolate;
  font-size: 20px;
  @media screen and (max-width:1000px){
    width:90vw;
  }
  @media screen and (max-width:700px){
    width:93vw;
  }
`
  
  


const TotalsWrapper=styled.div`
  width:95%;
  /* background: lightgray; */
  height:180px;
  display: flex;
  align-items: center;
  
  @media screen and(max-width:750px){
    
  }
  
  
  /* justify-content: flex-end; */
`
const SubTotal=styled.h6``
const Total=styled.h3`
  color:chartreuse;
  font-size: 20px;
  margin-bottom: 10px;
  padding-top: 2px;
  padding-bottom: 2px;
  border-top: 1px solid chartreuse;
  border-bottom: 1px solid chartreuse;
`
const Tax=styled.h6``
const Shipping=styled.h6``
const Span=styled.span` 
  color:crimson;
  padding-left:8px
`
const TotalSpan=styled.span` 
  color:chocolate;
  font-size: 20px;
  padding-left: 8px;
`
const Button=styled.div`
padding:14px 35px;
margin-bottom: 20px;
margin-top:10px;
/* width:fit-content; */
cursor:pointer;
border-radius:27px;
border:transparent;
color:whitesmoke;
margin: auto;
/* margin-right:auto;
margin-left:auto; */
background: crimson;
transition: all 0.5s linear;


&:hover{
    /* opacity:0.8; */
    background: chocolate;
    
}
`
export default CartTotals
