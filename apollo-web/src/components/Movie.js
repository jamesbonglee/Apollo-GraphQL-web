import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { gql } from "apollo-boost";
import { useMutation } from "@apollo/react-hooks";
// HOme.js에서 movie 컴포넌트로 id를 map메서드 사용하여값을 넘겨주었음
// 리액트에선 a태그를 사용하지않음 그래서 LINK사용

const LIKE_MOVIE = gql`
   mutation likeMovie($id: Int!) {
      likeMovie(id: $id) @client
   }
`;

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

export default ({ id, bg, isLiked }) => {
   const [likeMovie] = useMutation(LIKE_MOVIE, {
      variables: { id: parseInt(id) },
   });
   return (
      <Container>
         <Link to={`/${id}`}>
            <Poster bg={bg} />
         </Link>
         <button onClick={isLiked ? null : likeMovie}>{isLiked ? "Unlike" : "Like"}</button>
      </Container>
   );
};
