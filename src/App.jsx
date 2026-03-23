
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'
import ProductList from './pages/ProductList'
import Cart from './pages/Cart'
import { useEffect, useState } from 'react'
import { getCartAPI } from './services/allAPIs'

function App() {

  const [cartSummary,setCartSummary] = useState([])

  useEffect(()=>{
    getCart()
  },[])

  const getCart = async()=>{
    const response = await getCartAPI()
    setCartSummary(response.data)
  }

  return (
    <>
      <Navbar cartSummary={cartSummary}/>
      <Routes>
        <Route path='/' element={<ProductList cartSummary={cartSummary} setCartSummary={setCartSummary}/>} />
        <Route path='/cart' element={<Cart cartSummary={cartSummary} setCartSummary={setCartSummary}/>} />
      </Routes>

    </>
  )
}

export default App
