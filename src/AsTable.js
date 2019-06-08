
import React, { Component } from 'react';
// import OtherComponent from './OtherComponent';
// import './AsTable.css';
import wwwLogo from './assets/www-logo.png';

class AsTable extends Component {
  constructor () {
    super ();
    this.state = {
    }
  };

  render() {
    console.log(this.props.children );

    var header = null;
    switch (this.props.contentType) {
      case 'website' :
        header = <img src={wwwLogo} alt="website" width={this.props.width || '32'} />
        break
      case 'phone' :
        header = <span>Tel:</span> ;
        break
      case 'address' :
        header = <span>Address:</span> ;
        break
      case 'address' :
        header = <span>Email:</span> ;
        break
      default : {}
    }

    return (
      <div className="flex-container">
        <span className="flex-child-left">
          { header }
        </span>
        <span className="flex-child-right">
          <a href={'#'} target="_blank">
              { this.props.children }
          </a>
        </span>
      </div>
    );
  };
}

export default AsTable;
