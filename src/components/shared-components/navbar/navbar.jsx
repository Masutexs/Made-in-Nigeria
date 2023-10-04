import React from 'react'
import { Outlet, Link } from 'react-router-dom'

function Navbar() {
  return (
    <div>
      <nav className="w-[1514px] h-[53px] bg-black">
      <img className="w-[78px] h-[83px]" src="https://via.placeholder.com/78x83" />
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