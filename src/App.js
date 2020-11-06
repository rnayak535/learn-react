import React, { Component } from 'react';
import './App.css';
import Todos from './components/Todos';

class App extends Component {
  state = {
    todos: [
        {
            id: 1,
            title: 'Clean up Bed',
            completed: false
        },
        {
            id: 2,
            title: 'Go to Bed',
            completed: false
        },
        {
            id: 3,
            title: 'Dont keep mobile side to your head',
            completed: false
        }
    ]
}
  render() {
      return (
      <div className="App">
        <Todos todos={this.state.todos}/>
      </div>
    );
  }
  
}

export default App;
