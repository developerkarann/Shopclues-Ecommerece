import { useState } from 'react'
import './App.css'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import HomePage from './pages/home/HomePage'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ProductDetailsPage from './pages/productDetails/ProductDetailsPage'
import CartPage from './pages/cart/CartPage'
import CategoryPage from './pages/category/CategoryPage'
import CheckoutPage from './pages/checkout/CheckoutPage'
import PaymentPage from './pages/checkout/PaymentPage'
import AuthenticationPage from './pages/Authentication/AuthenticationPage'
import Dashboard from './pages/Dashboard/Dashboard'


function App() {


  return (
    <>
      <BrowserRouter>

        <Navbar />
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/product/:id' element={<ProductDetailsPage />} />
          <Route path='/cart' element={<CartPage />} />
          <Route path='/category/:cat' element={<CategoryPage />} />
          <Route path='/checkout' element={<CheckoutPage/>} />
          <Route path='/payment' element={<PaymentPage/>} />
          <Route path='/login' element={<AuthenticationPage/>} />
          <Route path={'/account'} element={<Dashboard/>} />
        </Routes>
        <Footer />

      </BrowserRouter>
    </>
  )
}

export default App
