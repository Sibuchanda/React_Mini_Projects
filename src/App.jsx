import { useState } from 'react'
import {createBrowserRouter, RouterProvider } from 'react-router-dom'
import AppLayout2 from './MiniProjects/Titanic/AppLayout2';
import About from './MiniProjects/Titanic/About';
import getMovieData from './MiniProjects/Titanic/ApiData';
import Movies from './MiniProjects/Titanic/Movies';
import MovieDetails from './MiniProjects/Titanic/MovieDetails';
import getSingleMovieData from './MiniProjects/Titanic/GetMovieDetails';
import {Contact, getContactData} from './ReactRouter/FormComponent/Contact';


function App() {

  const router = createBrowserRouter([

   {
    path: '/',
    element: <AppLayout2/>,
    children: [
      {
        path: '/about',
        element: <About/>
      },
      {
        path: '/movie',
        element: <Movies/>,
        loader: getMovieData,
      },
      {
        path: '/movie/:movieID',
        element: <MovieDetails/>,
        loader: getSingleMovieData,
      },
      {
        path: '/contact',
        element: <Contact/>,
        action: getContactData,

      },
    ]
   }

  ]);


  return <RouterProvider router={router} />
}


export default App
