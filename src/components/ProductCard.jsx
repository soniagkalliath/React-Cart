import React from 'react'
import { addToCartAPI, updateCartAPI } from '../services/allAPIs'

function ProductCard({product,cartSummary,setCartSummary}) {
    // console.log(product);
    
    const addToCart = async ()=>{
        const existingProduct = cartSummary?.find(item=>item?.productId==product?.id)
        if(existingProduct){
            const quantity = existingProduct.quantity+=1
            const totalPrice = quantity * product?.price

            const response = await updateCartAPI(existingProduct?.id,{...existingProduct,quantity,totalPrice})
            if(response.status==200){
                alert("Product Quantity Incremented Successfully")
            }
        }else{
            const response = await addToCartAPI({productId:product?.id,title:product?.title,image:product?.image,quantity:1,totalPrice:product?.price})
            if(response.status==201){
                setCartSummary([...cartSummary,response.data])
                alert("Product added Successfully")
            }
        }
    }

  return (
    <div className="card p-3" >
        <img height={'200px'} src={product?.image} className="card-img-top" alt="..."/>
        <div className="card-body">
            <h5 className="card-title">{product?.title}</h5>
            <p className="card-text">$ {product?.price}</p>
            <div className='text-center'><button onClick={addToCart} className='btn btn-secondary'>Add To Cart <i className="fa-solid fa-cart-plus"></i></button></div>
        </div>
    </div>
  )
}

export default ProductCard