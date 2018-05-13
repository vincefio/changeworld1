import React, { Component } from "react";

class ChildToForm extends Component {

  testName(){
    console.log('this.user is ' + this.props.user);
  }

  render(){


    return(
      <div>
        <h2>Driver Profile</h2>
        <h3>Name: {this.props.user}</h3>
        <h3>Age: {this.props.userAge}</h3>
        <h3>Experience: {this.props.experience}</h3>
      </div>
    );
  }
}

export default ChildToForm;
