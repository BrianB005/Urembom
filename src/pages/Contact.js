import React,{useRef, useState }from 'react';
import emailjs from 'emailjs-com'
import {FaPhone,FaFacebookMessenger,FaSearchLocation} from 'react-icons/fa'
import styled from 'styled-components'
const Contact = () => {
  const formRef=useRef()
  const [done,setDone]=useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_51brksc",
        "template_mcp81oq",
        formRef.current,
        "user_k2jDyzx9HIcdbfqSp8les"
      )
      .then(
        (result) => {
          console.log(result.text);
          setDone(true)
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <Container>
      <Wrapper>
        <Left>
          <Contact>
            <FaPhone/>
            +254778787987
          </Contact>
          <Contact>
            <FaFacebookMessenger/>
            Reach out 
          </Contact>
          <Contact>
            <FaSearchLocation/>
            Visit our Store 
          </Contact>
        </Left>
        <Right>
          {done&& <Success>EMail sent successfully</Success>}
          <Header>Reach out now by filling the form below and our team shall get back to you in no time.</Header>
          <Form ref={formRef} onSubmit={handleSubmit}>
            <Input placeholder="Name" name="user_name" />
            <Input placeholder="Subject" name="user_subject"  />
            <Input placeholder="Email" name="user_email" />
            <TextArea rows="5" placeholder="Message" name="message" />
            <Button type="submit">Submit</Button>
          </Form>

        </Right>
      </Wrapper>
    </Container>
    
  )
}
const Container=styled.div`
  height: 100vh;
  width: 100vw;


`
const Wrapper=styled.div`
  height: 100%;
  display: flex;
  width:60%;
  @media screen and (max-width:800px){
    width:70%
  }
  @media screen and (max-width:700px){
    width:80%
  }
  @media screen and (max-width:500px){
    
    flex-direction: column;
  }
`
const Left=styled.div`
  flex: 1;
`

const Right=styled.div`
  flex: 1;
`
const Header=styled.h5``
const Form=styled.form``
const TextArea=styled.textarea``
const Input=styled.input`
  margin-bottom: 5px;
` 
const Success=styled.h6``
const Button=styled.button`
  padding:5px 9px;
  border-radius: 4px;
  background: #082032;
  cursor: pointer;

`


export default Contact
