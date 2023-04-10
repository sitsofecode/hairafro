import React from 'react';
// import { Link } from 'react-router-dom';

function Blog() {
    return (
        <section className='h-screen  px-32  p-5' >
            <div className=' flex justify-around border-b-2 border-b-gray-800 p-0' >
                <div>
                    <h1 className='text-text1 text-4xl font-medium flex ml-0 ' >
                        Notre Blog
                        <div className='rounded-full p-1 mt-8   h-1 m-1 bg-text1'>
                        </div>
                    </h1>
                    <div className='mt-12 text-2xl tracking-widest mx-4'>

                    </div>
                </div>
                <div className='w-[50%] text-lg space-y-5 tracking-widest'>
                    <p>
                        Des articles à but informatif accessible à tous. </p>

                </div>
            </div>
            <div className='flex justify-between mt-10 space-x-20  shadow-md   p-10 rounded-lg'>
                <div className=''>
                    <img src="/rihanna2.png" alt="" className='w-full ' />
                    <div className='flex mt-4 space-x-5'>
                        <img src=' /rihanna3.jpg' alt='' className='h-20' />
                        <img src=' /rihanna4.jpg' alt='' className='h-20' />
                        <img src=' /rihanna-fulani.png' alt='' className='h-20' />
                    </div>
                </div>
                <div className='space-y-5 '>
                    <h1 className='text-xl font-semibold'>
                        4 coiffures traditionnelles xafricaines qui ont inspirées des coiffures modernes
                    </h1>
                    <p className='text-sm'>Véritable symbole de statut social ou encore armes de séduction dans certains pays de l’Afrique de l’Ouest,
                        les coiffures africaines ont aujourd’hui évolué. Toutefois, malgré la modernité de ces différentes coiffures,
                        ont préservé les traces d’un savoir-faire ancestrales.
                        Voici quatre (4) coiffures modernes africaines inspirées de coiffures traditionnelles.</p>

                </div>
            </div>
        </section>
    )
}

export default Blog