import { toggleWishlist } from '../redux/slices/wishlistSlice'
import { Heart } from 'lucide-react'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

const ProductCard = ({ product }) => {

    const dispatch = useDispatch()


    const wishlist = useSelector((state) => state.wishlist)
    const isWishlisted = wishlist.some((p) => p.id === product.id)

    const handleTogle = () => {
        dispatch(toggleWishlist(product))
        if (isWishlisted) {
            toast.success('Removed from the wishlist!')
        } else {
            toast.success('Added to wishlist!')
        }
    }

    return (
        <div key={product.id} className="bg-white p-4 rounded shadow-sm  transition-all duration-200 transform hover:scale-103">
            <div className="relative">
                <img
                    src={product.image}
                    // src='https://images.unsplash.com/photo-1556656793-08538906a9f8?w=300&h=300&fit=crop'
                    alt={product.title}
                    className=" h-50 w-full object-contain"
                />
                <Heart
                    onClick={handleTogle}
                    className={`absolute top-2 right-2 w-5 hover:cursor-pointer h-5 ${isWishlisted ? 'bg-red-500 text-white' : 'text-gray-600'}`} />
            </div>
            <Link to={`/product/${product.id}`}>
                <p className="mt-2 text-sm font-medium text-gray-800">
                    {product.title.slice(0, 50)}...
                </p>
                <div className="text-sm mt-1 flex gap-3">
                    <span className="font-semibold text-black">₹{product.price}</span>{" "}
                    {/* <span className="line-through text-gray-500 text-xs">
                        ₹{product.originalPrice}
                    </span> */}
                    <span className="text-green-600">{product.discount}% off</span>
                </div>
            </Link>
        </div>

    )
}

export default ProductCard