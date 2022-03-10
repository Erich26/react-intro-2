import React, { Component } from 'react';
import "./App.css";
import { v4 as uuidv4} from 'uuid';

export class App extends Component {
    state = {
      todoArray: [
          {
              id: uuidv4(),
              todo: "wash dishes",
          },
          {
              id:uuidv4(),
              todo: "walk dog",
          },
          {
              id:uuidv4(),
              todo: "homework",
          },
      ],
      newTodo: '',
    };
   
    handleOnInputChange = (event) => {
        this.setState({
            newTodo: event.target.value,
        });
    };

    handleOnSubmit = (event) => {
        event.preventDefault();
        let newArray = [...this.state.todoArray, { id: uuidv4(), todo: this.state.newTodo },
        ]
        this.setState({
            todoArray: newArray,
            newTodo: "",
        });
        
    };

    showTodoArray = () => {
        return(
            <ul>
                {this.state.todoArray.map(({ todo,id }) => (
                <li key={id}>{todo}</li>
                ))}
            </ul>
        );
    };
  render() {
      const { newTodo } =this.state;
    return (
      <div className='App'>
        <form onSubmit={this.handleOnSubmit}>
            <label>Add Todo: </label>
            <input name="newTodo" value={newTodo} onChange={this.handleOnInputChange} />
            <button>Submit</button>
        </form>
        {this.showTodoArray()}
      </div>
    )
  }
}

export default App
