import { useState, useEffect } from 'react'
import Login from './Login';
import Register from './Register';
import Navbar from './Navbar';
import Product from './Product';
import CartDetail from './CartDetail';
import Checkout from './Checkout';
import Orders from './Orders';
import { Routes, Route } from 'react-router-dom';

function App() {


  return (
    <>
      <div className="bg-gray-100 dark:bg-gray-900 min-h-screen">
        <Navbar />
        <Routes>
          <Route path='/' element={<Product />}></Route>
          <Route path='/cart' element={<CartDetail />}></Route>
          <Route path='/orders' element={<Orders />}></Route>
        </Routes>
        {/* <Checkout/> */}
        {/* <Login /> */}
      </div>
    </>
  )
}

export default App
