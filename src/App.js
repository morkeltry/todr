import React, { Component } from 'react';
import CardsSection from './CardsSection';
// import Form from './Form';

import './App.css';

class App extends Component {
  constructor () {

    const card1 = {id:0, name: 'card1'};
    const card2 = {id:1, name: 'card2'};
    const card3 = {id:2, name: 'card3'};
    const card4 = {id:3, name: 'card4'};
    const card5 = {id:4, name: 'card5'};
    const cardsArr = [card1,card2,card3,card4,card5];

    super ();
    this.state = {
      arr : [card1,card2,card3,card4,card5]
    }
  };

  render() {


    // Let's assume 1. arr is ALL of our cards (rewrite later if useful)
    // & 2. recentre, if passed, is a card in arr, with an id. It could instead be the id of the card (but not the number of activeCard)
    // Using id means we assume ids are sequential with none missing. Obviously could error check this, make a second index, etc, but it's just a demo!!
      const cycleCardsArray = ( arr, direction, recentre, ...args) => {
  console.log('got args:', arr, direction, recentre, args);
      const midCardIdx = arr.length/2;
      var midCard;
      const result = [];

      switch (direction) {
        case 'recentre' :
          midCard = recentre.id;
          break;

        case 'left' || 1 || '1'  || '+1' :
          midCard = (arr[midCard+1] || arr[0]).id
          break;

        case 'right' || -1 || '-1' :
          midCard = (arr[midCard-1] || arr[arr.length-1]).id
          break;
        default :
          return arr ;
      };
  console.log(midCard);
      arr.forEach ((card,idx) => {
        console.log(idx,arr[idx+midCard-midCardIdx]);
        result [idx] = arr[idx+midCard-midCardIdx];
      });
      return result;
    }


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
        <CardsSection
          cards={this.state.arr}
          swipeFn={ (args)=> console.log(cycleCardsArray(this.state.arr, args)) }
        />
      </div>
    )
  }
}

export default App;
