import React, { Component } from "react";

class ChildToForm extends Component {
  render(){
    //practice logging props assigned in Usersignin
    console.log('child props are ' + this.props);

    return(
      <div>
        <h3>Im a wee small child named {this.props.user}</h3>
      </div>
    );
  }
}

export default ChildToForm;
