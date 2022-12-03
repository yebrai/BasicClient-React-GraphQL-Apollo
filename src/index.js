import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// 1- Initialize ApolloClient
import { ApolloClient, InMemoryCache, ApolloProvider, gql } from '@apollo/client';

// 2- Config the client with URI
const client = new ApolloClient({
  uri: 'https://rickandmortyapi.com/graphql',
  cache: new InMemoryCache(),
});

// 3- configure the data you need to call
client
  .query({
    query: gql`
    query GetCharactersByNameAndId{
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

  // 4- Wraps the app with <ApolloProvider client={client}>
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ApolloProvider client={client}>
  <React.StrictMode>
    <App />
  </React.StrictMode>
  </ApolloProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
