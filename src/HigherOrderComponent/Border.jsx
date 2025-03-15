import React from 'react'

const Border = (WrapperComponent) => {
  return (props) =>(
    <div className='border-2 border-red-600 text-green-500 p-4'>
      <WrapperComponent {...props} />
    </div>
  )
}

export default Border;