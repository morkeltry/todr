
import React, { Component } from 'react';
import windowSize from 'react-window-size';
import Swipeable from "react-swipy";
import Card from './CardBasic';
import UserHeader from './UserHeader';
import Company from './Company';
import TodoLogo from './TodoLogo';
import AsTable from './AsTable';
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
         {user: card},
         this.state.cardNPos[idx],
         {cardSize : this.state.cardSize},
         {idx, key : 'card'+(idx+1)}
       )
    );
    return (
      <div className="positioned-element-container v-align-centre">
        {visibleCards.map ((card,idx) =>
          <Card
            {...card}
            active={ 1+idx===this.state.activeCard }
            distanceFromActive={ Math.abs(1+idx-this.state.activeCard) }
            swipeFn={ this.props.swipeFn }
          >
            <UserHeader {...card} />
            <AsTable contentType="website" cardSize={ card.cardSize } >
              <p className= "border valign-block-element" >{card.user.website}</p>
            </AsTable>
            <AsTable contentType="phone" cardSize={ card.cardSize }>
              <p className= "border valign-block-element" >{card.user.phone}</p>
            </AsTable>
            <AsTable contentType="email" cardSize={ card.cardSize }>
              <p className= "border valign-block-element" >{card.user.email}</p>
            </AsTable>
            <AsTable contentType="address" cardSize={ card.cardSize }>
              <div className= "border valign-block-element" >
                {Object.keys(card.user.address)
                  .map (key =>
                    (typeof card.user.address[key] !== 'object') ?
                      <p className='squash-vertically '>{card.user.address[key]}</p>
                      : null
                  )}
              </div>
            </AsTable>
            <Company company={"card.user.company"} cardWidth={ card.cardSize.width }/>
            <TodoLogo width={32}/>
          </Card>
        )}
      </div>
    )
  };
}

export default windowSize(CardsSection);
