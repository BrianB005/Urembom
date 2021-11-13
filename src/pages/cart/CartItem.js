import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { removeFromCart } from '../../redux2/actions/cartActions';
import styled from 'styled-components'
import {FaPlus,FaMinus,FaTrash} from 'react-icons/fa';
const SingleProduct = ({colors,image,price,name,product}) => {
  const dispatch=useDispatch()  
    const [count,setCount]=useState(1)
    const handleClick=(type)=>{
      if(type==="dec"){
        setCount(count-1)
      }
      if(type==="inc"){
        setCount(count+1)
      }
    }
    return (
              <ItemWrapper>
                
                <Wrapper> 
                  <ImageContainer>
                      <Image src={image}></Image>
                  </ImageContainer>
                </Wrapper> 
                <Title>{name}</Title>
                <DeleteIcon onClick={()=>dispatch(removeFromCart(product))}><FaTrash/></DeleteIcon>
                <Filters>
                  <FilterTitle>Color:</FilterTitle>
                  <Filter>
                    {colors?.map((c) => (
                      <FilterColor key={c} >{c}</FilterColor>
                    ))}
                  </Filter>
                </Filters> 
                <Price>Kshs.
                      <Span>{price}</Span>
                  </Price>
                
                <CountContainer>
                  <Icon type="inc"onClick={()=>handleClick()}><FaPlus/></Icon>
                  {count}<Icon type="dec"onClick={()=>handleClick()}><FaMinus/></Icon></CountContainer>    
              </ItemWrapper>  
        
    )
}
const Wrapper=styled.div`
    
    &:hover{
        box-shadow:1px 3px 8px #FF5DA2;
    }
    
`
const ItemWrapper=styled.div`
  /* padding:90px; */
  display: flex;
  width:60vw;
  /* background:lightgray; */
  padding-bottom: 3px;
  border-bottom: 1px solid lightgray;
  justify-content: space-between;
  margin:0 auto;
  align-items: center;
  @media screen and (max-width:1000px){
    width:90vw;
  }
  @media screen and (max-width:700px){
    width:93vw;
  }
`
const CountContainer=styled.div`
  display: flex;
  padding-right:8px;
  flex-direction: column;
  align-items: center;
  @media screen and (min-width:1000px){
    flex-direction: row;
  }
`
const Icon=styled.div`
  cursor: pointer;
  color:#082032;
`
const DeleteIcon=styled.div`
  color:red;
  margin-right:5px;
  cursor: pointer;
  &:hover{
    opacity:0.8;
  }
`


const ImageContainer=styled.div`
    position:relative;
    width:100px;
    
`
const Image=styled.img`
    width:100%;
    border-top-left-radius:9px;
    border-top-right-radius:9px;
    object-fit:contain;
`

const Price=styled.h5`
    color:#082032;
    @media screen and (max-width:700px){
      font-size:11px;
    }
`
const Span=styled.span`
    color:#2F86A6;
    @media screen and (max-width:700px){
      font-size:12px;
    }
`

const Title=styled.h6`
    /* font-size:12px; */
    color:#FF5DA2;
    cursor:pointer;
    width: 100px;
    @media screen and (max-width:700px){
      font-size:12px;
    }
    &:hover{
        text-decoration:underline;
    }
`


const Filters=styled.div`
  display: flex;
  margin-right: 10px;
  margin-left: 6px;
`
const FilterColor = styled.option`

  
`;

const Filter = styled.select`
  padding-left: 4px;
`;

const FilterTitle = styled.span`
  font-size: 15px;
  font-weight: 400;
  @media screen and (max-width:700px){
    display:none;
  }
`



export default SingleProduct
