import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

// HOme.js에서 movie 컴포넌트로 id를 map메서드 사용하여값을 넘겨주었음
// 리액트에선 a태그를 사용하지않음 그래서 LINK사용

const Container = styled.div`
   height: 400px;
   width: 100%;
   box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
   background-color: transparent;
`;

const Poster = styled.div`
   background-image: url(${(props) => props.bg});
   height: 100%;
   width: 100%;
   background-size: cover;
   background-position: center center;
   border-radius: 7px;
`;

export default ({ id, bg, isLiked }) => (
   <Container>
      <Link to={`/${id}`}>
         <Poster bg={bg} />
      </Link>
      <button>{isLiked ? "Unlike" : "Like"}</button>
   </Container>
);
