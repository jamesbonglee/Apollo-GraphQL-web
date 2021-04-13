import React from "react";
import { gql } from "apollo-boost";
import { useQuery } from "@apollo/react-hooks";

const GET_MOVIES = gql`
   {
      movies {
         id
         medium_cover_image
      }
   }
`;

// 그래프ql가져와서 useQuery사용하여 데이터 가져오기 gql쿼리문은  GET_MOVIES 에 작성
// map이용하여 id 가져오기
export default () => {
   const { loading, error, data } = useQuery(GET_MOVIES);
   if (loading) {
      return "loading...";
   }
   if (data && data.movies) {
      return data.movies.map((m) => <h1>{m.id}</h1>);
   }
};
