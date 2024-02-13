import React from "react";
import ThemeContext from "./ThemeContext";
import { useState } from "react";

function ThemeContextProvider({children}) {
    const [Theme,setTheme]=useState(false)
  return (
    <ThemeContext.Provider value={{Theme,setTheme}}>
      {children}
    </ThemeContext.Provider>
  )
}

export default ThemeContextProvider
