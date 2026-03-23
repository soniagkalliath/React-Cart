import apiService from "../api/apiService";

// add to cart : called By ProductCard when add to cart btn clicked
export const addToCartAPI = async (reqBody)=>{
    return await apiService("POST",`/cart`,reqBody)
}
// get cart : called by APP when page loads
export const getCartAPI = async ()=>{
    return await apiService("GET",`/cart`,{})
}

// update cart : called By ProductCard when add to cart btn clicked
export const updateCartAPI = async (id,reqBody)=>{
    return await apiService("PUT",`/cart/${id}`,reqBody)
}

// remove cart Item : called by APP when page loads
export const deleteCartItemAPI = async (id)=>{
    return await apiService("DELETE",`/cart/${id}`,{})
}