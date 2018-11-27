import React, { Component } from 'react';
import './App.css';
import NewTask from "./NewTask";
import List from "./List";

class App extends Component {
  constructor(){
    super();
    this.state={
      list: []
    }
    this.handleAddTask = this.handleAddTask.bind(this);
  }

  handleAddTask(value){
    let newArr = this.state.list.slice();
    newArr.push(value);
    this.setState({
      list: newArr
    })
  }

  render() {
    return (
      <div className="App">
        <NewTask add={this.handleAddTask} />
        <List tasks={this.state.list} />
      </div>
    );
  }
}

export default App;
