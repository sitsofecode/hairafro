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
      <Link to={items.id}
      //  state={{ search: searchParams.toString(), type: typeFilter }}
      >
        <div key={items.id} className='group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl  rounded-lg shadow-lg'>
          <div className='bg-white rounded-lg flex justify-center'>
            <img src={items.imageUrl} alt='' className='h-full w-full object-cover transition-transform duration-500 group-hover:scale-125' />
          </div>
            <h1 className="font-dmserif  font-bold text-black">{items.name}</h1>
          <div className="absolute   to-button/40 group-hover:bg-button group-hover:via-button/60 group-hover:to-button/70"></div>
          <div className="absolute inset-0 flex 2xl:translate-y-[50%] hidden group-hover:block group-hover:transition-opacity flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
            <p className="mb-3 text-lg  text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis dolore adipisci placeat.</p>
            <div className='space-y-6 m-16  font-bold'>
              {/* <h1 className=''> {items.name}</h1> */}
              {/* <p >  Tarif : {items.price} </p> */}
              <button className=' bg-button text-white font-mediume px-4 hover:text-button hover:border-2  hover:border-button rounded p-2 hover:bg-bg2'> Decouvrir</button>
            </div>
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
        <div className='grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4 m-10'>
          {card}
        </div>
      </div></section>
  )
}

export default Illustration