import React, { Component } from 'react';
import CardsSection from './CardsSection';
import users from './mockdata/users.json';
import todos from './mockdata/todos.json';
// import Form from './Form';

import './App.css';

class App extends Component {
  mutableStateClone = Object.assign({},this.state);

  todoSetter = (userId, todoBucket) => {
    const newObj = {};
    newObj['todos_'+userId] = todoBucket;
    newObj['todos_'+userId].hasUpdated = true;
    // this.setState (newObj);
    Object.assign(this.mutableStateClone, newObj)
    // console.log(this.mutableStateClone);
  };

  appendTodo = (todo, state, setter, options) => {
    const { userId } = todo;
    const newTodoBucket = (options.wipeIfNew && state['todos_'+userId] && !state['todos_'+userId].hasUpdated) ?
      { complete:[], stillToDo: [] }
      : state['todos_'+userId] || { completed:[], stillToDo: [] };
    const relevant = todo.completed ?
      'completed' : 'stillToDo';
    newTodoBucket[relevant].push(todo);
    setter (userId, newTodoBucket);
  };

  constructor () {
    super();
    // const card1 = {id:0, name: 'card1'};
    // const card2 = {id:1, name: 'card2'};
    // const card3 = {id:2, name: 'card3'};
    // const card4 = {id:3, name: 'card4'};
    // const card5 = {id:4, name: 'card5'};
    // const cardsArr = [card1,card2,card3,card4,card5];

    const cardsArr = users
    .slice(0,5)
    .map (userObj => (Object.assign(userObj, {hasUpdated : false}))) ;
    // .map (x => ({id:x.id, username:x.name, username:x.name, phone:x.phone, website:x.website, }));

console.log('___________',  this.mutableStateClone);
console.log( Object.keys(this.mutableStateClone));
const stateToSet = ( Object.assign ( {}, {
      users : cardsArr,
      cardsVisible : 5,
      midCard : 3
    },
    {other:'bollox'},
    this.mutableStateClone ));
console.log(stateToSet);
    this.state = Object.assign (
    this.mutableStateClone , {
      users : cardsArr,
      cardsVisible : 5,
      midCard : 3
    });



    todos.forEach (todo => {
      this.appendTodo(todo, this.mutableStateClone, this.todoSetter, {wipeIfNew: true} );
    });

  };



  render() {

    // slicedArray is a helper and does not mutate state (also pure on args)
    const slicedArray = ( baseArr, midCardPos, resultSize, ...args) => {
      resultSize = resultSize || baseArr.length;
      const midCardIdx = (resultSize-1)/2;

      return new Array(resultSize)
        .fill()
        .map ((_,idx) => {
          console.log(idx, (baseArr.length+idx+midCardPos-midCardIdx)%baseArr.length);
          return (baseArr.length+idx+midCardPos-midCardIdx)%baseArr.length;
        })
        .map ( idx => baseArr[idx] );
    };

    // cycleArray mutates only state.midCard
    const cycleArray = ( baseArr, midCardPos, direction, recentre, ...args) => {
      var newMidCard;

      switch (direction) {
        case 'recentre' :
          newMidCard = recentre.id;
          break;
        case 'left' || 1 || '1'  || '+1' :
          newMidCard = (baseArr[midCardPos+1] || baseArr[0]).id
          break;
        case 'right' || -1 || '-1' :
          newMidCard = (baseArr[midCardPos-1] || baseArr[baseArr.length-1]).id
          break;
        default :
          return midCardPos ;
      };
      this.setState({ midCard: newMidCard });
      return midCardPos;
    };


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
          cards={ slicedArray( this.state.users, this.state.midCard, this.state.cardsVisible ) }
          swipeFn={ (args)=>  {
            const { users, cardsVisible, midCard } = this.state;
            const newMidPos  = cycleArray( users, midCard, args);
          } }
        />
      </div>
    )
  }
}

export default App;
