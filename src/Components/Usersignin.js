import React, { Component } from 'react';



class Signin extends Component {
  handleSubmit(event) {
     event.preventDefault();
     console.log('event works');
   }

   //not working yet
   function (props){
     return <h1>Hello, {props.name}</h1>
   }

   componentDidMount() {
    console.log('I was triggered during componentDidMount')
  }


  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>
            Name:
            <input type="text" name="name" />
            
          </label>
          <input type="submit" value="Submit"  />
        </form>
      </div>
    );
  }
}

export default Signin;
