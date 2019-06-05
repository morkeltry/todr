
import React, { Component } from 'react';
import windowSize from 'react-window-size';
import Card from './CardBasic';
// import OtherComponent from './OtherComponent';
import './CardsSection.css';


class CardsSection extends Component {
  cardSize = ({ height, width }) => {
    const cardHeight = height*0.7;
    const cardWidth = cardHeight*0.615;
    return { height: cardHeight, width: cardWidth };
  }

  defaultCardPositions = (n, { height, width }) => {
    //TODO: use memoised cardSize
    const midCardXPos = (width-this.cardSize({ height, width }).width)*1/2;
    const yPos = (height-this.cardSize({ height, width }).height)*1/3;
    const xPosArr= new Array(n)
      .fill()
      .map ((_,idx) => (idx+1)*midCardXPos*2/(n+1)) ;
    const xYPos = xPosArr.map (xPos=> ({xPos,yPos}));
  console.log({ height, width, yPos});

    return xYPos;
  };

  constructor (props) {
    super (props);
    // const { height, width } = useWindowDimensions();
    // const { height, width } = { this.props.windowWidth, this.props.windowWidth };
    const [height, width]  =  [props.windowHeight || 600, props.windowWidth || 1200] ;
    const numberOfCards = this.props.cards.length;
    const cardSize = this.cardSize({ height, width });

    this.state = {
      activeCard : ~~((numberOfCards+1)/2) ,
      cardNPos : this.defaultCardPositions(numberOfCards,{ height, width }, cardSize ),
      cardSize
    }
  };

  render() {
    const visibleCards = this.props.cards.map ((card, idx) =>
       Object.assign( {},
         {card},
         this.state.cardNPos[idx],
         {cardSize : this.state.cardSize},
         {idx, key : 'card'+(idx+1)}
       )
    );

    return (
      <div className="positioned-element-container">
        {visibleCards.map ((card,idx) =>
          <Card
            {...card}
            active={ 1+idx===this.state.activeCard }
            distanceFromActive={ Math.abs(1+idx-this.state.activeCard) } 
          />
        )}
      </div>
    )
  };
}

export default windowSize(CardsSection);
