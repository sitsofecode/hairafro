import React, { useState, useEffect } from 'react'
import { 
  // Link,
   useParams, 
  // useLocation
 } from 'react-router-dom'
function IllustrationDetail() {
  const [coiffureDetails, setCoiffureDetails] = useState(null)
  const params = useParams()
  // const location = useLocation()
// console.log (location)
  useEffect(() => {
    fetch(`/api/coiffures/${params.id}`)
      .then(response => (response.json()))
      .then(data => setCoiffureDetails(data.coiffures));
  }, [params.id])

  console.log(coiffureDetails)

  // const search = location.state?.search || ""

  return (
    <div>
      {coiffureDetails ? <div className='m-4'>
        {/* <Link to={`..?${search}`}
         relative="path" className='hover:underline '> &larr; Back to { location.state.search ? location.state.type:"all "} vans </Link> */}
        <div className='my-4'>
          <img src={coiffureDetails.imageUrl} alt='' className='min-w-xs min-h-min rounded-lg'/>
        </div>
        <h1 className="text-3xl font-bold ">{coiffureDetails.name}</h1>
        <p className=' my-4 text-xl font-bold'>{coiffureDetails.price}</p>
        <p>{coiffureDetails.description}</p>
        <button className='bg-button text-white text-lg font-semibold p-2 px-auto w-full mt-8  rounded hover:translate-y-1'>Télecharger</button>
      </div> : <h2 className='text-center'> Loarding ... </h2>}
    </div>
  )
}

export default IllustrationDetail
