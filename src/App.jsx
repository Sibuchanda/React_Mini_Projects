import { useState } from 'react'
import {createBrowserRouter, RouterProvider } from 'react-router-dom'
import AppLayout from './ReactRouter/DynamicNavigation/AppLayout';
import Services from './ReactRouter/DynamicNavigation/Services';
import About from './ReactRouter/DynamicNavigation/About';
import Contact from './ReactRouter/DynamicNavigation/Contact';

function App() {

  const router = createBrowserRouter([

   {
    path: '/',
    element: <AppLayout/>,
    children: [
      {
        path: '/service',
        element: <Services/>
      },
      {
        path: '/about',
        element: <About/>
      },
      {
        path: '/contact',
        element: <Contact/>
      },
    ]
   }

  ]);


  return <RouterProvider router={router} />
}


export default App
