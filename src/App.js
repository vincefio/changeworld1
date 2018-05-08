import React, { Component } from 'react';

import './App.css';
import Signin from './Components/Usersignin';
import NameofBusiness from './Components/Projects';
import Header from './Components/Header';
import ChildToForm from './Components/ChildToForm';

class App extends Component {
  render() {
    return (
      <div>
      <div className="container">
        <div className="row">
          <div className="col-xs-10 col-xs-offset-1">
              <Header/>
          </div>
        </div>
       </div>
        <NameofBusiness />
        <Signin name={'Bertha'}/>
  
      </div>
    );
  }
}

export default App;
