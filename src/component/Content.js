import React, { Component } from 'react';

class Content extends Component {
    
    render() {
      return (
        <article className="App-article">
            <p> {this.props.title.substr(0, this.props.title.indexOf(' '))} <code>{this.props.address}</code> {this.props.title.substr(this.props.title.indexOf(' ')+1)}</p>
            <a className="App-link" href="https://reactjs.org"  target="_blank" rel="noopener noreferrer">
                {this.props.text}
            </a>
        </article>
      );
    }
  }

  export default Content;