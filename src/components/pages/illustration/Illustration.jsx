import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
function Illustration() {

  const [coiffure, setCoiffure] = useState([])
  useEffect(() => {
    fetch('api/coiffures')
      .then(response => response.json())
      .then(data => setCoiffure(data.coiffures))
  }, []);

  console.log(coiffure)
  const card = coiffure.map((items) => {
    return (
      <Link to={`illustration ${items.id}`}
      //  state={{ search: searchParams.toString(), type: typeFilter }}
      >
        <div key={items.id} className='flex m-20 shadow-lg '>
          <div className='bg-white rounded-lg'>
            <img src={items.imageUrl} alt='' className='h-72 rounded-lg w-56' />
          </div>
          <div className='space-y-6 m-16  font-bold'>
            <h1 className=''> {items.name}</h1>
            <p >  Tarif : {items.price} </p>
            <button className=' bg-button text-white font-mediume px-4 hover:text-button hover:border-2  hover:border-button rounded p-2 hover:bg-bg2'> Decouvrir</button>
          </div>
        </div>
      </Link>
    )
  })

  return (
    <section className=' bg-bg2'>
      <div>
        <div className='flex justify-center items-center '>
          <h1 className='text-text1  text-center text-4xl font-medium mt-8 flex ml-0 ' >
            Nos illustrations
          </h1>
        </div>
        <p className='text-center my-10'>Ces prototypes font parti d'une première phase expérimentale
        </p>
        <div className='grid grid-cols-2 gap-6 '>
          {card}
        </div>
      </div></section>
  )
}

export default Illustration