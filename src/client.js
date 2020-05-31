import ApolloClient from "apollo-boost"
import fetch from "isomorphic-fetch"

const client = new ApolloClient({
  uri: "URL_API_GRAPHQL",
  fetch,
  onError: ({ graphQLErrors, networkError, response }) => {
    console.error("graphQLErrors: ", graphQLErrors)
    console.error("networkError: ", networkError)
    console.error("response: ", response)
  },
})

export default client
