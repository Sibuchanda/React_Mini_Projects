import { useState } from 'react'
import Home from './contextAPI/Home'
import { BioProvider } from './contextAPI'
import './contextAPI/index'



function App() {

  return (
    <>
    <BioProvider>
     <Home/>
     </BioProvider>
    </>
  )
}

export default App
