import React from 'react'
import { Link } from 'react-router-dom'
import SocialMedias from './SocialMedias'

function Footer() {
    const  date =  new Date().getFullYear();
    return (
        <section className='w-full bg-button '>
            <div className='p-24 flex justify-between'>
                <div className='space-y-8 w-2/4'>
                    <div>

                    <h1 className='text-white text-4xl font-medium flex ml-0 ' >
                        Contactez nous<div className='rounded-full p-1 mt-5  h-1 m-1 bg-white'></div>
                    </h1>
                    </div>
                    <div className='text-xl text-white'>
                        <Link to="information">INFORMATION</Link>
                    </div>
                    <div className='text-xl text-white'>
                        <Link to="message">MESSAGE</Link>
                    </div>
                </div>
                <div className='text-white space-y-8 mx-8 w-3/4 text-xl'>
                    <h1 className='text-2xl'>Vous pouvez en savoir plus et aussi apporter votre pierre à l'édifice de ce projet</h1>
                    <div className='flex  space-x-20'>
                        <div className='space-y-5'>
                            <h1 className='text-xl underline'> Contact</h1>
                            <div className='space-y-3'>
                                <p>Call : 01 234 567 89</p>
                                <p>Email : info@hairafro.com</p>
                                <SocialMedias/>
                            </div>
                        </div>
                        <div className='space-y-5'>
                            <h1  className='text-xl underline'>Address</h1>
                            <div className='space-y-3'>
                                <p>Online</p>
                                <p>Avenue Montaigne</p>
                                <p>Cotonou , BENIN</p>
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div>

<div className='text-stone-400 font-medium h-16 text-lg flex flex-col mx-10 text-center  shrink-0 justify-center border-t'>
&#169; {date} #Hairafro 
</div>
            </div>
        </section>
    )
}

export default Footer