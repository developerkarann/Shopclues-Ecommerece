import { useState } from 'react'
import './App.css'
import { ToastContainer } from 'react-toastify'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import HomePage from './pages/home/HomePage'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ProductDetailsPage from './pages/productDetails/ProductDetailsPage'
import CartPage from './pages/cart/CartPage'

import AuthenticationPage from './pages/Authentication/AuthenticationPage'
import Dashboard from './pages/Dashboard/Dashboard'
import WishlistPage from './pages/wishlist/Wishlist'
import ProductsPage from './pages/Products/ProductsPage'



function App() {

  const [searchTerm, setSearchTerm] = useState('');

  return (
    <>
      <BrowserRouter>
        <Navbar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
        <Routes>
          <Route path='/' element={<HomePage searchTerm={searchTerm} />} />
          <Route path='/product/:id' element={<ProductDetailsPage />} />
          <Route path='/cart' element={<CartPage />} />
          <Route path='/products/:cat' element={<ProductsPage searchTerm={searchTerm} />} />
          <Route path='/login' element={<AuthenticationPage />} />
          <Route path={'/account'} element={<Dashboard />} />
          <Route path={'/wishlist'} element={<WishlistPage />} />
          <Route path={'/products'} element={<ProductsPage searchTerm={searchTerm} />} />
        </Routes>
        <Footer />

        <ToastContainer
          position="top-center"
          autoClose={2000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick={false}
          rtl={false}
          pauseOnFocusLoss
          draggable
          theme="light"
        />
      </BrowserRouter>
    </>
  )
}

export default App
