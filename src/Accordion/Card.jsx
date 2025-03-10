import React, { useEffect, useState } from 'react'
import FAQ from './faq.json';
import FAQcard from './FAQcard';

const Card = () => {

 const [faqData, setFaqData] = useState([]);

  useEffect(()=>{
    setFaqData(FAQ);
    console.log(faqData)
  },[])

  return (
    <>
    <div className="container w-screen h-screen bg-gray-500 flex flex-col items-center">
     <h1 className='font-bold text-3xl text-white mt-15'>FAQ'S About React</h1>
      <ul className='flex flex-col gap-5 mt-15'>
        {
            faqData.map((currEle)=>{
                return(
                   <FAQcard key={currEle.id} currData={currEle}/>
                )
            })
        }
      </ul>
      </div>
    </>
  )
}

export default Card;
