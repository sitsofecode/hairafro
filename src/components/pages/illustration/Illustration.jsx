import React, { useEffect, useState } from 'react'
import { BiSearchAlt } from 'react-icons/bi'
import { Link  , NavLink} from 'react-router-dom';
function Illustration() {
  const liStyle = "mt-20 hover:bg-white p-4 px-10 rounded-full text-white bg-black/50  hover:text-black"

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
            {/* <h1 className="font-dmserif  font-bold text-black">{items.name}</h1>g */}
          <div className="absolute "></div>
          <div className="absolute  bg-button/70 text-black inset-0 flex 2xl:translate-y-[50%] hidden group-hover:block group-hover:transition-opacity flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
            <p className="mb-3 text-lg   opacity-0 transition-opacity duration-300 group-hover:opacity-100">Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis dolore adipisci placeat.</p>
            <div className='space-y-6 m-16  font-bold'>
              <h1 className=''> {items.name}</h1>
              <p >  Tarif : {items.price} </p>
              <button className=' bg-button text-white font-mediume px-4 hover:text-button hover:border-2  hover:border-button rounded p-2 hover:bg-bg2'> Decouvrir</button>
            </div>
          </div>
        </div>
      </Link>
    )
  })

  return (
    <section className=' bg-bg2'>
          <div className='absolute'>
                <video autoPlay muted loop className='  w-screen   object-cover' style={{ height: "80vh" }}>
                    <source src="1.mp4" type="video/mp4" />
                </video>
            </div>
            <div className='relative  '>
                <div className=' text-center space-y-5 text-white text-xl 2xl:text-4xl 2xl:space-y-10'>
                    <h1 className='text-6xl pt-10 2xl:text-7xl font-bold  2xl:pt-28'>Trouver vos illustrations </h1>
                    <p>Beaucoup plus que des illustrations !</p>
                    <p>Nous proposons une vaste banque d’illustration avec des personnages<br /> (hommes, femmes et enfants portant des coiffures traditionnelles).</p>
                </div>
                <div className='flex justify-center mt-10 2xl:mt-20'>
                    <BiSearchAlt className='text-3xl relative top-4  2xl: left-16 text-gray-400' />
                    <input className='h-16 2xl:h-24 w-3/4 rounded-full p-4 px-20 placeholder:text-xl 2xl:placeholder:text-3xl shadow-lg outline-none text-xl' placeholder='Recherche...' />
                </div>
                <div>  <ul className='flex justify-around  2xl:text-3xl'>
                    <li className='mt-20'>
                        <NavLink className={liStyle}> <button>Photos </button></NavLink>
                    </li>
                    <li className='mt-20'>
                        <NavLink className={liStyle}> <button>Vecteurs  </button></NavLink>
                    </li>
                    <li className='mt-20' >
                        <NavLink className={liStyle}> <button> Illustrations</button></NavLink>
                    </li>
                </ul></div>
            </div>
      <div>
        <div className='flex justify-center items-center  mt-10 '>
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