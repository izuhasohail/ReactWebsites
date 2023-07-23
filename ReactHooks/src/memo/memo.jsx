import React, { useEffect, useMemo, useState } from 'react'

//memo is short for memorization & idea behind this is 
//caching of a value so you don't have to 
//compute it every single time

export default function memo() {
    const[number,setNumber]=useState(0);
    const[dark,setDark]=useState(false);
    const doubleNumber=useMemo(()=>{ return slowFunction(number)},[number]);//the dependency is 'number'
    const themeStyle=useMemo(()=>{
        /*the other use case of useMemo is
        referential equality*/ 
       return { 
        backgroundColor:dark?'black':'white',
        color:dark?'white':'black'
        /*if dark doesn't change, we will get the exact same
         reference of themeStyle as we previously had by 
        using useMemo */
    }
    },[dark])

    useEffect(()=>{
        console.log('theme changed')
    },[themeStyle])

    function slowFunction(num){
        console.log('Calling Slow Function');
        for(let i=0;i<=10000000000000;i++){
            return num*2;
        }
    }


  return (
    <div>
        <input type='number' value={number} onChange={(e)=>setNumber(parseInt(e.target.value))}></input>
        <button onClick={()=>{setDark(prevDark=>!prevDark)}}>Change Theme</button>
        <div style={themeStyle}>{doubleNumber}</div>
      
    </div>
  )
}
