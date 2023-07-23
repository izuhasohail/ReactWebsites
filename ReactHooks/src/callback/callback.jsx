import React, { useCallback, useState } from 'react';
import List from './List'
/*useMemo is used to memorize the value while useCallBack is is used to memorize the
entire function */

export default function callback() {
    const[number,setNumber]=useState(1);
    const[dark,setDark]=useState(false);

    const getItems=useCallback(()=>{
        return[number,number+1,number+2]
    },[number])/* By using useCallBack , getItems is being 
    set to the entire function not just the return value(as 
        it used to happen in useMemo) */

    const theme={
        backgroundColor:dark?'#333':'#FFF',
        color:dark?'#FFF':'#333'
    }

    



  return (
    <div style={theme}>
        <input
        type='number'
        value={number}
        onChange={e=>setNumber(parseInt(e.target.value))}
        />
        <button onClick={()=>setDark(prevDark=>!prevDark)}>
            Toggle Theme
        </button>
        <List getItems={getItems}/>
      
    </div>
  )
}
