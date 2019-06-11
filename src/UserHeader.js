
import React, { Component } from 'react';
// import OtherComponent from './OtherComponent';
import { maxWidthTextSize } from './helpers';
import './UserHeader.css';


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
    // more readable than the alternatives :/
    const maxWidthTextSize = this.maxWidthTextSize;

    return (
      <div>
        <p className={ 'user-header__user '} style={{ fontSize: maxWidthTextSize(username) }}>
          {username}
        </p>
        <p className={ 'user-header__name '} style={{ fontSize: maxWidthTextSize(name) }}>
          {name}
        </p>
      </div>
    );
  };
}

export default UserHeader;
