import React from 'react'
import { deleteCartItemAPI, updateCartAPI } from '../services/allAPIs';

function CartItem({cartSummary,setCartSummary}) {

  // console.log(cartSummary);

  const incrementCart = async (product)=>{
    const quantity = product?.quantity + 1
    const totalPrice = quantity * product?.totalPrice
    const remaingCartProducts = cartSummary?.filter(item=>item?.id!=product?.id)
    const response = await updateCartAPI(product?.id,{...product,quantity,totalPrice})
    if(response.status==200){
      setCartSummary([...remaingCartProducts,{...product,quantity,totalPrice}])
    }
  }

  const removeCartItem = async (id)=>{
    const response = await deleteCartItemAPI(id)
    if(response.status==200){
      setCartSummary(cartSummary?.filter(item=>item.id!=id))
    }
  }
  
  const decrementCart = async (product)=>{
    if(product?.quantity>1){
        const quantity = product?.quantity - 1
        const totalPrice = quantity * product?.totalPrice
        const remaingCartProducts = cartSummary?.filter(item=>item?.id!=product?.id)
        const response = await updateCartAPI(product?.id,{...product,quantity,totalPrice})
        if(response.status==200){
          setCartSummary([...remaingCartProducts,{...product,quantity,totalPrice}])
        }
    }
    else{
      removeCartItem(product.id)
    }
  }

  return (
    <>
      {
        cartSummary?.map(product=>(
            <tr key={product?.id}>
              <td><img width={'70px'} height={'70px'} src={product?.image} alt="image" /></td>
              <td>{product?.title}</td>
              <td>
                <div className="d-flex">
                  <button onClick={()=>decrementCart(product)} className="btn fw-bolder fs-1">-</button>
                  <input type="text" style={{width:'70px'}} value={product?.quantity} readOnly className='form-control '/>
                  <button onClick={()=>incrementCart(product)} className="btn fw-bolder fs-1">+</button>
                </div>
              </td>
              <td>$ {product?.totalPrice}</td>
              <td> <button onClick={()=>removeCartItem(product.id)} className="btn fw-bolder text-danger">X</button> </td>
            </tr>
          ))
      }
    </>
  )
}

export default CartItem