import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import * as $ from 'jquery';

const iTask = {
  completed : false,
  desc : ''
}

class App extends Component {
  render() {
    return (
      <div className="App">
      <h1>To-Do List</h1>
      <AddTask />
      <AllTasks />      
      </div>
    );
  }
}

class Task extends React.Component{
  state = {
    ifDone : false
  }

  handleChange(){
    this.setState({
      ifDone: !this.state.ifDone
    })
  }
  processTask = (liTask) =>{
    alert(liTask);
    let liTaskElement = $('#allTasks li input[value="'+liTask+'"]');
    debugger;
    if(liTaskElement[0].cheked) {
      // remove the strike class
    }
    else{
      // set the strike class
    }
  }  
  render(){
    if(this.state.ifDone){
    return(      
        <li className="taskStriked"><input type="checkbox" checked onChange={(e) => this.handleChange(e)} value="sample val"/>sample val</li>     
      );
    }  
    else{
      return(
        <li><input type="checkbox" onChange={(e) => this.handleChange(e)} value="sample val"/>sample val</li>  
      );
    }
  }
}

class AddTask extends Component{  
  add = () =>{     
    debugger;
    iTask.completed = false;
    iTask.desc = this.inputTask.value;
    App.AllTasks.appendTask(iTask);   
  }
  render(){
    return(
      <div className="inputBox">
        <input type="text" ref={input => this.inputTask = input}/>
        <button onClick={this.add}>Add Task</button>
      </div>
    );
  }
}

class AllTasks extends Component{  
  state = {
    tasks: []
  }
  appendTask(param){
    this.setState({
      tasks: this.state.tasks.push(param)
    })
  }
  render(){
    return(
      <div>
        <ul id="allTasks" className="todo-ul">
        {/* <li>
          <input type="checkbox" value="Create a react app using boilerplate Create-react-app"/>Create a react app using boilerplate Create-react-app
        </li> */}
        <Task/>
      </ul>
      </div>
    );
  }
}


export default App;
