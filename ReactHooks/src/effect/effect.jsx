import React, { useEffect, useState } from 'react'
import Window from './windowExample'

export default function Effect() {
    const[resourceType,setresourceType]=useState('posts');
    const[item,setItem]=useState([]);
    const[windowExmp,setWidnowExmp]=useState(false);

    console.log('render')

    useEffect(()=>{
        console.log('resource type changes')
        fetch(`https://jsonplaceholder.typicode.com/${resourceType}`)
       .then(response => response.json())
       .then(json => setItem(json))
    },[resourceType])


  return (
    <div>
        { (!windowExmp) ? <><button onClick={()=>setresourceType('posts')}>Posts</button>
        <button onClick={()=>setresourceType('users')}>Users</button>
        <button onClick={()=>setresourceType('comments')}>Comments</button>
        <h1>{resourceType}</h1>
        {
            item.map(item=>{
               return <pre>{JSON.stringify(item)}</pre>
            })
        }
        <button onClick={()=>setWidnowExmp(!windowExmp)}>Switch Example</button></>:<Window/>}

      
    </div>
  )
}
