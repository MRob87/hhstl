import React, { Component } from 'react';
import './App.css';
import 'typeface-roboto';

import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles';
import teal from 'material-ui/colors/teal';
import green from 'material-ui/colors/green';

import MenuBar from './Components/MenuBar';
import Routes from './Routes';

const theme = createMuiTheme({
  palette: {
    primary: teal,
    secondary: {
      main: '#cd5c5c',
      light: '#ff7961',
      dark: '#ba000d',
      contrastText: '#FFF',
    },
  },
  greenButton: {
    light: '#4CAF50',
    main: '#4CAF50',
    dark: '#4CAF50',
    contrastText: '#4CAF50',
  },
});


class App extends Component {
  
  render() {
    return (
      <div className="App">
        <MuiThemeProvider theme={theme}>
          <MenuBar />
          <Routes />
        </MuiThemeProvider>
      </div>
    );
  }
}
export default App;
