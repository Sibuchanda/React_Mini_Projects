import { useState } from 'react'
import Home from './contextAPI/Home'
import About from './contextAPI/About'
import { BioProvider } from './contextAPI'
import './contextAPI/index'



function App() {

  return (
    <>
    <BioProvider>
     <Home/>
     <About />
     </BioProvider>
    </>
  )
}

export default App
