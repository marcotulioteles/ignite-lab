import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
  uri: 'https://api-sa-east-1.graphcms.com/v2/cl4optqdz0q5u01z42zxfh75v/master',
  cache: new InMemoryCache()
})