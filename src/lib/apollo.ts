import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
    uri: "https://api-sa-east-1.graphcms.com/v2/cl4srxwe72fsa01zc5c4i63gg/master",
    cache: new InMemoryCache(),
});
