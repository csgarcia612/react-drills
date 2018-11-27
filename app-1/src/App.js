import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state={
      text: ""
    }
    this.updateText = this.updateText.bind(this)
  }

updateText(event){
  this.setState({
    text: event.target.value
  })
}

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <div>
          <input value={this.state.text} onChange={this.updateText} />
        </div>
        <p className="App-intro">
          {this.state.text}
        </p>
      </div>
    );
  }
}

export default App;
