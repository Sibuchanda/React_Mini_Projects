import {useState, createContext } from "react";


const ThemeContext = createContext(); // This is component not a varibale

const ThemeProvider = ({ children })=>{

 const [theme, setTheme] = useState("dark");
 const handleButtonToggle = ()=>{
    return setTheme((preTheme)=> (preTheme === "dark" ? "light" : "dark"));
 }

    return(
        <ThemeContext.Provider value={{ theme, handleButtonToggle }}>
          {children}
        </ThemeContext.Provider>
    )
}

export {ThemeContext, ThemeProvider};