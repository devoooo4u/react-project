import React from 'react';
import './App.css';
import 'font-awesome/css/font-awesome.min.css';
import './../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './../node_modules/bootstrap/dist/js/bootstrap.min.js';
// import * as _ from 'lodash';
// import axios from 'axios';

class MyClock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      date: new Date()
    };    
  }

  Tick = () =>{
    this.setState({
      date: new Date()
    })
  }

  componentDidMount() {
    this.timerID = setInterval(() => this.Tick(), 1000);
  }

  componentWillUnmount () {
    clearInterval(this.timerID);
  }

  render() {
    return (
      <div>
        <h1>{this.state.date.toLocaleTimeString()}</h1>
      </div>
    );
  }
}



class App extends React.Component {
  render() {
    return (
      <div className="my-clock">
        <div className="row">
          <h4>React Clock </h4>
          <i className="fa fa-clock-o"></i>
        </div>
        <MyClock />
      </div>
    );
  }
}
export default App;


