import React from 'react';
import logo from './logo.svg';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { counter : 0 }
  }
  incrementCounter = (param) => {
    this.setState((prevState) => {
      return {
        counter: prevState.counter + param
      }
    })
  }
  render() {
    return (
      <div>
        parent - app
        <Button incrementBy={1}  _refbtn={this.incrementCounter} />
        <Button incrementBy={5}  _refbtn={this.incrementCounter }/>
        <Button incrementBy={10}  _refbtn={this.incrementCounter}/>
        <Button incrementBy={50}  _refbtn={this.incrementCounter}/>
        <Result _ctr={this.state.counter} />
      </div>
    );
  }
}

const Result = (props) => {
  return (
    <div>-- {props._ctr}</div>
  );
}

class Button extends React.Component {
  
  handleClick = () =>{
    // this.setState({counter: this.state.counter+= 1});
   this.props._refbtn(this.props.incrementBy);
  }
 
  render() {
    return (
      <div>
        <button 
        onClick={this.handleClick}>
        +{this.props.incrementBy}
        </button>
      </div>
    );
  }
}


export default App;
