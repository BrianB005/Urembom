import React from 'react'


import styled from 'styled-components'
const Alert = ({props}) => {


  return (
    <Wrapper>
     
      <AlertContainer type={props.type}>{props.title}</AlertContainer>
    </Wrapper>
  )
}
const Wrapper=styled.div`
  display: flex;
  
  justify-content: center;
  position: relative;
  width: 100vw;
  height: 100vh;


`
const AlertContainer=styled.h4`
padding: 5px 0;
background: blue;
width: 80%;
height: 24px;
position: absolute;
color: white;
top: 15vh;
max-width: 600px;
display: flex;
align-items: center;
justify-content: center;
text-align: center;
background: ${({danger})=>danger&& "lightred"};
background: ${({success})=>success&& "lightgreen"};
background: ${({info})=>info&& "lightblue"};
background: ${(props)=>props.info&& "lightred"};

`

export default Alert;

