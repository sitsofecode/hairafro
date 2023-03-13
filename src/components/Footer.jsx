import React from 'react'

function Footer() {
  return (
    <section className=''>
<div className='bg-bg3 p-24 flex justify-around'>
    <div>
    <h1 className='text-white text-4xl font-medium flex ml-0 ' >
            Call to action
            <div className='rounded-full p-1 mt-6   h-1 m-1 bg-white'>
            </div>
        </h1>
    </div>
    <div className='text-white space-y-8'>
        <h1 className='text-xl'>Don't miss any news via email ! Register email if you agree :</h1>
        
        <br/><label>Email Adress *</label><br/>
        <input className=' bg-bg3  border-b-2 border-b-white w-2/4'  placeholder='your@email.adress'/>
        <div className='flex justify-between'>
            <button className=' border-2 border-white p-2 px-6 rounded-lg hover:bg-white hover:text-black'> SUSCRIBE</button> 
        
        <p>*you agree to send email</p></div>
    </div>

</div>
    </section>
  )
}

export default Footer