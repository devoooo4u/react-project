import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import * as $ from 'jquery';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { items: [], text: ''};
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.markTask = this.markTask.bind(this);
  }

  render() {
    return (
      <div>
        <h3>TODO</h3>        
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="new-todo">
            What needs to be done?
          </label>
          <input
            id="new-todo"
            onChange={this.handleChange}
            value={this.state.text}
            className="inputBox"
          />
          <button>
            Add #{this.state.items.length + 1}
          </button>
        </form>
        <TodoList items={this.state.items} />
      </div>
    );
  }

  markTask =() =>{
    this.setState({completed : !this.state.completed});
    alert("dasd");
  }

  handleChange(e) {
    this.setState({ text: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    if (!this.state.text.length) {
      return;
    }
    const newItem = {
      text: this.state.text,
      id: Date.now(),
      completed: false
    };
    this.setState(prevState => ({
      items: prevState.items.concat(newItem),
      text: ''
    }));
  }
}

class TodoList extends React.Component { 
  render() {
    return (
      <ul className="todo-ul">
        {this.props.items.map(item => (
          <li>
            <input type="checkbox" onClick={this.markTask} value={item.id} />{item.text}       
          </li>
        ))}
      </ul>
    );
  }
}
export default App;
