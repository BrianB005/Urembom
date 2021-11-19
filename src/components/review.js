import axios from "axios";
import { FaStar } from "react-icons/fa";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
const Review = ({ user, title, rating }) => {
  const [reviewUser, setUser] = useState({});
  useEffect(() => {
    const getUser = async () => {
      try {
        const res = await axios.get(
          `https://stormy-dawn-71374.herokuapp.com/api/v1/users/find/${user}`
        );
        setUser(res.data);
        console.log(reviewUser);
      } catch (err) {
        console.log(err);
      }
    };
    getUser();
  });
  return (
    <Wrapper>
      <Name>Brian</Name>

      <Rating>
        {Array(rating)
          .fill()
          .map((_, i) => {
            return (
              <Star>
                <FaStar />
              </Star>
            );
          })}
      </Rating>
      <Comment>{title}</Comment>
    </Wrapper>
  );
};
const Wrapper = styled.div`
  display: flex;
  margin: 7px 0;
  border-bottom: 1px dotted lightgray;
`;
const Name = styled.h5``;

const Star = styled.div`
  color: yellow;
  padding-right: 1px;
`;
const Comment = styled.h6``;
const Rating = styled.span`
  display: flex;
  margin-right: 3px;
  margin-left: 3px;
`;

export default Review;
