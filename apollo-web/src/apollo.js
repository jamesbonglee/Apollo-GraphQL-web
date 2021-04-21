import { ApolloClient, InMemoryCache, gql } from "@apollo/client";

const client = new ApolloClient({
   uri: "//localhost:4000/",
   cache: new InMemoryCache(),
   resolvers: {
      Movie: {
         isLiked: () => false,
      },
      Mutation: {
         likeMovie: (_, { id }, { cache }) => {
            cache.modify({
               id: `Movie:${id}`,
               fields: {
                  isLiked: () => true,
               },
            });
         },
      },
   },
});

export default client;
