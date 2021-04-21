import React from "react";
import { useParams } from "react-router-dom";
import { gql } from "apollo-boost";
import { useQuery } from "@apollo/react-hooks";
import styled from "styled-components";
import Suggest from "../components/Suggest";

const GET_MOVIE = gql`
   query getMovie($id: Int!) {
      movie(id: $id) {
         title
         medium_cover_image
         language
         rating
         description_intro
      }
      suggestions(id: $id) {
         id
         rating
         title
         medium_cover_image
      }
   }
`;

const Container = styled.div`
   height: 100vh;
   background-image: linear-gradient(-45deg, #d754ab, #fd723a);
   width: 100%;
   display: flex;
   justify-content: space-around;
   align-items: center;
   flex-wrap: wrap;
   color: white;
`;

const Column = styled.div`
   margin-left: 10px;
   width: 50%;
`;

const Title = styled.h1`
   font-size: 65px;
   margin-bottom: 15px;
`;

const Subtitle = styled.h4`
   font-size: 25px;
   margin-bottom: 10px;
`;

const Description = styled.p`
   font-size: 24px;
   line-height: 25px;
`;

const Poster = styled.div`
   width: 25%;
   height: 60%;
   background-color: transparent;
   background-image: url(${(props) => props.bg});
   background-size: cover;
   background-position: center center;
`;

const Suggestions = styled.div`
   dispaly: flex;
   width: 10%;
`;

export default () => {
   const { id } = useParams();
   const { loading, data } = useQuery(GET_MOVIE, {
      variables: { id: parseInt(id) },
   });
   console.log(data);
   return (
      <Container>
         <Column>
            <Title>{loading ? "loading...." : data.movie.title}</Title>

            <Subtitle>
               {data?.movie?.language} {data?.movie?.rating}
            </Subtitle>
            <Description>{data?.movie?.description_intro}</Description>
         </Column>
         <Poster bg={data?.movie?.medium_cover_image}></Poster>
         <Suggestions>
            {data?.suggestions?.map((m) => (
               <Suggest key={m.id} id={m.id} bg={m.medium_cover_image} />
            ))}
         </Suggestions>
      </Container>
   );
};
