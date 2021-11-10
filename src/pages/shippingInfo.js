import React from 'react'
import styled from 'styled-components';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
const ShippingInfo = () => {
  const userInfo=useSelector((state)=>state.userSignin?.userInfo?.userInfo)
  const navigate=useNavigate()
  useEffect(()=>{
    if (!userInfo){
      navigate("/login")
    }
  
  },[navigate,userInfo])
  
  return (
    <Wrapper>
      <Title>Shipping Info</Title>
      <Form>
        <Input type="text" placeholder="Town"/>
        <Input type="text" placeholder="Town Address"/>
        <Input type="text" placeholder="Home Address"/>
        <Input type="text" placeholder="Home postal code"/>
        <Button>Continue</Button>
      </Form>
    </Wrapper>
  )
}
const Wrapper=styled.div`
  background:pink;
  width:100vw;
  height:100vh;
  align-items: center;
  padding-top:20vh;
  /* justify-content: center; */
  display: flex;
  flex-direction: column;


`
const Form=styled.form`
  width:80vw;
  max-width:400px;
  border-radius: 9px;
  border:1px solid lightgray;
  padding: 20px;
  display: flex;
  flex-direction: column;
`
const Input=styled.input`
  margin-bottom: 9px;
  padding: 6px 4px;
  border-radius: 4px;
  border: none;
`
const Title=styled.h5`
  margin-bottom: 8px;
  color: white;
  font-size: 22px;
  
`
const Button=styled.button`
  width: 50%;
  margin :10px auto;
  padding:8px;
  background: white;
  border-radius: 11px;
  cursor: pointer;
  border: none;
  background: #FF5DA2;
  transition:all 0.3s linear;
  opacity: 0.8;
  &:hover{
    color: white;
    opacity: 1;
  }

`
export default ShippingInfo;
