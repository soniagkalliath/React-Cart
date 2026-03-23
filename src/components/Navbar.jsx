import React from 'react'
import { Link } from 'react-router-dom'

function Navbar({cartSummary}) {
  return (
     <div className='d-flex justify-content-between align-items-center p-2 bg-warning position-fixed w-100 z-1 top-0'>
          <Link to={'/'} className='fs-3 text-decoration-none'>E Cart</Link>
          <Link to={'/cart'} className="btn"><i className="fa-solid fa-cart-arrow-down"></i> Cart <span className="badge text-bg-secondary">{cartSummary?.length}</span>  </Link>
      </div>
  )
}

export default Navbar