import React from 'react'
import Header from './Header';
import Footer from './Footer';
import { Outlet, useNavigate, useNavigation } from 'react-router-dom';

const AppLayout = () => {

  const navigation = useNavigation();
  // console.log(navigation);
  if(navigation.state === 'loading'){
    return (
      <div className="container w-screen h-screen bg-gray-500 flex justify-center items-center">
        <h1 className='text-4xl text-white font-bold'>Loading....</h1>
      </div>
    )
  }

  return (
    <>
    <Header/>
    <Outlet/>
    <Footer/>
    </>
  )
}

export default AppLayout;
