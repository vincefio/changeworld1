import React, { Component } from 'react';



class NameofBusiness extends Component {
  render() {
    //generating some dynamic code
    let business = "Trucker Bible"
    return (
      <div className="App">
        <h3>Business Name: {business}</h3>

      </div>
    );
  }
}

export default NameofBusiness;
