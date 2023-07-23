import { useState } from 'react'
import './App.css';
import Reducer from './reducer_hook/reducerHook';
import State from './state_hook/statehook';
import Effect from './effect/effect';
import Memo from './memo/memo';
import Context from './context/context';
import CallBack from './callback/callback';
import CustomHook from './customhook/Main'

function App() {
  

  return (
    <div>
      
    {/* <Reducer></Reducer> */}
    {/* <State></State> */}
    {/* <Effect></Effect> */}
    {/* <Memo></Memo> */}
    {/* <Context/> */}
    {/* <CallBack/> */}
    <CustomHook/>
    </div>
  )
}

export default App
