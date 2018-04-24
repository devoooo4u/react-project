import React from 'react';
import './App.css';
import 'font-awesome/css/font-awesome.min.css';
import './../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './../node_modules/bootstrap/dist/js/bootstrap.min.js';
import createReactClass from 'create-react-class';


const About = createReactClass({render(){return (<h3>--About--</h3>);}})
const Inbox = createReactClass({render(){return (<h3>--Inbox--</h3>);}})
const Home = createReactClass({render(){return (<h3>--Home--</h3>);}})
const Contact = createReactClass({render(){return (<h3>--Contact--</h3>);}})

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      route: window.location.hash.substr(1)
    }
   }

   componentDidMount(){
    window.addEventListener('hashchange', ()=>{
      //debugger;
      this.setState({
        route: window.location.hash.substr(1) 
      })
    })
  };

  render() {
    let Child
    switch (this.state.route) {
      case '/about': Child = About; break;
      case '/inbox': Child = Inbox; break;
      case '/contact': Child = Contact; break;
      default: Child = Home;        
    }
    return (
      <div className="text-center">
      <h1>React Router</h1>
       <ul>
         <li><a href="#/about">About</a></li>
         <li><a href="#/inbox">Inbox</a></li>
         <li><a href="#/contact">Contact-Us</a></li>
         <Child />
       </ul>
      </div>
    );
  }
}

export default App;


