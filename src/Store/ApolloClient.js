import ApolloClient from "apollo-client";
import { ApolloLink } from "apollo-link";

import { createHttpLink } from "apollo-link-http";
import { InMemoryCache } from "apollo-cache-inmemory";
import { setContext } from "apollo-link-context";
import { onError } from "apollo-link-error";

import * as AuthService from "../utils/AuthService";

const httpLink = createHttpLink({
  uri: "http://symfony.localhost:808/index.php/graphql/"
});

const authLink = setContext(async (_, { headers }) => {
  const token = AuthService.getAccessToken();

  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : ""
    }
  };
});

const errorLink = onError(({ response, graphQLErrors, networkError }) => {
  if (networkError) {
    if (!AuthService.getAccessToken()) {
      console.log("No token exists! - retrying login");
      AuthService.login();
    }
    if (AuthService.isTokenExpired()) {
      AuthService.refreshAccessToken().then(
        () => console.log("retry me!"),
        () => AuthService.login()
      );
    }
  }
});

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: ApolloLink.from([authLink, errorLink, httpLink])
});

export default client;
