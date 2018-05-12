import React, { Component } from "react";

class ChildToForm extends Component {

  testName(){
    console.log('this.user is ' + this.props.user);
  }

  render(){


    return(
      <div>
        <input type="submit" value="submit2" onClick={() => this.testName()}
        className="btn btn-primary" />
        <h3>Im a wee small child named {this.props.user}</h3>
      </div>
    );
  }
}

export default ChildToForm;
