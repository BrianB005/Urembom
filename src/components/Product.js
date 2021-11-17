import React, { useState } from "react";
import { FaStar } from "react-icons/fa";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Fade from "react-reveal/Fade";
import Rotate from "react-reveal/Rotate";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux2/actions/cartActions";
const Product = ({
  image,
  description,
  freeShipping,
  averageRating,
  company,
  initialPrice,
  price,
  name,
  _id,
}) => {
  const [showMore, setShowMore] = useState(false);
  const dispatch = useDispatch();
  const addItemToCart = (_id) => {
    dispatch(addToCart(_id));
  };
  return (
    <Wrapper>
      <ImageContainer>
        <Link to={`/products/find/${_id}`}>
          <Image src={image}></Image>
        </Link>
        {freeShipping && <Shipped>Free Shipping</Shipped>}
      </ImageContainer>
      <InfoContainer>
        <Rotate top left>
          <Link to={`/products/find/${_id}`}>
            <Title>{name}</Title>
          </Link>
        </Rotate>
        <Prices>
          <Price>
            Kshs.
            <Span>{price}</Span>
          </Price>
          {initialPrice && (
            <Initial>
              Was Kshs.<SpanTwo>{initialPrice}</SpanTwo>
            </Initial>
          )}
        </Prices>
        <Rating>
          {Array(averageRating)
            .fill()
            .map((_, i) => {
              return (
                <Star key={i}>
                  <FaStar />
                </Star>
              );
            })}
        </Rating>
        <Company>{company}</Company>
        <Fade left>
          <Description>
            {showMore ? description : description.substring(0, 63)}
            <More onClick={() => setShowMore(!showMore)}>
              {showMore ? "Show less" : "More Info"}
            </More>
          </Description>
        </Fade>
        <Fade right>
          <ButtonsContainer>
            <Button cart onClick={() => addItemToCart(_id)}>
              Add To Cart
            </Button>

            <Link to={`/products/find/${_id}`}>
              <Button check>Check</Button>
            </Link>
          </ButtonsContainer>
        </Fade>
      </InfoContainer>
    </Wrapper>
  );
};
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  background: #fef5ed;
  border-radius: 13px;
  align-items: center;
  padding: 18px;
  margin-bottom: 20px;
  margin-right: 20px;
  @media screen and (max-width: 700px) {
    margin: 20px auto;
  }
  box-shadow: 1px 3px 9px pink;
  &:hover {
    box-shadow: 1px 3px 8px #ff5da2;
  }
`;
const ImageContainer = styled.div`
  position: relative;
  cursor: pointer;
  transition: all 0.7s linear;
  &:hover {
    opacity: 0.6;
  }
`;
const Image = styled.img`
  width: 100%;
  border-top-left-radius: 9px;
  border-top-right-radius: 9px;
  object-fit: contain;
`;
const InfoContainer = styled.div``;
const ButtonsContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Description = styled.p`
  padding-bottom: 8px;
`;
const Company = styled.h6`
  cursor: pointer;
  font-size: 12px;
  padding-bottom: 7px;
  &:hover {
    text-decoration: underline;
  }
`;
const More = styled.button`
  color: #161e54;
  cursor: pointer;
  font-size: 11px;
`;

const Prices = styled.div`
  display: flex;
`;
const Price = styled.h5`
  color: #082032;
`;
const Span = styled.span`
  color: #2f86a6;
`;
const SpanTwo = styled.span`
  color: pink;
`;

const Title = styled.h6`
  font-size: 14px;
  color: #ff5da2;
  padding-bottom: 5px;
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
`;

const Star = styled.div`
  color: yellow;
  padding-right: 1px;
`;
const Rating = styled.div`
  display: flex;
  padding: 5px 0;
`;
const Button = styled.button`
  padding: 4px 10px;
  cursor: pointer;
  border-radius: 6px;
  border: transparent;
  color: whitesmoke;
  transition: all 0.4s linear;
  margin-right: 17px;
  // background:#09009B;
  &:hover {
    background: pink;
    color: white;
    background: ${(props) => props.check && "#F43B86"};
    background: ${(props) => props.cart && "#F5ABC"};
    color: ${(props) => props.cart && "#082032"};
  }
  background: ${(props) => props.cart && "#F43B86"};
  background: ${(props) => props.check && "#F5ABC9"};
  color: ${(props) => props.check && "#082032"};
`;

const Shipped = styled.h6`
  position: absolute;
  top: 15px;
  padding: 4px 5px;
  background: #161e54;
  color: white;
  border-radius: 12px;
`;
const Initial = styled.h6`
  color: #105652;
  text-decoration: line-through;
  margin-left: 80px;
`;

export default Product;
