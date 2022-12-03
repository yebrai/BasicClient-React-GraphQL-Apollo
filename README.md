React GraphQL 16.6.0 app with Apollo client.

1- install GraphQL/Apollo cliente

npm install @apollo/client graphql

// 1- Initialize ApolloClient and get elements you want to use
import { ApolloClient, InMemoryCache, ApolloProvider, gql } from '@apollo/client';

// 2- Config the client with URI
const client = new ApolloClient({
  uri: 'https://www.URL.com',
  cache: new InMemoryCache(),
});

// 3- configure the data you need to call
client
  .query({
    query: gql`
    query GetCharacters{
      characters {
        results {
          id
          name
        }
      }
    }
    `,
  })
  .then((result) => console.log(result));

  4- Wraps the app with <ApolloProvider client={client}>

  //6- Request data with useQuery
import { useQuery, gql } from '@apollo/client';

const GetCharacters = gql`
query GetCharacters{
  characters {
    results {
      id
      name
    }
  }
}
`;



