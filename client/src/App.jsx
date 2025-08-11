import { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import './App.css'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import ProtectedRoutes from './components/ProtectedRoutes'
import ProtectLogin from './components/ProtectLogin'
import AuthenticationPage from './pages/Authentication/AuthenticationPage'
import CartPage from './pages/cart/CartPage'
import HomePage from './pages/home/HomePage'
import ProductDetailsPage from './pages/productDetails/ProductDetailsPage'
import ProductsPage from './pages/Products/ProductsPage'
import WishlistPage from './pages/wishlist/Wishlist'



function App() {

 
  const [searchTerm, setSearchTerm] = useState('');

  
  return (
    <>
      <BrowserRouter>
        <Navbar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
        <Routes>
          <Route path='/' element={<HomePage searchTerm={searchTerm} />} />
          <Route path='/product/:id' element={<ProductDetailsPage />} />
          <Route path='/cart' element={<ProtectedRoutes>  <CartPage /> </ProtectedRoutes>} />
          <Route path='/products/:cat' element={<ProductsPage searchTerm={searchTerm} />} />
          <Route path='/login' element={ <ProtectLogin>  <AuthenticationPage />  </ProtectLogin>  } />
          <Route path={'/wishlist'} element={<WishlistPage />} />
          <Route path={'/products'} element={   <ProductsPage searchTerm={searchTerm} />} />
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
