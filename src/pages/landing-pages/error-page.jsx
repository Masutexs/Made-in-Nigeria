import React from 'react'
import { Link } from 'react-router-dom'
import Layout from '../../components/shared-components/layout/layout'

function ErrorPage() {
  return (
    <div>
      
        Oops, wrong page, go to  
        <Link to={'/'}> <button>Home</button></Link>
    </div>
  )
}

export default ErrorPage