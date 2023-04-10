import React, { useState, useEffect } from 'react'
import { useNavigate } from "react-router-dom";
import { AiOutlineFile } from "react-icons/ai"
import { BsDownload, BsPencil } from "react-icons/bs"
import { IoPricetagsOutline } from "react-icons/io5"
import { BiArrowBack } from "react-icons/bi"
import {
  Link,
  // Link,
  useParams,
  // useLocation
} from 'react-router-dom'
function IllustrationDetail() {
  const [coiffureDetails, setCoiffureDetails] = useState([])
  const titleStyle = "text-md  flex font-semibold"
  const paragraphStyle = "text-sm  capitalize mx-2 mt-1 "
  const params = useParams()
  const [catCoiffure, setCatCoiffure] = useState(null);
  //  const location = useLocation()
  const navigate = useNavigate();

  //  console.log (location)
  useEffect(() => {
    fetch(`/api/coiffures/${params.id}`)
      .then(response => (response.json()))
      .then(data => setCoiffureDetails(data.coiffures));
  }, [params.id])



  useEffect(() => {
    if (!coiffureDetails) {
      return
    }
    fetch(`/api/coiffures/cathegorie/${coiffureDetails.Cathegorie}`)
      .then(response => response.json())
      .then(data => setCatCoiffure(data.coiffures))
  }, [coiffureDetails]);

  // console.log(catCoiffure)
  // console.log(coiffureDetails)
  // const search = location.state?.search || ""
  const card = catCoiffure?.map((items) => {
    return (
      <Link to={items.id}
      //  state={{ search: searchParams.toString(), type: typeFilter }}
      >
        <div key={items.id} className='group h-72 relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl  rounded-lg shadow-lg'>
          <div className='bg-white rounded-lg  flex justify-center'>
            <img src={items.imageUrl} alt='' className='h-80 w-full object-cover transition-transform duration-500 group-hover:scale-125' />
          </div>
          {/* <h1 className="font-dmserif  font-bold text-black">{items.name}</h1>g */}
          <div className="absolute  "></div>
          <div className="absolute text-white   bg-button/70 text-black inset-0 flex 2xl:translate-y-[50%] hidden group-hover:block group-hover:transition-opacity group flex-col items-center justify-center  text-center transition-all duration-500 group-hover:translate-y-0">
            <p className="mb-3 text-lg   opacity-0 transition-opacity duration-300 group-hover:opacity-100">Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis dolore adipisci placeat.</p>
            <div className='space-y-6 m-12  font-bold'>
              <h1 className=''> {items.name}</h1>
              <p className='w-full' >  Tarif : {items.price} </p>
              <button className=' bg-button text-white font-mediume px-4 hover:text-button hover:border-2  hover:border-button rounded p-2 hover:bg-bg2'> Decouvrir</button>
            </div>
          </div>
        </div>
      </Link>
    )
  })

  return (
    <div >
      <div className='flex'>
        <div>
          <button className='m-10' onClick={() => navigate(-1)}><BiArrowBack className='text-3xl' /></button>
        </div>
        <div className='flex justify-around   mt-5 mx-16 shadow-all rounded-lg'>
          <div className='flex justify-center w-2/4 '>
            <img src={coiffureDetails.imageUrl} alt='' className='h-[70vh]  rounded-lg m-10 bg-white' />
          </div>
          <div className='w-2/4 p-10 space-y-3'>
            <div>
              <h1 className='text-center text-xl font-semibold m-4'> {coiffureDetails.name}</h1>
              <p className='text-sm'>
                Les tresses au fil (ATIN) encore appelées Eko , Bridge, Akule , Sunga
                sont une technique de coiffage adoptée depuis des siècles par les femmes noires, elles représentent les cheveux enroulés d'un fil de couture ou de nylon.
                L'utilisation des fils pour tresser les cheveux est courante chez les Yoruba du sud Ouest du Nigeria au Benin.
                Utilisé pour l'assouplissement des cheveux, il sert aussi d'isolant pour l'eau et les protège contre la casse.
              </p>
            </div>
            <div className='flex'>
              <h1 className={titleStyle}> <BsPencil className='m-1' /> Auteur : </h1>
              <p className={paragraphStyle}> Debora DIMADO</p>
            </div>
            <div className='flex'>
              <h1 className={titleStyle}> <AiOutlineFile className='m-1' />Type du Ficher  : </h1>
              <p className={paragraphStyle}> {coiffureDetails.imageUrl?.split('.').pop()}</p>
            </div>
            <div className='flex'>
              <h1 className={titleStyle}> <IoPricetagsOutline className='m-1' />Tarif : </h1>
              <p className={paragraphStyle}> {coiffureDetails.price}</p>
            </div>
            <a
              href={coiffureDetails.imageUrl} download>
              <button className=' bg-button  flex w-full justify-center text-white text-lg font-semibold p-2 p-auto  mt-8  rounded hover:translate-y-1'>
                {/* <i className="fa fa-download" /> */}
                <BsDownload className='text-xl font-bold m-1 mx-2' />
                Télécharger
              </button>
            </a>
          </div>
        </div>
        <div className='w-32'> </div>
      </div>
      <div className='flex justify-center items-center     relative'>
        <h1 className='text-text1  text-center text-4xl font-medium mt-8 flex ml-0 ' >
        </h1>
      </div>
      <p className='text-center my-10'>Vous pourrez aussi aimer ces illustrations
      </p>
      <div className='grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4 m-10'>
        {card}
        {card}
      </div>
    </div>
  )
}

export default IllustrationDetail
