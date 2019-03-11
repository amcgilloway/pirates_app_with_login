import React, { Component } from 'react';
import Login from './components/Login';

import MainContainer from './containers/MainContainer'

class App extends Component {

  render() {
    if (!sessionStorage.getItem('user')){
      return <Login />
    }

    return (
      <div>
      <MainContainer  />
      </div>
    );
  }
}

export default App;
