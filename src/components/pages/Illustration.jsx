import React, { useEffect, useState } from 'react'

function Illustration() {

  const [coiffure , setCoiffure] = useState([])
   useEffect (()=>{
    fetch('api/coiffures')
    .then (response  => response.json())
    .then ( data => console.log(data))
   },[]);

  //  console.log(coiffure)
  //  const card = c

  return (
    <section className='h-screen bg-homeBg1'> 
    <div>
      <h1>
        Nos illustrations
      </h1>
      <p>
      Here are some amazing arts. This is just a placeholder text.
      </p>
    </div></section>
  )
}

export default Illustration