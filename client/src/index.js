import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { yellow } from '@material-ui/core/colors';
 
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
  });

ReactDOM.render(
    <MuiThemeProvider theme={theme}>
        <App />
    </MuiThemeProvider>
    , document.getElementById('root'));

