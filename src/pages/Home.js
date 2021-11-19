import React, { useEffect, useMemo, useState } from "react";
import styled from "styled-components";
import Products from "../components/Products";
import Header from "../components/Header";
import { Link } from "react-router-dom";
import { GetCategories, LIST_PRODUCTS } from "../redux2/actions/productActions";
import { useSelector, useDispatch } from "react-redux";
const Home = () => {
  const [category, setCategory] = useState("");
  const products = useSelector((state) => state.productsList.prdoucts);
  const dispatch = useDispatch();
  useMemo(() => {
    dispatch(GetCategories());
  }, [dispatch]);
  useEffect(() => {
    dispatch(LIST_PRODUCTS(category));
  }, [dispatch, category, products]);
  // console.log(category);
  const userInfo = useSelector((state) => state.userSignin.userInfo);
  const userRole = userInfo?.user?.role;
  const categories = useSelector((state) => state.categories);
  return (
    <div>
      <Wrapper>
        <Header title={category} />
        <Link to="/products/add">
          {userRole === "admin" && <Button>Add Item</Button>}
        </Link>
        <Left>
          <Links onChange={(e) => setCategory(e.target.innerText)}>
            {categories?.categories?.map((category) => {
              return (
                <Category
                  onClick={(e) => setCategory(e.target.innerText)}
                  key={category.toUpperCase()}
                >
                  {category}
                </Category>
              );
            })}
          </Links>
        </Left>
      </Wrapper>

      <Products />
    </div>
  );
};
const Left = styled.div``;
const Button = styled.button`
  padding: 6px 12px;
  cursor: pointer;
  border-radius: 6px;
  font-size: 16px;
  border: transparent;
  background: pink;
  color: deeppink;
  transition: all 0.4s linear;
  &:hover {
    background: deeppink;
    color: white;
  }
`;
const Wrapper = styled.div`
  align-items: center;
  text-align: center;
  display: flex;
  flex-direction: column;
  padding: 20px;
  margin-bottom: 4px;
  width: 95vw;
  /* padding-top: 80px; */
  @media screen and (min-width: 800px) {
    width: 50vw;
    margin: auto;
  }

  justify-content: space-between;
`;

const Category = styled.a`
  color: #f037a5;
  text-transform: capitalize;
  text-decoration: none;
  padding: 3px 6px;
  margin-right: 13px;

  cursor: pointer;
  position: relative;
  width: fit-content;
  font-weight: 500;
  font-size: 18px;

  &::after {
    content: "";
    position: absolute;
    width: 96%;
    height: 4.5px;
    left: 0;
    background: #f037a5;
    border-radius: 5px;
    top: 25px;
    opacity: 0;
    opacity: ${(props) => props.active && 1};
  }

  &:hover {
    opacity: 0.8;
    // background:gray;
    &::after {
      opacity: 1;
    }
  }
`;
const Links = styled.ul`
  list-style-type: none;

  display: flex;
  margin-right: 9px;
`;
// const Sort=styled.div`
//     display:flex;
//     display: none;
//     text-align:center;
//     align-items:center;
//     justify-self: flex-end;

// `
// const Select=styled.select`

// `
// const Selector=styled.div`
//     margin-left:6px;
//     /* display: none; */
// `

// const Option=styled.option`
//     padding:4px;
//     margin: 4px;
//     text-transform: capitalize;
// `

export default Home;
