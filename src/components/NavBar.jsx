import React from 'react'
import { NavLink } from 'react-router-dom'

function NavBar() {
    const activeStyle = {
        fontWeight: "bold",
        textDecoration: "underline",
        color: "#3B1500"
    }
    return (
        <nav className='flex  space-x-5 m-7 '>
            <NavLink to="illustration" className='hover:underline hover:font-semibold hover:text-button'
                style={({ isActive }) => isActive ? activeStyle : null}
            > Illustration</NavLink>
            <NavLink to="blog" className='hover:underline hover:font-semibold hover:font-semibold hover:text-button'
                style={({ isActive }) => isActive ? activeStyle : null}
            > Blog  </NavLink>
            <NavLink to="apropos" className='hover:underline hover:font-semibold hover:font-semibold hover:text-button'
                style={({ isActive }) => isActive ? activeStyle : null}
            >À propos</NavLink>
        </nav>
    )
}

export default NavBar