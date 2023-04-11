import React from 'react'
import { Link } from 'react-router-dom'

function Vision() {
    return (
        <section className='h-screen  flex justify-around p-32' >
            <div>
                <h1 className='text-text1 text-6xl font-medium flex ' >
                    Notre vision
                    <div className='rounded-full p-1 mt-11   h-2 bg-text1'>
                    </div>
                </h1>
             <div className='mt-12 text-2xl tracking-widest mx-4'>
             <Link> En savoir plus </Link>
             </div>
            </div>
            <div className='w-[50%] text-xl space-y-5 tracking-widest'>
                <p>
                Aujourd’hui, il est difficile pour les créatifs de proposer des visuels inspirés du contexte africain quand il s’agit d’une entreprise africaine.
                </p>
                <p>
                Nous proposons donc une banque d’illustration avec des personnages (hommes, femmes et enfants portant des coiffures traditionnelles).
                </p>
                <p>
                Cette solution permettrait de sauvegarder l’art de la coiffure traditionnelle tout servant aux créatifs dans leurs différentes réalisations.
                </p>
            </div>
        </section>
    )
}

export default Vision