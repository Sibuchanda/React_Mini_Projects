import React, { useContext } from 'react'
import { BioContext } from '.';
const Home = () => {

 const {myName, myAge} = useContext(BioContext);

  return (
   <>
    <h1>This is Home. And my name is : {myName}  and I am {myAge} years old</h1>
   </>
  )
}

export default Home;
