import React from "react";

function Todo(props){
    let chores = props.list.map((element, index)=><h2 key={index}>{element}</h2>)
    return(
        <div>
        {chores}
        </div>
    )
}

export default Todo;