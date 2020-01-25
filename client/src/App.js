import React, { Component } from 'react';
import './App.css';
import PlayerList from './components/PlayerList';
import styled from 'styled-components';

const appStyling = styled.div`
width: 100%
height: 100%; 
background: #c21807;
`

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
        <PlayerList players={this.state.players} />
      </div>
    )
  }

}

export default App;
