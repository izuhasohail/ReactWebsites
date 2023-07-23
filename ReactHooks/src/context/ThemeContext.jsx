import React,{
    useState,useContext
} from 'react'


 const ThemeContext=React.createContext();
 const ThemeUpdateContext=React.createContext();

 //custom hooks

 export function useTheme()
{
    return useContext(ThemeContext)
}

export function useThemeUpdate()
{
    return useContext(ThemeUpdateContext)
}

export default function ThemeProvider({children}) {
    const[darkTheme,setDarkTheme]=useState(true); 

    function toggleTheme(){
        setDarkTheme(prevDark=>!prevDark)
    }
  return (

    <div>
        <ThemeContext.Provider value={darkTheme}>
            <ThemeUpdateContext.Provider value={toggleTheme}>
            {children}
            </ThemeUpdateContext.Provider>
           
        </ThemeContext.Provider>
      
    </div>
  )
}
