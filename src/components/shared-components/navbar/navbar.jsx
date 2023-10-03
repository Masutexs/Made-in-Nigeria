import React from 'react'
import { Outlet, Link } from 'react-router-dom'

function Navbar() {
  return (
    <div>
      <nav className='text-black py-8 shadow mb-4 flex gap-4 justify-center'>
      <Link to={'/'}>Home</Link>
      <Link to={'/about'}>About</Link>
      <Link to={'/contact'}>Contact</Link>
      <Link to={'/computer'}>Computer and accessories</Link>
    
      </nav>

      <Outlet />
    </div>
  )
}

export default Navbar