import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import './App.css'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import ProtectedRoutes from './components/ProtectedRoutes'
import ProtectLogin from './components/ProtectLogin'
import AuthenticationPage from './pages/Authentication/AuthenticationPage'
import CartPage from './pages/cart/CartPage'
import Checkout from './pages/checkout/Checkout'
import Dashboard from './pages/Dashboard/Dashboard'
import HomePage from './pages/home/HomePage'
import OrdersPage from './pages/orders/OrdersPage'
import ProductDetailsPage from './pages/productDetails/ProductDetailsPage'
import ProductsPage from './pages/Products/ProductsPage'
import WishlistPage from './pages/wishlist/Wishlist'
import { fetchCart } from './redux/slices/newCartSlice'
import { fetchOrders } from './redux/slices/orderSlice'
import { fetchProducts } from './redux/slices/productSlice'



function App() {
  const token = useSelector((state) => state.auth.token)
  const dispatch = useDispatch()

  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    dispatch(fetchProducts())
    dispatch(fetchCart(token))
    dispatch(fetchOrders(token))
  }, [])


  return (
    <>
      <BrowserRouter>
        <Navbar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
        <Routes>
          <Route path='/' element={<HomePage searchTerm={searchTerm} />} />
          <Route path='/product/:id' element={<ProductDetailsPage />} />
          <Route path='/cart' element={<ProtectedRoutes>  <CartPage /> </ProtectedRoutes>} />
          <Route path='/products/:cat' element={<ProductsPage searchTerm={searchTerm} />} />
          <Route path='/login' element={<ProtectLogin>  <AuthenticationPage />  </ProtectLogin>} />
          <Route path={'/wishlist'} element={<WishlistPage />} />
          <Route path={'/products'} element={<ProductsPage searchTerm={searchTerm} />} />
          <Route path={'/checkout'} element={<Checkout />} />
          {/* <Route path={'/dashboard'} element={<Dashboard />} /> */}
          <Route path={'/orders'} element={<OrdersPage />} />


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
