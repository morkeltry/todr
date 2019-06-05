import React, { Component } from 'react';
import CardsSection from './CardsSection';
// import Form from './Form';

import './App.css';

class App extends Component {
  constructor () {
    super ();
    this.state = {
    }
  };

  render() {
    const card1 = {name: 'card1'};
    const card2 = {name: 'card2'};
    const card3 = {name: 'card3'};
    const card4 = {name: 'card4'};
    const card5 = {name: 'card5'};

    return (
      <div className="App">
        <header className="App-header">
        </header>
        {/*
        <CardsSection cards={[]}/>
        <CardsSection cards={[card1]}/>
        <CardsSection cards={[card1,card2,card3]}/>
        <CardsSection cards={[card2,card3,card4]}/>
        */}
        <CardsSection cards={[card1,card2,card3,card4,card5]}/>
      </div>
    )
  }
}

export default App;
