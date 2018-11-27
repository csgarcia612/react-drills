import React, {Component} from "react";

class NewTask extends Component{
    constructor(){
        super();
        this.state={
            userInput: ""
        }
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleAdd = this.handleAdd.bind(this);
    }

    handleInputChange(event){
        this.setState({
            userInput: event.target.value
        })
    }

    handleAdd(){
        this.props.add(this.state.userInput);
        this.setState({
            userInput: ""
        });
    }

    render(){
        return(
            <div>
                <input
                value={this.state.userInput}
                onChange={this.handleInputChange}
                />
                <button onClick={this.handleAdd}>Add</button>
            </div>
        )
    }

}

export default NewTask;