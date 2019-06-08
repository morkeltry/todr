
import React, { Component } from 'react';
// import OtherComponent from './OtherComponent';
import './TodoLogo.css';
import todoLogo from './assets/todo.png';

class TodoLogo extends Component {
  constructor () {
    super ();
    this.state = {
    }
  };

  render() {
    const { width } = this.props;

    const divStyle = {
      position: 'relative',
      height: width*1.5,
      width: width*1.5,
      left: 0,
      bottom: 0,
      borderRadius: width*0.75,
      backgroundColor : 'white'
    }

    const logoStyle = {
      position: 'absolute',
      bottom : width*0.25,
      left : width*0.25,
      width,

    }
    return (
      <div style={divStyle}>
        <img style={logoStyle} src={ todoLogo } alt="to do's"/>
      </div>
    );
  };
}

export default TodoLogo;
