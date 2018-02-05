import React, { Component } from 'react';
import './App.css';

const user={
  firstname : 'bay',
  lastname : 'mini'
}

const element=(
  <h1>
    hello,{user.firstname+' '+user.lastname}
  </h1>
)


class App extends Component {
  render() {
    return element;
  }
}

export default App;
