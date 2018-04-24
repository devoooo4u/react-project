import React from 'react';
import './App.css';
import 'font-awesome/css/font-awesome.min.css';
import './../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './../node_modules/bootstrap/dist/js/bootstrap.min.js';
import * as _ from 'lodash';
// import axios from 'axios';

var possibleCombinationSum = function(arr, n) {
  if (arr.indexOf(n) >= 0) { return true; }
  if (arr[0] > n) { return false; }
  if (arr[arr.length - 1] > n) {
    arr.pop();
    return possibleCombinationSum(arr, n);
  }
  var listSize = arr.length, combinationsCount = (1 << listSize)
  for (var i = 1; i < combinationsCount ; i++ ) {
    var combinationSum = 0;
    for (var j=0 ; j < listSize ; j++) {
      if (i & (1 << j)) { combinationSum += arr[j]; }
    }
    if (n === combinationSum) { return true; }
  }
  return false;
};

const Stars = (props) => {
  // const numberOfStars = 1 + Math.floor(Math.random() * 9);

  let stars = [];
  for (let i = 0; i < props.numberOfStars; i++) {
    stars.push(<i key={i} className="fa fa-star"></i>);
  }
  return (
    <div className="col-5">
      {stars}
    </div>
  );
}

const Button = (props) => {
  let button;
  switch (props.ansIsCorrect) {
    case true:
      button = <button className="btn btn-success"><i className="fa fa-check" onClick={props.acceptAns} /></button>
      break;
    case false:
      button = <button className="btn btn-danger"><i className="fa fa-times" /></button>
      break;
    default:
      button = <button className="btn"
        disabled={props.selectedNum.length === 0}
        onClick={props.checkAns}
      >=</button>
      break;
  }
  return (
    <div className="col-2">
      {button}
      <br /><br />
      <div>
        <button className="btn btn-warning" disabled={props.redrawNum <= 0} onClick={props.redraw}><i className="fa fa-refresh" />&nbsp;{props.redrawNum}</button>
      </div>
    </div>
  );
}

const Answer = (props) => {
  return (
    <div className="col-5">
      {props.selectedNum.map((number, i) =>
        <span key={i} onClick={() => props.unSelectNumber(number)}>{number}</span>
      )}
    </div>
  );
}

const Numbers = (props) => {
  //const arrayOfNumbers = _.range(1, 10);
  const numberClassName = (number) => {
    if (props.selectedNum.indexOf(number) >= 0) {
      return 'selected';
    }
    if (props.usedNum.indexOf(number) >= 0) {
      return 'used';
    }
  }
  return (
    <div className="card text-center">
      <div>
        {Numbers.list.map((number, i) =>
          <span key={i} className={numberClassName(number)}
            onClick={() => props.selectNumber(number)}>
            {number}
          </span>
        )}
      </div>
    </div>
  );
};

const DoneFrame = (props) => {
  return (
    <div className="text-center">
      <h2>{props.doneStat}</h2>
      <button className="btn btn-primary" onClick={props.resetGame}>Play Again !</button>
    </div>
  );
}

Numbers.list = _.range(1, 10);

class Game extends React.Component {
  static randomNumber = () => 1 + Math.floor(Math.random() * 9);
  static initialState = () => ({
      selectedNumbers: [],
      randomNumberOfStars: Game.randomNumber(),
      usedNumbers: [],
      redrawNum: 5,
      doneStatus: null,
      answerIsCorrect: null,
  });
  constructor(props) {
    super(props);
    this.state = Game.initialState(),
    this.selectNumber = this.selectNumber.bind(this);
    this.unSelectNumber = this.unSelectNumber.bind(this);
  }

  resetGame = () =>{
    this.setState(Game.initialState());
  }

  selectNumber = (clickedNum) => {
    this.setState((prevState) => ({
      answerIsCorrect: null,
      selectedNumbers: prevState.selectedNumbers.indexOf(clickedNum) >= 0 ? prevState.selectedNumbers : prevState.selectedNumbers.concat(clickedNum)
    }));
  }

  unSelectNumber = (clickedNum) => {
    this.setState((prevState) => ({
      answerIsCorrect: null,
      selectedNumbers: _.remove(prevState.selectedNumbers, function (n) {
        return n !== clickedNum;
      })
    }));
  }
  checkAnswer = () => {
    this.setState(prevState => ({
      answerIsCorrect: prevState.randomNumberOfStars === prevState.selectedNumbers.reduce((acc, n) => acc + n, 0)
    }));
  }
  acceptAnswer = () => {
    this.setState(prevState => ({
      answerIsCorrect: null,
      usedNumbers: prevState.usedNumbers.concat(prevState.selectedNumbers),
      selectedNumbers: [],
      randomNumberOfStars: Game.randomNumber(),
    }), this.updateDoneStatus);
  }
  redraw = () => {
    this.setState(prevState => ({
      answerIsCorrect: null,
      selectedNumbers: [],
      randomNumberOfStars: Game.randomNumber(),
      redrawNum: prevState.redrawNum - 1,
    }),this.updateDoneStatus);
  }

  possibleSolutions = ({ randomNumberOfStars, usedNumbers }) => {
    const possibleNumbers = _.range(1, 10).filter(num =>
      usedNumbers.indexOf(num) === -1);

      return possibleCombinationSum(possibleNumbers,randomNumberOfStars);
  }

  updateDoneStatus = () => {
    this.setState(prevState => {
      if (prevState.usedNumbers.length === 9) {
        return { doneStatus: 'Done .. Nice  :) ' }
      }
      if (prevState.redrawNum === 0 && !this.possibleSolutions(prevState)) {
        return { doneStatus: 'Game Over !!' };
      }
    });
  }

  render() {
    return (
      <div>
        <h3>Play Nine</h3>
        <hr />
        <div className="row">
          <Stars numberOfStars={this.state.randomNumberOfStars} />
          <Button selectedNum={this.state.selectedNumbers}
            checkAns={this.checkAnswer}
            ansIsCorrect={this.state.answerIsCorrect}
            redraw={this.redraw}
            redrawNum={this.state.redrawNum}
            acceptAns={this.acceptAnswer} />
          <Answer selectedNum={this.state.selectedNumbers} unSelectNumber={this.unSelectNumber} />
        </div>
        <br />
        <br />
        {this.state.doneStatus ?
          <DoneFrame doneStat={this.state.doneStatus} resetGame={this.resetGame}/> :
          <Numbers selectedNum={this.state.selectedNumbers}
            usedNum={this.state.usedNumbers}
            selectNumber={this.selectNumber} />
        }

      </div>
    );
  }
}

class App extends React.Component {
  render() {
    return (
      <div>
        <Game />
      </div>
    );
  }
}
export default App;


