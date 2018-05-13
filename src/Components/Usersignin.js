import React, { Component } from 'react';

import ChildToForm from './ChildToForm';

var userName="";
var userAge;
var userExperience;

class Signin extends Component {
  constructor(props){
    super(props);

    //bind in order to make "this" works (not working)
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
    //lets save the name into a variable
    userName = document.getElementById('name').value;
    userAge = document.getElementById('lastname').value;
    userExperience = document.getElementById('yearsexperience').value;
    //line below works same as above
    //console.log(this.refs.text.value)
    this.setState({
      name1: userName,
      name2: userAge,
      experience: userExperience
    });
  }

   //this function is to test the onLoad testFunction and prop passing
   testFunction(){
     console.log('this is the props ' + this.props.name);
   }


   componentDidMount() {
    //console.log('I was triggered during componentDidMount')
  }


  render() {
    var user = {
      name: "Anna",
      hobbies: ["Sports"]
    };

    //userName="boozer";
    console.log('username is ' + userName );
    return (
      <div id="mainDiv" onLoad= {this.testFunction()}>

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



        <br></br>

        <ChildToForm user={this.state.name1} userAge={this.state.name2} experience={this.state.experience}/>


      </div>
    );
  }
}

export default Signin;
