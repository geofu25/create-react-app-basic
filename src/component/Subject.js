import React, { Component } from 'react';
import logo from '../logo.svg';

class Subject extends Component {
    render() {
      return (
        <header className="App-header">
            <img src={logo} className="App-logo" alt={this.props.logo} />
        </header>
      );
    }
  }
  
  export default Subject;