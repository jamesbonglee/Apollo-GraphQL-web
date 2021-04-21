import { ApolloClient, InMemoryCache, gql } from "@apollo/client";

const client = new ApolloClient({
   uri: "//localhost:4000/",
   cache: new InMemoryCache(),
   resolvers: {
      Movie: {
         isLiked: () => false,
      },
      Mutation: {
         toggleLikeMovie: (_, { id, isLiked }, { cache }) => {
            cache.modify({
               id: `Movie:${id}`,
               fields: {
                  isLiked: (isLiked) => !isLiked,
               },
            });
         },
      },
   },
});

export default client;
