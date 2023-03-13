import React from 'react';
import { Link } from 'react-router-dom';

function Blog() {
  return (
    <section className='h-screen bg-bg1  p-32' >
    <div  className=' flex justify-around border-b-2 border-b-gray-800 p-0' >
    <div>
        <h1 className='text-text1 text-4xl font-medium flex ml-0 ' >
            Notre Blog 
            <div className='rounded-full p-1 mt-8   h-1 m-1 bg-text1'>
            </div>
        </h1>
     <div className='mt-12 text-2xl tracking-widest mx-4'>

     </div>
    </div>
    <div className='w-[50%] text-xl space-y-5 tracking-widest'>
        <p>
        Des articles à but informatif accessible à tous. </p>
        
    </div>
    </div>
    <div className='flex justify-between mt-10 space-x-20'>
        <div>
            <h1 className='text-3xl text-text1'>Concept</h1>
            <p className='text-xl mt-4'>An awesome service that we offer to you. This is just a placeholder text.</p>
            <div className='mt-4 text-xl '> <Link> Lire</Link></div>
        </div>
        <div>
        <h1 className='text-3xl text-text1'>Design</h1>
            <p className='text-xl mt-4'>An awesome service that we offer to you. This is just a placeholder text.</p>
            <div  className='mt-4 text-xl '><Link> Lire</Link></div>
        </div>
        <div>
        <h1 className='text-3xl text-text1'>Analytics</h1>
            <p className='text-xl mt-4'>An awesome service that we offer to you. This is just a placeholder text.</p>
            <div  className='mt-4 text-xl '><Link> Lire</Link></div>
        </div>
    </div>
</section>
  )
}

export default Blog