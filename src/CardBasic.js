import React, { Component } from 'react';
import Swipeable from "react-swipy";
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
    const posStyles = {
      position: 'absolute',
      top: active ? yPos : yPos+distanceFromActive*distanceFromActive*5,
      left: xPos,
      height,
      width,
      zIndex : active ? 10 : 10-distanceFromActive
    };
    const contentStyles = {
      height,
      width,
      backgroundColor: arbitraryHexColor(idx+1)
    }
    const swipyProps = {
      limit: width*1,
      onSwipe: this.props.swipeFn
    }

    return (
      <div style={ posStyles } >
        <Swipeable {...swipyProps} >
          <div style={ contentStyles }>
            <p>{JSON.stringify(this.props.card)+(this.props.idx)+contentStyles.backgroundColor}</p>
          </div>
        </Swipeable>
      </div>
    );
  };
}

export default Card;
