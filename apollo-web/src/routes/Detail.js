import { useParams } from "react-router-dom";
import { gql } from "apollo-boost";
import { useQuery } from "@apollo/client";

const GET_MOVIE = gql`
   query getMovie($id: Int!) {
      movie(id: $id) {
         id
         title
         medium_cover_image
         description_intro
      }
   }
`;

export default () => {
   let { id } = useParams();
   id = parseInt(id); // 스트링으로 받아와져서 gQL 에러문 발생하여 int로 변경
   const { loading, data } = useQuery(GET_MOVIE, {
      variables: { id },
   });
   console.log(loading, data);
   if (loading) {
      return "loading....";
   }
   if (data && data.movie) {
      return data.movie.title;
   }
};
