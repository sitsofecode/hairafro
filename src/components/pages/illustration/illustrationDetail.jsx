import React, { useState, useEffect } from 'react'
import {
  BsDownload
} from "react-icons/bs"
import {
  Link,
  // Link,
  useParams,
  // useLocation
} from 'react-router-dom'
function IllustrationDetail() {
  const [coiffureDetails, setCoiffureDetails] = useState([])
  const titleStyle = "text-lg font-semibold"
   const paragraphStyle = "text-lg  capitalize mx-1"
  const params = useParams()
  //  const location = useLocation()
  //  console.log (location)
  useEffect(() => {
    fetch(`/api/coiffures/${params.id}`)
      .then(response => (response.json()))
      .then(data => setCoiffureDetails(data.coiffures));
  }, [params.id])

  console.log(coiffureDetails.imageUrl)

  // const search = location.state?.search || ""

  return (
    <div>
      <div className='flex justify-around w-full'>
        <div className='flex justify-center w-2/4 '>
        <Link to =".." >Back</Link>
          <img src={coiffureDetails.imageUrl} alt='' className='h-screen rounded-lg m-10 bg-white' />
        </div>
        <div className='w-2/4 p-10 space-y-3'>
          <div>
            <h1 className='text-center text-4xl font-semibold m-4'> {coiffureDetails.name}</h1>
            L’oiseau trompette
            Cette coiffure est d’origine guinéenne.
            En Guinée, dans les milieux peuls, l'oiseau trompette symbolise la femme en référence à sa huppe.
            Ce nom lui vient de l’histoire d’une jeune femme peulh aussi belle que riche qui se tressait les cheveux en plein milieu d’une cérémonie.
            Les touffes de cotés étaient déjà tressées lorsqu’elle fut interompue par sa coépouse qui lui annoça une mauvaise nouvelle à propos de leur mari qui serait victime d’une tragédie.
            Brisée, elle poussa un cri de désarroi et se transforma en un bel oiseau trompette
            P.48 Etudes dahoméennes
          </div>
          <div className='flex'>
            <h1 className={titleStyle}>Auteur : </h1>
            <p className={paragraphStyle}> Debora DIMADO</p>
          </div>
          <div className='flex'>
            <h1 className={titleStyle}>Type du Ficher  : </h1>
            <p className={paragraphStyle}> {coiffureDetails.imageUrl?.split('.').pop()}</p>
          </div>
          <div className='flex'>
            <h1 className={titleStyle}>Tarif : </h1>
            <p className={paragraphStyle}> {coiffureDetails.price}</p>
          </div>
          <a
            href={coiffureDetails.imageUrl} download>
            <button className=' bg-button  flex w-full text-white text-lg font-semibold p-2 px-56 mt-8  rounded hover:translate-y-1'>
              {/* <i className="fa fa-download" /> */}
              <BsDownload className='text-xl font-bold m-1 mx-2' />
              Télécharger
            </button>
          </a>
        </div>
      </div>
    </div>
  )
}

export default IllustrationDetail
