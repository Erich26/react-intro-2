import "./App.css";

import React, { Component } from 'react'

export class AppInput extends Component {
  constructor(prop) {
    super(prop)
    this.state ={
      email: "",
    };
  }

  handleOnInputChange =(event)=> {
    console.log(event.target.value);
    this.setState({
      email: event.target.value,
    });
  };

  handleFirstNameChange =(event)=> {
    this.setState({
      firstName: event.target.value,
    });
  };

  handleLastNameChange =(event)=> {
    this.setState({
      lastName: event.target.value,
    });
  };

  handleOnSubmit = (event)=> {
    event.preventDefault()
  };

  handleOnChange = (event) => {
   console.log(event.target.name, event.target.value);
   this.setState({
     [event.target.name]: event.target.value,
   });
  };

  


  render() {
    return (
      <div>
        {console.log(this.state)}
        <label htmlFor="email">Email: </label>
        <input 
        name="email" 
        value={this.state.email} 
        onChange={this.handleOnInputChange}>
        </input>
        <p>
          {this.state.email}
        </p>

        <form onSubmit={this.handleOnSubmit}>
          <label>First Name: </label>
          <input 
          name="firstName" 
          value ={this.state.firstName} 
          onChange={this.handleFirstNameChange}
          />

          <button>Submit</button>
        </form>

        <form onSubmit={this.handleOnSubmit}>
          <label>Last Name: </label>
          <input 
          name="lastName" 
          value ={this.state.lastName} 
          onChange={this.handleLastNameChange}
          />

          <button>Submit</button>
        </form>

        <form>
          <input name="email" value={this.state.email} onChange={this.handleOnChange}></input>
          <input name="firstName" value={this.state.firstName} onChange={this.handleOnChange}></input>
          <input name="lastName" value={this.state.lastName} onChange={this.handleOnChange}></input>
          <button>Submit</button>
        </form>


      </div>
    )
  }
}

export default AppInput
