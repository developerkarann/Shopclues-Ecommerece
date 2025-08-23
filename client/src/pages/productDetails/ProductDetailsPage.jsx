import axios from "axios";
import { BadgeCheck, ShieldCheck, Star, Truck } from "lucide-react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import Loader from "../../components/Loader";
import { fetchCart } from "../../redux/slices/newCartSlice";

const ProductDetailsPage = () => {

    const token = useSelector((state) => state.auth.token)


    const dispatch = useDispatch()
    const navigate = useNavigate()

    const [product, setProduct] = useState('')
    const { id } = useParams()


    const handleSearch = async () => {
        try {
            const resposne = await axios.get(`${import.meta.env.VITE_SERVER}/product/${id}`)
            const product = await resposne.data.product
            setProduct(product)
        } catch (error) {
            console.log(error.message)
        }
    }
    const handleAdd = async () => {
        if (!token) {
            return navigate('/login')
        }
        try {
            const res = await axios.post(`${import.meta.env.VITE_SERVER}/cart`, { productId: product.id, title: product.title, image: product.image, price: product.price, discount: product.discount }, {
                headers: {
                    Authorization: token,
                }
            })
            toast.success(res.data.message)
            // navigate('/cart')
        } catch (error) {
            toast.error(error.response?.data?.message)
        }

    }
    const handleBuyBtn = () => {
        if (!token) {
            return navigate('/login')
        }
        navigate('/checkout')
    }

    useEffect(() => {
        handleSearch()
        dispatch(fetchCart(token))
    }, [dispatch, fetchCart, token, handleAdd])

    return (
        <>
            <div className="bg-[#f1f7fc]  py-45 p-6">
                {product?.id?.length > 0 ?
                    <div className="max-w-6xl mx-auto bg-white p-6 rounded-md shadow">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="flex justify-center">
                                <img
                                    // src="https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=300&h=300&fit=crop"
                                    src={product.image}
                                    alt={product.name}
                                    className="w-full h-full object-contain"
                                />
                            </div>

                            <div>
                                <h2 className="text-lg font-medium">
                                    {product.title}
                                </h2>
                                <p className="text-sm text-gray-500 mt-1">
                                    {product.category}
                                </p>
                                <p className="text-xs text-gray-400 mt-1">Product ID : {product.id}</p>

                                <div className="flex items-center gap-2 mt-2 text-sm">
                                    <span className="text-orange-500 font-medium">3.7</span>
                                    <Star className="w-4 h-4 fill-orange-400 stroke-orange-400" />
                                    <span>(132)</span>
                                    <span className="text-cyan-600">43 Reviews</span>
                                </div>

                                <div className="mt-3 text-2xl font-bold">₹ {product.price}</div>
                                <div className="text-sm text-gray-500">
                                    MRP:<span className="line-through ml-1">₹ {product.price + (product.price * product.discount / 100)}</span>
                                    <span className="text-green-600 ml-2 font-semibold"> {product.discount} % off</span>
                                </div>
                                <p className="text-xs text-gray-400 mt-1">Inclusive of all taxes</p>


                                <div className="border mt-4 rounded">
                                    <div className="p-2 border-b bg-gray-50 text-sm text-gray-700">
                                        Get this for as low as: <span className="text-green-600 font-bold">₹ {product.price}</span>
                                    </div>
                                    <div className="p-2 text-xs text-gray-500">Applicable for All Users</div>
                                    <div className="flex justify-between px-4 py-2 text-sm">
                                        <div>
                                            <p>Original Price</p>
                                            <p className="font-medium">₹  {product.price + (product.price * product.discount / 100)}</p>
                                        </div>
                                        <div>
                                            <p>Apply Discount</p>
                                            <p className="font-medium">-₹ {product.price * product.discount / 100}</p>
                                        </div>
                                        <div>
                                            <p>Deal Price</p>
                                            <p className="text-green-600 font-bold">₹ {product.price}</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="text-sm text-gray-600 mt-2">
                                    <p>
                                        <span className="font-medium">Warranty Available:</span> No Warranty
                                    </p>
                                    <p>
                                        <span className="font-medium">Duration:</span> na
                                    </p>
                                </div>


                                <div className="flex gap-4 mt-4">
                                    <button onClick={handleAdd} className="bg-cyan-600 text-white px-6 py-2 rounded hover:bg-cyan-700 hover:cursor-pointer transition duration-200 ">
                                        ADD TO CART
                                    </button>
                                    <button onClick={handleBuyBtn} className=" border-cyan-700 border text-cyan-800 px-6 py-2 rounded hover:cursor-pointer transition duration-200 hover:bg-cyan-700 hover:text-white">
                                        BUY NOW
                                    </button>
                                </div>


                                <div className="mt-4 text-sm text-gray-600 space-y-2">
                                    <p className="flex items-center gap-2">
                                        <Truck className="w-4 h-4 text-red-500" /> COD Not Available
                                    </p>
                                    <p className="flex items-center gap-2">
                                        <ShieldCheck className="w-4 h-4 text-green-600" /> Easy Replacement Only
                                    </p>
                                    <p className="flex items-center gap-2">
                                        <BadgeCheck className="w-4 h-4 text-blue-500" /> Delivered 2-5 Business Days
                                    </p>
                                    <p className="text-xs text-gray-400">
                                        Payment Options: Credit Card, Debit Card, Net Banking, Wallets
                                    </p>
                                    <p className="text-sm text-gray-900 mt-4">
                                        Product Description:
                                    </p>
                                    <p className="text-sm text-gray-500 mt-1">
                                        {product.description}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div> : <Loader />}
            </div>
        </>
    )
}

export default ProductDetailsPage