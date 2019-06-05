import React, { Component } from 'react';
// import OtherComponent from './OtherComponent';
// import './BlankComponent.css';

const arbitraryHexColor = (n,x)=>
  '#'+
  ((x||15)**n)
    .toString(16)
    .padStart(6, 'a') ;


class Card extends Component {
  constructor () {
    super ();
    this.state = {
    }
  };

  render() {
    const { xPos, yPos, idx, active, distanceFromActive, cardSize } = this.props;
    const { height, width } = cardSize;
    const styles = {
      position: 'absolute',
      top: active ? yPos : yPos+distanceFromActive*distanceFromActive*5,
      left: xPos,
      height,
      width,
      backgroundColor: arbitraryHexColor(idx+1),
      zIndex : active ? 10 : 10-distanceFromActive
    };

    return (
      <div style={{ ...styles }} >
        <p>{JSON.stringify(this.props.card)+(this.props.idx)+styles.backgroundColor}</p>
      </div>
    );
  };
}

export default Card;
