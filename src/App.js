import React from 'react';
import createMuiTheme from '@material-ui/core/styles/createMuiTheme';
import {ThemeProvider as MuiThemeProvider} from '@material-ui/core/styles';
import './App.css';
import Dashboard from "./components/dashboard";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#36393f',
      light: '#e2e2e2',
      dark: '#333333',
      contrastText: '#fff'
    },
    secondary: {
      main: '#44ee93',
      light: '#61ffac',
      dark: '#00a24f',
      contrastText: '#fff'
    }
  }
});

function App() {
  return (
      <MuiThemeProvider theme={theme}>
        <Dashboard/>
      </MuiThemeProvider>
  );
}

export default App;
