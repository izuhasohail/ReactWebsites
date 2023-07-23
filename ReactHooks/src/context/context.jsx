import React from 'react';
import { useState } from 'react';
import ClassContextComponent from './ClassContextComponent'
import FunctionContextComponent from './FunctionContextComponent'
import ThemeProvider from './ThemeContext';

export const ThemeContext=React.createContext();
export default function context() {
  return (
    <div>
        <ThemeProvider>
            {/* <button onClick={()=>setDarkTheme(prevTheme=>!prevTheme)}>Toggle Theme</button> */}
            <FunctionContextComponent/>
            {/* <ClassContextComponent/> */}

        </ThemeProvider>
      
    </div>
  )
}
