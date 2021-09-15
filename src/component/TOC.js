import React, { Component } from 'react';

class Subject extends Component {
    render() {
      return (
        <nav>
            <ul>
                <li><a href="1.html'">{this.props.first}</a></li>
                <li><a href="2.html'">{this.props.second}</a></li>
                <li><a href="3.html'">{this.props.third}</a></li>
            </ul>
        </nav>
      );
    }
  }
  
  export default Subject;