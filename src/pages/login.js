import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import styled from "styled-components";
import Loading from "../components/Loading";
import { useDispatch, useSelector} from "react-redux";
import { signin } from "../redux2/actions/userActions"
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email,setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate=useNavigate()
  const dispatch=useDispatch();
  const userSignin=useSelector((state)=>state.userSignin)
  const { userInfo, loading } = userSignin;
  // console.log(error);
  const handleClick = (e) => {
    e.preventDefault();
  
    dispatch(signin(email,password))
    
  };
  if (userInfo){
    navigate('/')
  }
  if (loading){
  return <Loading account/>
  }
    return (
      <Container>
        <Wrapper>
          <Title>LOGIN</Title>
          <Logo>Urembom</Logo>
          <Form >
            <Input type="email" required onChange={(e) => setEmail(e.target.value)} placeholder="Enter Your Email address" />
            <Input type="password" required onChange={(e) => setPassword(e.target.value)} placeholder="password" />
            <Check>
                <Checkbox type="checkbox"></Checkbox>
                Remember me?
            </Check>
            <Forgot>Forgot Password?</Forgot>
            <Button onClick={handleClick}>LOGIN</Button>
          </Form>
          
          
        </Wrapper>
        <Register>
          Not registered?
          <Link to="/register"><RegisterButton>Register</RegisterButton></Link>
        </Register>
      </Container>
    );
  };
  
const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background:#FFA6D5;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const Wrapper = styled.div`
  width: 25%;
  position:relative;
  padding: 20px;
  border-radius:20px;
  background-color: pink;
  box-shadow:1px 4px 17px #FFA6D5;
  @media screen and (max-width:1000px){
       width: 55%
  }
  @media screen and (max-width:800px){
       width: 65%
  }
`;
const Check=styled.div`
  display:flex;
  align-items:center;
  margin:10px 0;
  cursor:pointer;

`
const Checkbox=styled.input`
  margin-right:3px;
`
const Forgot=styled.a`
  cursor:pointer;
  &:hover{
      text-decoration:underline;
  }
`
const Logo=styled.h4`
  position:absolute;
  top:-60px;
  left:50%;
  background:#F037A5;
  width:100px;
  height:100px;
  // font-weight:700;
//   font-size:30px;

  border-radius:50%;
  display:flex;
  align-items:center;
  justify-content:center;
  transform:translateX(-50%);
  color:white;
`

const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;
  display:flex;
  padding-top:30px;
  justify-content:center;
`;

const Form = styled.form`
  display: flex;
  flex-direction:column;
//   padding-top:17px;
  
  
`;

const Input = styled.input`
//   flex: 1;
  min-width: 40%;
  margin: 10px 5px 0px 0px;
  padding: 10px;
`;



const Button = styled.button`
  width: 80%;
  margin:auto;
  margin-top:9px;
  border-radius:25px;
  transition:all 0.7s linear;
  border: none;
  display:flex;
  justify-content:center;
  padding: 15px 30px;
  background-color: #F037A5;
  &:hover{
    //   opacity:0.8;
    //   background:#FFA6D5;
      color:#082032;
  }
  color: white;
  cursor: pointer;
`;
const Register=styled.div`
  display:flex;
  // flex-direction:row;
  padding-top:14px;
  text-align:center;
  // justify-content:center;
  align-items:center;
`
const RegisterButton = styled.button`
  // width: 30%;
  margin-left:9px;
  // margin:auto;
  margin-top:9px;
  border-radius:20px;
  transition:all 0.7s linear;
  border: none;
  display:flex;
  justify-content:center;
  padding: 8px 22px;
  margin-bottom:1px;
  background-color: #082032;
  &:hover{
      opacity:0.8;
      // background:#FFA6D5;
      // color:#082032;
  }
  color: white;
  cursor: pointer;
`;

export default Login;