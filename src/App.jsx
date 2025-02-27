import { useState } from 'react'
import { ThemeProvider } from './darkLightMode_using_context-Api/DarkLight'
import Homepage from './darkLightMode_using_context-Api/Homepage'
import './darkLightMode_using_context-Api/DarkLight'


function App() {

  return (
    <>
     <ThemeProvider>
      <Homepage/>
     </ThemeProvider>
    </>
  )
}

export default App
