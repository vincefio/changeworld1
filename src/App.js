import React, { Component } from 'react';

import './App.css';
import Signin from './Components/Usersignin';
import NameofBusiness from './Components/Projects';

class App extends Component {
  render() {
    return (
      <div>
        <NameofBusiness />
        <Signin />
      </div>
    );
  }
}

export default App;
