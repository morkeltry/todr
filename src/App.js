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
    return (
      <div className="App">
        <header className="App-header">
        </header>
        <CardsSection />
      </div>
    )
  }
}

export default App;
