import React from 'react'
import NavBar from './NavBar'
import {BiSearchAlt} from 'react-icons/bi'

function Header() {
  return (
    <div>
            <div className='flex justify-between'>
                <div className='flex'>
                    <div className='flex m-2'>
                        <img src='LogoDebora.png' alt='' className='h-16 m-0 ' />
                        <h1 className='mt-4 mr-0 text-xl' >hairafro.</h1>
                    </div>
                    <NavBar/>
                </div>
                <div className='m-4 flex'>
                    <button className='text-gray-500'><BiSearchAlt className='text-3xl'/></button>
                    <button className='mx-6 bg-bg1 p-2 px-4 rounded-lg font-semibold'>
                        Log in 
                    </button>
                    <button className='bg-button text-white p-2 px-4 rounded-lg font-semibold'>
                        Sign up 
                    </button>
                </div>
            </div>
    </div>
  )
}

export default Header