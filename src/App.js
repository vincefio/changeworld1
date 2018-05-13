import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import './App.css';
import Signin from './Components/Usersignin';
import NameofBusiness from './Components/Projects';
import Header from './Components/Header';
import ChildToForm from './Components/ChildToForm';

class App extends Component {
  render() {
    return (

      <div className="container">
        <Header/>
        <NameofBusiness />
        <Signin name={'Bertha'}/>
      </div>

    );
  }
}

export default App;
