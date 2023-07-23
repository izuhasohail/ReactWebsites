import React,{useContext} from 'react';
import { useTheme,useThemeUpdate } from './ThemeContext';

export default function FunctionContextComponent() {
    const darkTheme=useTheme();
    const toggleTheme=useThemeUpdate();



    const themeStyle={
        backgroundColor:darkTheme?'#333':'#CCC',
        color:darkTheme?'#CCC':'#333',
        padding:'2rem',
        margin:'2rem'
    }
  return (
    <div>
        <button onClick={toggleTheme}>Toggle theme</button>
        <div style={themeStyle}>Function Theme</div>
    </div>
  )
}
