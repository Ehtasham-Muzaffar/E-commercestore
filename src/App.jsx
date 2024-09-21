import React from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import Nav from './Componet/Nav'
import Herosection from './Componet/Herosection'
import Blogs from './Componet/Blogs'

import { useContext } from 'react'
import { StoreContext } from './Store/Storecontext'
import { Route,Routes } from 'react-router-dom'
import Cart from './Cart'
import Home from './Home'



const App = () => {
  const data = useContext(StoreContext)

  return (
    <div>
      <Nav/>      
    
      <Routes>
        <Route path='/' index element={<Home/>}/>    
        <Route path='/cart' element={<Cart/>}/>
      </Routes>
      
      
    </div>
  )
}

export default App
