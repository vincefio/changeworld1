import React, { Component } from 'react';

import ChildToForm from './ChildToForm';

var userName="Boozer";

class Signin extends Component {
  constructor(props){
    super(props);

    //bind in order to make "this" works (not working)
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleClick = this.handleClick.bind(this);
    //attempt to set initial state
    this.state = {name: ''};

    this.state = {
      name1: "",
      name2: "",
      experience: 0
    };
  }

  handleClick(e){
    e.preventDefault();
    console.log('handle click works')
    //lets save the name into a variable
    userName = document.getElementById('name').value;
    console.log('var username is ' + userName);
    //line below works same as above
    //console.log(this.refs.text.value)
    this.setState({
      name1: userName
    });
  }


  handleSubmit(event) {
     event.preventDefault();
     //console.log('event works');
     //test to see what is in props
    // console.log('Props: ' + this.props.name)
     //test for state
     //console.log('state ' + this.state.name)
     //test to get name from input
     //console.log('name ' + this.name.value)
    // console.log(event.name);
    console.log('submit2 works')
  console.log('var userName is ' + userName)
   }

   //this function is to test the onLoad testFunction and prop passing
   testFunction(){
     console.log('this is the props ' + this.props.name);
   }

   //not working yet
   function (props){
     return <h1>Hello, {props.name}</h1>
   }

   componentDidMount() {
    console.log('I was triggered during componentDidMount')
  }


  render() {
    var user = {
      name: "Anna",
      hobbies: ["Sports"]
    };

    //userName="boozer";
    console.log('username is ' + userName );
    return (
      <div onLoad= {this.testFunction()}>
        <form onSubmit={this.handleClick}>
          <label>
            First Name:
            <input type="text" name="fname" ref="text" id="name" />
          </label><br></br>
          <label>
            Last Name:
            <input type="text" name="lname" ref="text" id="lastname" />
          </label><br></br>
          <label>
            Years Driving Experience:
            <input type="number" name="experience" ref="text" id="yearsexperience" />
          </label><br></br>
          <input type="submit" value="Submit"  />
        </form>



        <h2>userName is {userName}</h2>
        // gonna practice sending some props
        <ChildToForm username={"TestPropUserName"} user={userName} />
      </div>
    );
  }
}

export default Signin;
