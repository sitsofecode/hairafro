import React, { useEffect, useState } from 'react'
import { BiSearchAlt } from 'react-icons/bi'
import {
  Link,
  useSearchParams
} from 'react-router-dom';
//  NavLink, useLoaderData,
import { getCoiffure } from '../../api';


export function loader() {
  return getCoiffure()
}
function Illustration() {
  const [searchParams, setSearchParams] = useSearchParams();
  const liStyle = " hover:bg-white p-3 px-10 rounded-full text-white bg-button/80 font-medium  hover:text-black"
  // const location = useLocation();
  const typeFilter = searchParams.get('type');
  const [coiffure, setCoiffure] = useState([])
  // const coiffure = useLoaderData()

  console.log(typeFilter);
  useEffect(() => {
    fetch('api/coiffures')
      .then(response => response.json())
      .then(data => setCoiffure(data.coiffures))
  }, []);

  // console.log(coiffure)
  const coiffureDisplayed = typeFilter ? coiffure.filter(items => items.type?.toLowerCase() === typeFilter) : coiffure
  const card = coiffureDisplayed?.map((items, index) => {
    return (
      <Link to={items.id} key={index}
        state={{ search: searchParams.toString(), type: typeFilter }}
      >
        <div key={items.id} className="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30 rounded-lg shadow-lg">
          <div className="">
            <img className="h-full w-full object-cover transition-transform duration-500  group-hover:scale-125" src={items.imageUrl} alt="" />
          </div>
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-button/40 group-hover:from-button/70 group-hover:via-button/60 group-hover:to-button/70"></div>
          <div className="absolute inset-0 flex 2xl:translate-y-[50%] translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
            <h1 className="font-dmserif text-xl font-bold text-white">{items.name}</h1>
            <p className="mb-3 text-lg  text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis dolore adipisci placeat.</p>
            <Link to={`illustration/${items.id}`}
            //    state={{ search: searchParams.toString(), type: typeFilter }}    
            >
              <button className="rounded-full bg-neutral-900 py-2 px-3.5 font-com text-sm capitalize text-white shadow shadow-black/60">Voir plus</button>
            </Link>
          </div>
        </div>
      </Link>
    )
  })

  return (
    <section className=' bg-bg2'>
      <div className='absolute'>
        {/* <video autoPlay muted loop className='  w-screen   object-cover' style={{ height: "80vh" }}>
                    <source src="1.mp4" type="video/mp4" />
                </video> */}
        <img src='/BACKSITE.png' alt='' className='w-screen opacity-80 object-cover' style={{ height: "80vh" }} />
      </div>
      <div className='relative  bg-black/50  2xl:p-12 p-12  ' style={{ height: "80vh" }}>
        <div className=' text-center space-y-5 text-white text-md 2xl:text-xl 2xl:space-y-10'>
          <h1 className='text-4xl pt-10 2xl:text-5xl font-bold  2xl:pt-28'>Trouver vos illustrations </h1>
          <p >Beaucoup plus que des illustrations !</p>
          <p>Nous proposons une vaste banque d’illustrations avec des personnages<br /> (hommes, femmes et enfants portant des coiffures traditionnelles).</p>
        </div>
        <div className='flex justify-center mt-10 '>
          <BiSearchAlt className='text-2xl relative top-3  left-20 2xl:left-20 2xl:text-3xl 2xl:top-3 2xl:m-1  text-gray-400' />
          <input className='h-full 2xl:h-16 w-3/4 rounded-full p-3 px-20 placeholder:text-xl 2xl:placeholder:text-3xl shadow-lg outline-none text-xl' placeholder='Recherche...' />
        </div>
        <div>  <ul className='flex justify-around  2xl:text-2xl'>
          <li className='mt-20'>
            <button className={` ${typeFilter === 'photo' ? "bg-white text-button font-bold p-3 px-10 rounded-full " : liStyle}`} onClick={() => setSearchParams({ type: "photo" })}>Illustrations </button>
          </li>
          <li className='mt-20'>
            <button className={` ${typeFilter === 'vecteur' ? "bg-white text-button font-bold p-3 px-10 rounded-full " : liStyle}`} onClick={() => setSearchParams({ type: "vecteur" })} >Vecteurs  </button>
          </li>
          {/* <li className='mt-20' >
            <button className={` ${typeFilter === 'illustration' ? "bg-white text-button font-bold p-3 px-10 rounded-full " : liStyle}`} onClick={() => setSearchParams({ type: "illustration" })}> Illustrations</button>
          </li> */}
        </ul></div>
      </div>
      <div>
        <div className='flex justify-center items-center  mt-20   relative'>
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