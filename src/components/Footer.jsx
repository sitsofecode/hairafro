import React from 'react'
import { Link } from 'react-router-dom'
import SocialMedias from './SocialMedias'

function Footer() {
    const date = new Date().getFullYear();
    return (
        <section className='w-full bg-button '>
            <div className='lg:p-10 lg:flex justify-between'>
                <div className='space-y-8 w-2/4'>
                    <div>

                        <h1 className='text-white text-xl font-medium flex lg:ml-0 ' >
                            Contactez nous<div className='rounded-full p-1 mt-3 h-1 m-2 bg-white'></div>
                        </h1>
                    </div>
                    <div className='text-sm text-white'>
                        <Link to="information">INFORMATION</Link>
                    </div>
                    <div className='text-sm text-white'>
                        <Link to="message">Rendez vous</Link>
                    </div>
                </div>
                <div className='text-white space-y-8 mx-8 w-3/4 text-lg'>
                    <h1 className='text-lg'>Vous pouvez en savoir plus et aussi apporter votre pierre à l'édifice de ce projet</h1>
                    <div className='lg:flex  lg:space-x-20'>
                        <div className='space-y-5 text-lg pb-5'>
                            <h1 className='text-lg font-semibold underline'> Contact</h1>
                            <div className='space-y-3'>
                                <p>Telephone : +229 94392436</p>
                                <p>Email : info@hairafro.com</p>
                                <SocialMedias />
                            </div>
                        </div>
                        <div className='space-y-5 text-sm  pb-5  '>
                            <h1 className='text-lg font-semibold underline'>Address</h1>
                            <div className='space-y-3 '>
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