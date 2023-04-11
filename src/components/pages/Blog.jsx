import React from 'react';
import { Link } from 'react-router-dom';

function Blog() {
    return (
        <section className=' lg:px-32  p-5' >
            <div className=' lg:flex justify-around border-b-2 border-b-gray-800 p-0' >
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
            <Link to="/article">
                <div className=' lg:flex justify-between mt-10 space-x-20  shadow-md   lg:p-10 rounded-lg'>
                    <div className=''>
                        <img src="/rihanna2.png" alt="" className='w-full ' />
                        <div className='lg:flex mt-4 space-x-5'>
                            <img src=' /rihanna3.jpg' alt='' className='h-20 2xl:h-28' />
                            <img src=' /rihanna4.jpg' alt='' className='h-20 2xl:h-28 hidden lg:block' />
                            <img src=' /rihanna-fulani.png' alt='' className='h-20 2xl:h-28 hidden lg:block' />
                        </div>
                    </div>
                    <div className='space-y-5 '>
                        <h1 className='text-xl font-semibold '>
                            4 coiffures traditionnelles africaines qui ont inspirées des <br />coiffures modernes
                        </h1>
                        <p className='text-sm'>Véritable symbole de statut social ou encore armes de séduction dans certains pays de l’Afrique de l’Ouest,
                            les coiffures africaines ont aujourd’hui évolué. Toutefois, malgré la modernité de ces différentes coiffures,
                            elles  ont préservé les traces d’un savoir-faire ancestrales.
                            Voici quatre (4) coiffures modernes africaines inspirées de coiffures traditionnelles.</p>
                        <h1 className='text-lg'>Les Bantu Knots </h1>
                        <p className='text-sm'>Communément appelées « Akotoé » en langue fons du Bénin, les bantu Knots consistent à tortiller des mèches et à les enrouler en nœuds. Cette coiffure trouve ses racines en Afrique subsaharienne, au sein du peuple bantou. D’où le nom « bantu » et « knot » pour nœud en anglais. <br />Les femmes de cette ethnie arboraient cette coiffure au quotidien ou lors des cérémonies traditionnelles.<br />
                            Cette une coiffure protectrice, qui protège les pointes de vos cheveux et permet d’obtenir des boucles bien définies une fois retirées. .</p>
                    </div>
                </div>
            </Link>
        </section>
    )
}

export default Blog