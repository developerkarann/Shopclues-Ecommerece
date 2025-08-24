import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { toggleWishlist } from '../redux/slices/wishlistSlice'

const WishlistCard = ({product}) => {
    const dispatch = useDispatch()

    return (
        <>
            <div key={product.id} className="mb-6 pb-4 border-b border-gray-200  ">

                {product && (
                    <div className="flex  justify-between gap-4  ">
                        <div className="flex gap-5">
                            <img src={product.image} alt="Product" className="w-30 h-30 " />
                            <div>
                                <p className="text-sm font-medium">
                                    {product.title.slice(0, 70)}
                                </p>
                                <p className="mt-2 font-bold text-sm">
                                    ₹{product.price}
                                </p>
                            </div>

                        </div>

                        <div className="flex flex-col gap-2 text-sm">
                            <button className="bg-cyan-600 hover:bg-cyan-700 duration-300 hover:cursor-pointer rounded text-white font-semibold px-2 py-2 shadow-md hover:opacity-90 transition">
                                <Link to={`/product/${product.id}`}>
                                    Buy Now
                                </Link>
                            </button>
                            <button
                                onClick={() => dispatch(toggleWishlist(product))}
                                className=" text-cyan-600 border border-cyan-600  hover:cursor-pointer rounded font-semibold px-6 py-2 shadow-md hover:opacity-90 transition">
                                Remove
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </>
    )
}

export default WishlistCard