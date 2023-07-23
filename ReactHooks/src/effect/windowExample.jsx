import React, { useEffect, useState } from 'react'

export default function windowExample() {

    const[windowwidth,setwindowidth]=useState(window.innerWidth)

    const handleresize=()=>{
        setwindowidth(window.innerWidth);

    }

    useEffect(()=>{
        window.addEventListener('resize',handleresize)

        return()=>{
            window.removeEventListener('resize',handleresize)
        }//clean up 
    },[])
  return (
    <div>
        {windowwidth}
      
    </div>
  )
}
