import React, { useEffect, useState } from 'react'
import ProductCard from '../components/ProductCard'
import axios from 'axios'

function ProductList({cartSummary,setCartSummary}) {
    const [allProducts,setAllProducts] = useState([])

    // console.log(allProducts);

    useEffect(()=>{
        fetchProducts()
    },[])
    
    const fetchProducts = async ()=>{
        const response = await axios.get('https://fakestoreapi.com/products')
        setAllProducts(response.data)
    }
  return (
    <div className='container my-5'>
        <div className="row pt-5">
            {
                allProducts?.map(product=>(
                    <div key={product?.id} className="col-lg-3 mb-2">
                        <ProductCard product={product} cartSummary={cartSummary} setCartSummary={setCartSummary}/>
                    </div>
                ))
            }
        </div>
    </div>
  )
}

export default ProductList