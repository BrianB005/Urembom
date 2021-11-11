import { addToCart } from '../redux2/actions/cartActions';
import React ,{useEffect, useState}from 'react'
import Review from '../components/review';
import Loading from '../components/Loading';
import { FaStar } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Rating from '../components/Rating'
import { useDispatch } from 'react-redux';

// import Alert from './Alert';
import axios from 'axios';
import { useLocation } from 'react-router';
const SingleProduct = () => {
    const dispatch=useDispatch()
    const location=useLocation()
    const productId=location.pathname.split("/")[3];
    const [product,setProduct]=useState({});
    const [loading,setLoading]=useState(false);
    const addItemToCart=()=>{
        dispatch(addToCart(productId))
    }
    useEffect(()=>{
        const fetchData=async ()=>{
            try{
                setLoading(true)
                const res=await axios.get(`https://stormy-dawn-71374.herokuapp.com/api/v1/products/find/${productId}`)
                // console.log(res.data.product);
                setLoading(false)
                setProduct(res.data.product)
              
            }catch(err){
                setLoading(false)
                console.log(err);
            } 
        }
        fetchData()
    },[productId])
    const {reviews,numOfReviews,colors,image,description,freeShipping, averageRating,company,initialPrice,price,name}=product
    // console.log(reviews);
    // console.log(product);
    // console.log(numOfReviews);
    
    if (loading){
        return <Loading/>
    }
    return (
        <div>
        <Link to="/">
            <BackButton check >Back To Products</BackButton>
            </Link>
            <CompanyName>Company:<NameSpan>{company}</NameSpan></CompanyName>
            <Wrapper>
                <ImageContainer>
                    <Image src={image}></Image>
                    <Shipped>{freeShipping &&"Free Shipping"}</Shipped>
                </ImageContainer>
                <InfoContainer>
                    <Title>{name}</Title>
                    <Prices>
                        <Price>Kshs.
                            <Span>{price}</Span></Price>
                        <Initial>Was Kshs.<SpanTwo>{initialPrice}</SpanTwo></Initial>
                    </Prices>
                    <ProductRating>
                        {Array(averageRating).fill().map((_,i)=>{
                            return <Star key={i}><FaStar/></Star>
                        })}
                    </ProductRating>
                    <Filter>
                        <FilterTitle>Colors:</FilterTitle>
                        {colors?.map((c) => (
                        <FilterColor color={c} key={c} />
                        ))}
                    </Filter>
                    <Buttons>
                        <Button cart onClick={()=>addItemToCart()}>Add To Cart</Button>
                        
                        <Link to="/cart"><Button cart >Go To Cart</Button>
                        </Link>
                    </Buttons>  
                    <Description>
                        <TitleDesc>Description:</TitleDesc>
                        <Desc>{description}</Desc>
                    </Description>
                    
                    
                </InfoContainer>
                {reviews?.length>0&&
                <Reviews>
                    <ReviewsTitle>Reviews</ReviewsTitle>
                    <Label>Comment below</Label>
                    <TextArea  rows={3}></TextArea>
                    <Rating/>
                    <BackButton>Submit</BackButton>
                    <Text>{`Number of Reviews (${numOfReviews}`})</Text>
                            {reviews?.map((review)=>{
                                return <Review key={review._id} {...review}/>
                            })}
                </Reviews>}
        
            </Wrapper>
        
        </div>  
    )}  
           

const Wrapper=styled.div`
    display:flex;
    flex-direction:column;
    justify-content:center;
    background:#FEF5ED;
    border-radius:13px;
    align-items:center;
    width:90vw;
    margin:20px auto;
    max-width:500px;
    padding:18px;
    
    @media screen and (max-width:500px){
        // margin-left:20px;
        margin:20px auto;

    }
    box-shadow:1px 3px 9px pink;
    &:hover{
        box-shadow:1px 3px 8px #FF5DA2;
    }
    
`
const Reviews=styled.div`
margin-top: 9px;

    `
const Label=styled.label`

`
const TextArea=styled.textarea`
    width: 60%;
`
const ProductRating=styled.div`
    display: flex;
`
      
    
const ReviewsTitle=styled.h3`
    text-decoration: underline;
    margin-bottom: 3px;
`    
const Text=styled.h6`
    margin-bottom: 3px;
`
const CompanyName=styled.div`
display:flex;
background:f4f4f4;
padding-top:4px;
padding-bottom:4px;
max-width:600px;

color:#082032;
justify-content:center;
margin:10px auto;

`
const NameSpan=styled.span`
color:#E93B81;
font-weight:700;
padding-left:4px;
&:hover{
    text-decoration:underline;
}    
`
const ImageContainer=styled.div`
    position:relative;
    width:94%;
    
`
const Image=styled.img`
    width:100%;
    border-top-left-radius:9px;
    border-top-right-radius:9px;
    object-fit:contain;
`
const InfoContainer=styled.div``


const Description=styled.div`
    padding-bottom:8px;
    display:flex;
    flex-direction:column;
`
const Desc=styled.p``
const TitleDesc=styled.h6`
  padding-bottom:6px;
  font-size:17px;

`
const Buttons=styled.div`
    display: flex;
    justify-content: space-between;
    margin:5px 10px;
`


const Prices=styled.div`
    display:flex;
`
const Price=styled.h5`
    color:#082032;
`
const Span=styled.span`
    color:#2F86A6;
`
const SpanTwo=styled.span`
    color: pink;
`

const Title=styled.h6`
    font-size:14px;
    color:#FF5DA2;
    /* cursor:pointer; */
    /* &:hover{
        text-decoration:underline;
    } */
`

const Star=styled.div`
    color:yellow;
    padding-right:1px;
`

const FilterColor = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
  margin: 0px 8px;
  cursor: pointer;
`;

const Filter = styled.div`
  display: flex;
  align-items: center;
`;

const FilterTitle = styled.span`
  font-size: 25px;
  font-weight: 400;
`;
const Button=styled.button`
    padding:8px 19px;
    font-size:16px;
    cursor:pointer;
    border-radius:11px;
    transition: all 0.5s linear;
    // margin: auto;
    border:transparent;
    color:whitesmoke;
    // background:#09009B;
    &:hover{
        background:pink;
        color:white;
        background:${props=>props.check && "#F43B86"};
        background:${props=>props.cart && "#F5ABC"};
        color:${props=>props.cart && "#082032"};
    }
    background:${props=>props.cart && "#F43B86"};
    background:${props=>props.check && "#F5ABC9"};
    color:${props=>props.check && "#082032"};
`
const BackButton=styled.div`
padding:8px 10px;
margin-top:10px;
width:fit-content;
cursor:pointer;
border-radius:6px;
border:transparent;
color:whitesmoke;
margin-right:auto;
margin-left:auto;
// align-self:center;
background:#09009B;
&:hover{
    opacity:0.8;
    color:pink;
}
`

const Shipped =styled.h6`
    position:absolute;
    top:15px;
    padding:4px 5px;
    background:#161E54;
    color:white;
    border-radius:12px;
`
const Initial=styled.h6`
    color:#105652;
    text-decoration:line-through;
    margin-left:80px;
`


export default SingleProduct
