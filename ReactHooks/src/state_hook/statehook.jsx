import React, { useState } from 'react'

export default function statehook() {
    const[state,setState]=useState({count:0,theme:'blue'});
  return (
    <div>
        <button onClick={()=>setState(prev=>
            {return {...prev,count:prev.count-1}})}>-</button>
        <span>{state.count}</span>
        <span>{state.theme}</span>
        <button onClick={()=>
            setState(
                prev=>{return {...prev,count:prev.count+1}}
                )
                }>+</button>


                {/* when  using object inside our state, then while updating 
                the object, make sure to update with the all the old values 
                bcz they don't get merged all together */}
      
    </div>
  )
}
