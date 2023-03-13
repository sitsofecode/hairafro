import React from 'react'
import { Link } from 'react-router-dom'
import { AiOutlineMenu } from "react-icons/ai";
import SocialMedias from '../SocialMedias'

function Home() {
    return (
        <section className='h-screen bg-bg1 w-screen'>
            <div className=' h-screen flex justify-around p-10'>
                <div>
                    <div className='flex'>
                        <img src='LogoDebora.png' alt='' className='h-16  mr-0' />
                        <h1 className='mt-4 mr-0 text-xl' style={{ fontSize: "25px" }}>hairafro.</h1>
                    </div>
                </div>
                <div className='relative left-[-5%] top-32  m-0 '>
                    <div id='percent' >
                        100%
                    </div>
                    <h1 className='text-text1 text-6xl font-bold flex' style={{ fontSize: "50px", color: "#412723" }}>
                        AFRO
                        <div className='rounded-full p-1 mt-8   h-2 bg-text1'></div>
                    </h1>
                    <p className='mt-4 text-xl w-[327px]'>Beaucoup plus que des illustrations !</p>
                    <div className='mt-4 tracking-widest text-xl ' >
                        <Link> Decouvrir</Link>
                        <div className=''><SocialMedias /></div>
                    </div>
                </div>
                <img src='LogoDebora.png' alt='' className='h-full m-0 ' />
                <div className='mt-4 mr-0 text-xl tracking-widest flex mr-5 '>Menu  <AiOutlineMenu className='m-1' /> </div>
                <div className='relative top-[-10]'>
                </div>
            </div>
        </section>
    )
}

export default Home