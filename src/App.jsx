import { useState } from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Contactus from './ReactRouter/Contactus.jsx';
import About from './ReactRouter/About.jsx';
import Home from './ReactRouter/Home.jsx';


function App() {

  const router = createBrowserRouter([
    {
      path: '/',
      element: <Home/>,
    },
    {
      path: '/about',
      element: <About/>,
    },
    {
      path: '/contact',
      element: <Contactus/>,
    }
  ]);

  return <RouterProvider router={router} />
}


export default App
