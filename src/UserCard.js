
import React, { Component } from 'react';
import Card from './CardBasic';
import UserHeader from './UserHeader';
import Company from './Company';
import TodoLogo from './TodoLogo';
import AsTable from './AsTable';
// import OtherComponent from './OtherComponent';
// import './UserCard.css';

class UserCard extends Component {
  constructor () {
    super ();
    this.state = {
    }
  };

  render() {
    const { card } = this.props;
    return (
      <div>
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
    </div>
    );
  };
}

export default UserCard;
