import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state={
      array:["coke", "pepsi", "jolt", "surge", "mtndew", "waterjoe"]
    }
  }


  render() {
    let Caffine = this.state.array.map((element, index)=>{
      return (<h2 key={index}>{element}</h2>)
    })
    return (
      <div className="App">
        {Caffine}
      </div>
    );
  }
}

export default App;
