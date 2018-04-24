import React from 'react';
import './App.css';
import 'font-awesome/css/font-awesome.min.css';
import './../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './../node_modules/bootstrap/dist/js/bootstrap.min.js';
// import * as _ from 'lodash';
// import axios from 'axios';

class App extends React.Component {
  render() {
    return (
      <div className="text-center">
        {/* <ActionLink/> */}
        {/* <Toggle/> */}
        {/* <LoginControl/> */}
        {/* <ListAndKeys/> */}
        <NameForm/>
      </div>
    );
  }
}

class NameForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value : ''};
    this.userName = "";
  }

  handleChange(e){
    this.setState({value: e.target.value});
  }

  handleSubmit(e){
    //alert("This Name was submitted : "+this.state.value);
    this.userName =  this.state.value;
    e.preventDefault();
  }

  render(){
    return(
      <div>
      <form onSubmit={(e) => this.handleSubmit(e)}>
      <label>
        Name :
        <input type="text" value={this.state.value} onChange={(e) => this.handleChange(e)}/>
      </label>
      <input type="submit" value="Submit"/>
      </form>
      <h2>You have submitted :{this.userName}</h2>
      </div>
    );
  }
}

const ListAndKeys = () => {
  const numbers = [1, 2, 3, 4, 5, 6];
  const doubled = numbers.map(number => { return number * 2 });
  console.log(doubled);
  const arrItems = numbers.map((number) => {
    return (
      <li key={number.toString()} className="list-group-item">{number}</li>
    );
  });
  return (
    <ul className="list-group">{arrItems}</ul>
  );
}

class LoginControl extends React.Component {
  constructor(props) {
    super(props);
    this.state = { ifLoggedIn: false, };
  }

  handleLogin = () => {
    this.setState({
      ifLoggedIn: true,
    });
  };
  handleLogout = () => {
    this.setState({
      ifLoggedIn: false,
    });
  };
  render() {
    const isLoggedIn = this.state.ifLoggedIn;
    const _btn = isLoggedIn ? (<button className="btn " onClick={this.handleLogout}>Logout</button>) :
      (<button className="btn btn-primary" onClick={this.handleLogin}>Login</button>);
    return (
      <div>
        {_btn}
        <Greetings _isLoggedIn={isLoggedIn} />
      </div>
    );
  }
}

const Greetings = (props) => {
  const isLoggedIn = props._isLoggedIn;
  if (isLoggedIn) {
    return <UserGreeting />;
  }
  return <GuestGreeting />;
}

function UserGreeting(props) {
  return <h1>Welcome back!</h1>;
}

function GuestGreeting(props) {
  return <h1>Please sign up.</h1>;
}

class Toggle extends React.Component {
  static initialState = () => ({
    ifSwitchOn_btn1: true,
    ifSwitchOn_btn2: true,
    ifSwitchOn_btn3: true,
  });
  constructor(props) {
    super(props);
    this.state = Toggle.initialState();
    this.toggle1 = this.toggle1.bind(this);
  }

  toggle1() {
    this.setState(prevState => ({
      ifSwitchOn_btn1: !prevState.ifSwitchOn_btn1
    }));
  }

  toggle2 = (param) => {
    this.setState(prevState => ({
      ifSwitchOn_btn2: !prevState.ifSwitchOn_btn2
    }));
    console.log("Passed param value=" + param);
  }

  toggle3(param) {
    this.setState(prevState => ({
      ifSwitchOn_btn3: !prevState.ifSwitchOn_btn3
    }));
    console.log("Passed param value=" + param);
  }

  render() {
    return (
      <div>
        <button onClick={this.toggle1}>{this.state.ifSwitchOn_btn1 ? "ON" : "OFF"}</button>
        <button onClick={this.toggle2}>{this.state.ifSwitchOn_btn2 ? "ON" : "OFF"}</button>
        <button onClick={(e) => this.toggle3(11, e)}>{this.state.ifSwitchOn_btn3 ? "ON" : "OFF"}</button>
      </div>
    );
  }
}

class ActionLink extends React.Component {
  handleClick = (e) => {
    e.preventDefault();
    console.log("Link is clicked ");
  }
  render() {
    return (
      <a href="#" onClick={this.handleClick} target="_blank">Click Me</a>
    );
  }
}

export default App;


