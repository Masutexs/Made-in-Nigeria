import React from 'react'
import { Outlet, Link } from 'react-router-dom'

function Navbar() {
  return (
    <div>
      <nav className='text-black py-8 shadow mb-4'>
      <Link to={'/'}>Home</Link>
      <Link to={'/about'}>About</Link>
      <Link to={'/contact'}>Contact</Link>
    
      </nav>

      <Outlet />
    </div>
  )
}

export default Navbar