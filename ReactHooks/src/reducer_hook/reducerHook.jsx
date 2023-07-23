import React, { useState } from 'react'
import { useReducer } from 'react'
import ToDos from './todosExample'
 const ACTIONS={
    INCREMENT: 'increment',
    DECREMENT: 'decrement'
}

function reducer(state,action){
    switch(action.type){
        case ACTIONS.INCREMENT: return {count:state.count+1} ;
        case ACTIONS.DECREMENT: return {count:state.count-1};
        default: return state;
    }

}

export default function Reducer() {
   
    const[state,dispatch]=useReducer( reducer, { count:0 } )
    const[exmp,setExmp]=useState(false);



  return (
    <div>
       {!exmp? <><button onClick={()=>dispatch({type: ACTIONS.DECREMENT})}>-</button>
        <span style={{fontSize:'25px'}}>{state.count}</span>
        <button onClick={()=>dispatch({type:ACTIONS.INCREMENT})}>+</button>
        <button style={{
            marginTop:'30px',
            marginLeft:'10px'
        }} onClick={()=>setExmp(!exmp)}>Switch Example</button></>
        :<ToDos></ToDos>
    }
        
      
    </div>
  )
}
