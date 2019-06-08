
import React, { Component } from 'react';
// import OtherComponent from './OtherComponent';
import './UserHeader.css';


const maxWidthTextSize = (width, text) => {
  if (!text)
    return ''
  // riskFactor = 1 should be safe for all characters
  const riskFactor = 1.8;
  const pxSize = riskFactor*width/text.length;
  const roundDown = [6,8,10,12,15,18,23,28,32,40]
    .reverse()
    .find( el=> el<=pxSize );
  return 'px'+roundDown;
}

class UserHeader extends Component {
  constructor (props) {
    super ();
    const {width} = props.cardSize;

    // state is currently unused
    //
    // this.state = {
    //   width
    // };

    this.maxWidthTextSize = text =>
      maxWidthTextSize (width, text);
  };


  render() {
    const { username, name } = this.props.user;
    return (
      <div>
        <p className={ 'user-header__user '+this.maxWidthTextSize(username) }>
          {username}
        </p>
        <p className={ 'user-header__name '+this.maxWidthTextSize(name) }>
          {name}
        </p>
      </div>
    );
  };
}

export default UserHeader;
