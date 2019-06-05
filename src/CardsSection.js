
import React, { Component } from 'react';
import windowSize from 'react-window-size';
// import OtherComponent from './OtherComponent';
// import './CardsSection.css';


class CardsSection extends Component {
  cardSizes = ({ height, width }) => {
    const cardHeight = height*0.7;
    const cardWidth = cardHeight*0.315;
    return { height: cardHeight, width: cardWidth };
  }

  defaultCardPositions = (n, { height, width }) => {
    const midCardXPos = (width-this.cardSizes({ height, width }).width)*1/2;
    const yPos = (height-this.cardSizes({ height, width }).height)*3/4;
    const xPosArr= new Array(n)
      .fill()
      .map ((_,idx) => (idx+1)*midCardXPos*2/(n+1)) ;
    const xYPos = xPosArr.map (xPos=> ({xPos,yPos}));

    return xYPos;
  };

  constructor (props) {
    super (props);
    const  [height, width]  =  [props.windowHeight || 800, props.windowWidth || 1200] ;

    this.state = {
      activeCard : ~~((this.props.cards.length+1)/2) ,
      cardNPos : this.defaultCardPositions(this.props.cards.length,{ height, width } )
    }
  };

  render() {
    return (
      <div>

        {this.state.activeCard},{JSON.stringify(this.state.cardNPos)}
      </div>
    );
  };
}

export default windowSize(CardsSection);
