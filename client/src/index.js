import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { BrowserRouter } from 'react-router-dom';
import { yellow } from '@material-ui/core/colors';
import { ApolloProvider } from 'react-apollo';
import { createHttpLink } from 'apollo-link-http'

import { ApolloClient } from 'apollo-boost';
import { InMemoryCache } from 'apollo-cache-inmemory'; 
 
const theme = createMuiTheme({
    typography: {
      useNextVariants: true,
      // Use the system font instead of the default Roboto font.
      color:yellow,
      fontFamily: [
          "Star Wars"
      ].join(','),
      fontWeightMedium: 500,
      body1: {
        fontWeight: 500,
      },
      subtitle1: {
        fontSize: 12,
      },
      button: {
        fontStyle: 'italic',
      },
    },
    palette: {
      primary:yellow,
    }
  });

const httpLink = createHttpLink({
  uri: 'http://127.0.0.1:5000/graphql'
})

setTimeout(console.log(`HTPPLINK ${JSON.stringify(httpLink)}`), 4000 )

const client = new ApolloClient({
  link:httpLink,
  cache: new InMemoryCache()
})

ReactDOM.render(
  <BrowserRouter>
    <ApolloProvider client={client}>
      <MuiThemeProvider theme={theme}>
          <App />
      </MuiThemeProvider>
    </ApolloProvider>
  </BrowserRouter>
    , document.getElementById('root'));

