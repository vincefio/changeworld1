import React, { Component } from 'react';



class Signin extends Component {
  constructor(props){
    super(props);

    //bind in order to make "this" works (not working)
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleClick = this.handleClick.bind(this);
    //attempt to set initial state
    this.state = {name: ''};


  }

  handleClick(e){
    e.preventDefault();
    console.log('handle click works')
    //lets save the name into a variable
    var userName = document.getElementById('name').value;
    console.log('var username is ' + userName);
    //line below works same as above
    //console.log(this.refs.text.value)
  }

  handleSubmit(event) {
     event.preventDefault();
     console.log('event works');
     //test to see what is in props
     console.log('Props: ' + this.props.name)
     //test for state
     console.log('state ' + this.state.name)
     //test to get name from input
     //console.log('name ' + this.name.value)
    // console.log(event.name);

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
        <form onSubmit={this.handleClick}>
          <label>
            Name:
            <input type="text" name="name" ref="text" id="name" />

          </label>
          <input type="submit" value="Submit"  />
        </form>
      </div>
    );
  }
}

export default Signin;
