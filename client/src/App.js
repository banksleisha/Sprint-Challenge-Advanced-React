import React, { Component } from 'react';
import './App.css';

class App extends Component {

  constructor() {
    super()
    this.state ={
      players:[]
    };
  }

  componentDidMount() {
    fetch(`http://localhost:5000/api/players`)
    .then(result => result.json())
    .then(result => this.setState({ players: result }))
    .catch(error => {
      console.log("error", error);
    });
  }

  render() {
    return (
      <div className="App">
        <h1>Women's World Cup</h1>
      </div>
    )
  }

}

export default App;
