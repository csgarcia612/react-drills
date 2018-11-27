import React, { Component } from 'react';
import './App.css';
import Todo from "./Todo";

class App extends Component {
  constructor(){
    super();
    this.state={
      text: "",
      list: []
    }
    this.updateText = this.updateText.bind(this);
    this.updateList = this.updateList.bind(this);
  }

  updateText(event){
    this.setState({
      text: event.target.value
    })
  }

  updateList(){
    let tempArr = this.state.list.slice();
    tempArr.push(this.state.text);
    this.setState({
      list: tempArr
    })
  }

  render() {
    console.log(this.state)
    return (
      <div className="App">
      <input value={this.state.text} onChange={this.updateText} />
      <button onClick={this.updateList}>Update List</button>
      <Todo list={this.state.list} />
      </div>
    );
  }
}

export default App;
