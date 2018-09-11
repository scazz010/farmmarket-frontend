import ApolloClient from "apollo-client";
import { createHttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { setContext } from "apollo-link-context";

const httpLink = createHttpLink({
    uri: "http://symfony.localhost:808/index.php/graphql/",
});

const authLink = setContext(async (_, { headers }) => {
    // get the authentication token from local storage if it exists
    //const token = AuthConsumer(() => console.log('me?')); //await auth0client.silentAuth();
    const token = sessionStorage.getItem('jwtToken');
    // return the headers to the context so httpLink can read them
    return {
        headers: {
            ...headers,
            authorization: token ? `Bearer ${token}` : "",
        }
    }
});



const client = new ApolloClient({
    link: authLink.concat(httpLink),
    cache: new InMemoryCache()
});

export default client;