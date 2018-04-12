import React from 'react';
// import logo from './logo.svg';
import './App.css';
// import * as $ from 'jquery'; 
import axios from 'axios';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      _cardData: [
        {
          "id":897639872323,
          "avatar_url": "https://avatars2.githubusercontent.com/u/19596216?v=4",
          "name": "Devansh Gupta",
          "company": 'CT',
        },
        {
          "id":8976398723232,
          "avatar_url": "https://avatars1.githubusercontent.com/u/1668?v=4",
          "name": "John McGrath",
          "company": "AWS",
        }
      ]
    }
  }

  addNewCard = (cardInfo) =>{
    debugger;
    this.setState((prevState) => {
      _cardData: prevState._cardData.concat(cardInfo);
    })
    this.forceUpdate()
  }
  render() {
    return (
      <div>
        <Form onSubmit1={this.addNewCard} />
        <CardList cards={this.state._cardData} />
      </div>
    );
  }
}

const Card = (props) => {
  return (
    <div style={{ margin: '1em' }}>
      <img alt="avtar" width='75' src={props.avatar_url} />
      <div style={{ display: 'inline-block', marginLeft: 10 }}>
        <div style={{ fontSize: '1.25em', fontWeight: 'bold' }}>{props.name}</div>
        <div>{props.company}</div>
      </div>
    </div>
  );
}

const CardList = (props) => {
  debugger
  return (
    <div>
      {props.cards.map(card => <Card key={card.id} {...card} />)}
    </div>
  );
}

class Form extends React.Component {
  state = {
    userName: ''
  }

  handleSubmit = (event) => {
    event.preventDefault();
    let self = this;
    axios
    .get("https://api.github.com/users/"+this.state.userName)
    .then((val) =>{
      debugger
      self.props.onSubmit1(val.data);
      self.setState({userName:''});
    })
    
  }
  handleTextChange = (event) =>{
    this.setState({
      userName:event.target.value
    })
  }
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input type="text"
          // ref={(input) => this.inputUser = input}
          value={this.state.userName}
          onChange={this.handleTextChange}
          placeholder="github user"
          required />
        <button type="submit">Add card </button>
      </form>
    );
  }
}

export default App;


