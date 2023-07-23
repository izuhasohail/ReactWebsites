import React, { useState } from "react";
import { useReducer } from "react";
import ToDo from './ToDo'


export const ACTIONS={
    ADD_TO:'add-todo',
    TOGGLE_TODO:'toggle-todo',
    DELETE_TODO:'delete-todo'
}

function reducer(todos,action){
    switch(action.type){
        case ACTIONS.ADD_TO: 
          return [...todos,newTodo(action.payload.name)];
        case ACTIONS.TOGGLE_TODO:
            return todos.map(todo=>{
                if(todo.id=== action.payload.id){
                    return{...todo,complete:!todo.complete} //reverse the polarity of the complete flag
                }
                return todo;
            }) 
        case ACTIONS.DELETE_TODO:
            return todos.filter(todo=> todo.id!==action.payload.id);
            
        default:
            return todos;    

    }

}
function newTodo(name){
    return{
        id:Date.now(),name:name,complete:false
    }
}



export default function ToDos(){
    const[todos,dispatch]=useReducer(reducer,[]);
    const [name,setName]=useState('');
    function handleSubmit(e){
        e.preventDefault();
        dispatch({
            type:ACTIONS.ADD_TO,
            payload:{name:name}
        })
        setName('');
    }
    console.log(todos);
    return(
        <div>
        <form onSubmit={handleSubmit}>
            <input type="text" value={name} onChange={e=>setName(e.target.value)}></input>
        </form>
        {
            todos.map(
                todo=>{
                    return <ToDo key={todo.id} todo={todo} dispatch={dispatch}/>
                }
            )
        }
        </div>
    )
}