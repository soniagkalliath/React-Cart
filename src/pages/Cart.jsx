import React, { useEffect, useState } from 'react'
import CartItem from '../components/CartItem'
import { Link } from 'react-router-dom'

function Cart({cartSummary,setCartSummary}) {

    const [cartTotal,setCartTotal] = useState(0)

    useEffect(()=>{
        setCartTotal(cartSummary?.reduce((acc,curr)=>acc+curr.totalPrice,0))
    },[cartSummary])

  return (
    <div className='container my-5 p-5'>
        <div className="d-flex justify-content-between">
            <h1>Shopping Cart</h1>
            <h5 className='fw-bolder'>{cartSummary?.length} Items</h5>
        </div>
        <table className="my-5 table table-hover table-striped">
            <thead>
                <tr>
                    <th>Image</th>
                    <th>Title</th>
                    <th>Quantity</th>
                    <th>Price</th>
                    <th>...</th>
                </tr>
            </thead>
            <tbody>
                <CartItem cartSummary={cartSummary} setCartSummary={setCartSummary}/>
            </tbody>
        </table>
        <div className="d-flex justify-content-between">
            <Link to={'/'}><i className="fa-solid fa-arrow-left"></i> Back to Shop</Link>
            <h5 className='fw-bolder'>TOTAL PRICE : $ {cartTotal}</h5>
        </div>
    </div>
  )
}

export default Cart