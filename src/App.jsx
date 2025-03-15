import React from 'react'
import Message from './HigherOrderComponent/Message';
import Border from './HigherOrderComponent/Border';

const UpdatedMessage = Border(Message);

const App = () => {

  return (
   <UpdatedMessage text="Welcome to React Higher Order Component(HOC)"/>
  )
}


export default App;