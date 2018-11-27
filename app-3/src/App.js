import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state={
      text: "",
      array:["coke", "pepsi", "jolt", "surge", "mtndew", "waterjoe"]
    }
    this.updateText = this.updateText.bind(this);
  }

  updateText(event){
    this.setState({
      text: event.target.value
    })
  }

  render() {
    let Caffine = this.state.array.filter((element, index)=>{
      return element.startsWith(this.state.text) ? <h2 key={index}>{element}</h2> : null
    }).map((element, index)=>{
      return (<h2 key={index}>{element}</h2>)
    })
    console.log(Caffine);
    return (
      <div className="App">
      <input value={this.state.text} onChange={this.updateText} />
        {Caffine}
      </div>
    );
  }
}

export default App;
