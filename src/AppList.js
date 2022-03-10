import React, { Component } from 'react';
import "./App.css";

export class App extends Component {
    state ={
        list: [
            {
                id:1,
                item: "tp"
            },
            {
                id:2,
                item: "paper towel"
            },
            {
                id:3,
                item: "dish soap"
            },
        ],
    };
  render() {
    return (
      <div>
        <div className='App'>
            <h1>Hello</h1>
            <p>We're going to MAP data</p>
            <ul>
                {this.state.list.map((element) =>{
                   return <li key={element.id}>{element.item}</li>;
                })}
            </ul>
        </div>
      </div>
    )
  }
}

export default App;
