import React, { Component } from 'react';
import Subject from './component/Subject';
import TOC from './component/TOC';
import Content from './component/Content';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      TOC:{
        first:"HTML",
        second:"CSS",
        third:"JavaScript",
      },
      Content:{
        title: "Edit and save to reload.",
        address: "src/App.js", 
        text: "Learn React"
      }
    }
  }
  
  render() {
    return (
      <div className="App">
        <Subject logo="logo"></Subject>
        <TOC first={this.state.TOC.first} second={this.state.TOC.second} third={this.state.TOC.third}></TOC>
        <Content title={this.state.Content.title} address={this.state.Content.address} text={this.state.Content.text}></Content>
      </div>
    );
  }
}

export default App;
