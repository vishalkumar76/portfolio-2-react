import React from 'react'

import { Link, Outlet } from 'react-router-dom'

export default function NavLayout() {
  return (
    <div>
          <>
        <nav>
        <Link to="Card2">Product</Link>
        <Link to="About">About</Link>
        </nav>
        
   

    <Outlet/>
    </>

    </div>
    
  )
}
