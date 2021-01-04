import React from 'react';
import Main from './Dashboard/Main';
import Nav from './Navigacja/Nav';
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  palette: {
      primary: {
          light: '#8d6e63',
          main: '#795548',
          dark: '#4e342e',
      },
      secondary: {
          light: '#eeeeee',
          main: '#9e9e9e',
          dark: '#424242',
      },
      info: {
          light: '#64b5f6',
          main: '#2196f3',
          dark: '#1565c0'
      },
      error: {
          light: '#e57373',
          main: '#f44336',
          dark: '#b71c1c'
      },
      success: {
          light: '#a5d6a7',
          main: '#4caf50',
          dark: '#2e7d32'
      },
      warning: {
          light: '#ffab40',
          main: '#ff9100',
          dark: '#ff6d00'
      },
  }
});

function App() {
  return (
    <MuiThemeProvider theme={theme}>
      <Nav>
      <Main />
      </Nav>
      </MuiThemeProvider>
  );
};

export default App;
