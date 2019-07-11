import React from "react";


function ToDoItem (props)
{
  const styleClass = {textDecoration: 'line-through',color:'#888'}
  return(

    <div className="todo-item">
           <input type="checkbox" checked = {props.item.completed}
          onChange={() => props.handleChange(props.item.id)}
        />
           <p style={props.item.completed?styleClass:null}>{props.item.text}</p>
           <button onClick = {() => props.handleedit(props.item.id,props.item.text)} style={{position:"absolute",right:"65px"}}>Edit</button>
           <button onClick = {()=>props.handleDelete(props.item.id)} style={{position:"absolute",right:"0px"}}>Delete</button>
       </div>

  );
}

export default ToDoItem
