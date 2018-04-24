import './App.css';
import 'font-awesome/css/font-awesome.min.css';
import './../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './../node_modules/bootstrap/dist/js/bootstrap.min.js';
// import createReactClass from 'create-react-class';

import React from 'react';
// import { BrowserRouter, Route, Link } from 'react-router-dom'
import Header from '../src/PracticeCode/ReactRouter/components/header';
import MainBody from '../src/PracticeCode/ReactRouter/components/mainBody';

class App extends React.Component {
   render() {
    return (
      <div className="text-center">
        <h1>React Router v4</h1>
        <Header />
        <MainBody />
      </div>
    );
  }
}
export default App;


