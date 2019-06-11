
import React, { Component } from 'react';
// import OtherComponent from './OtherComponent';
// import './AsTable.css';
import { maxWidthTextSize } from './helpers';
import wwwLogo from './assets/www-logo.png';

class AsTable extends Component {
  constructor () {
    super ();
    this.state = {
    }
  };

  render() {
    var header = data = null;
    var data = this.props.children;
    var { height, width } = this.props.cardSize;
    const [ cardHeight, cardWidth ] = [ height, width ]
    const imgHeaderWidth = this.props.imgHeaderWidth || cardWidth*0.08 || 20 ;
    const calculatedFontSize = typeof data.props.children === 'string' ?
      maxWidthTextSize (cardWidth*0.8, data.props.children.padEnd(16))
      : null ;
    var fontSize = this.props.fontSize || calculatedFontSize || cardWidth*0.06 || null ;

    switch (this.props.contentType) {
      case 'website' :
        header = <img src={wwwLogo} alt="website" width={ imgHeaderWidth } />
        data = <a href={'#'} target="_blank">
            { this.props.children }
          </a>
        break
      case 'phone' :
        header = <span>Tel:</span> ;
        break
      case 'address' :
        header = <span>Address:</span> ;
        break
      case 'email' :
        header = <span>Email:</span> ;
        break
      default : {}
    }

    return (
      <div className="flex-container" style={{ fontSize, height: cardHeight*0.14, verticalAlign: "middle" }} >
        <span className="flex-child-left" style={{ fontSize, verticalAlign: "middle" }} >
          { header }
        </span>
        <span className="flex-child-right" style={{ fontSize, verticalAlign: "middle" }} >
          { data }
        </span>
      </div>
    );
  };
}

export default AsTable;
