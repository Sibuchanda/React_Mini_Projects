import React from 'react'

const Card = ({currData}) => {

    const { id, title, body } = currData;

  return (
   <>
   <div className="container w-auto h-auto bg-blue-100 p-2 flex flex-col justify-around gap-4">
     <p>{id}</p>
     <p>Title : {title}</p>
     <p>{body}</p>
     <div className="buttons flex gap-4">
        <button className='w-20 h-auto bg-green-500 cursor-pointer p-1 rounded-md hover:bg-green-600'>Edit</button>
        <button className='w-20 h-auto bg-red-500 cursor-pointer p-1 rounded-md hover:bg-red-600'>Delete</button>
     </div>
   </div>
   </>
  )
}
export default Card;
