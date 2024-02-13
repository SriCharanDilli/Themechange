import { useContext, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import ThemeButton from './components/ThemebtnUI/ThemeButton'
import './App.css'
import Card from './components/Card/Card'
import ThemeContextProvider from './Context/ThemeContextProvider'
import ThemeContext from './Context/ThemeContext'

function App() {
  

  return (
    <>
<ThemeContextProvider>
<div className="flex flex-wrap min-h-screen items-center">
                <div className="w-full">
                    <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
                      <ThemeButton/>
                      <h1></h1>
                    </div>

                    <div className="w-full max-w-sm mx-auto">
                    <Card/>
                    </div>
                </div>
            </div>
            </ThemeContextProvider>
    </>
  )
}

export default App
