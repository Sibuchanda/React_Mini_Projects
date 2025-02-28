import { useState } from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import AppLayout from './ReactRouter/AppLayout/AppLayout';
import About from './ReactRouter/AppLayout/About';
import Contact from './ReactRouter/AppLayout/Contact';

function App() {

  const router = createBrowserRouter([
    {
      path: '/',
      element: <AppLayout/>,
      children: [
        {
          path: '/about',
          element: <About/>,
        },
        {
          path: '/contact',
          element: <Contact/>,
        }
      ]
    }
    
  ]);

  return <RouterProvider router={router} />
}


export default App
