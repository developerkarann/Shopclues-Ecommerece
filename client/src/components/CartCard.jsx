import axios from 'axios';
import { Minus, Plus } from 'lucide-react';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { Link } from "react-router-dom";


const CartCard = ({ product }) => {

    const token = useSelector((state) => state.auth.token);

    const dispatch = useDispatch()
    let [count, setCounter] = useState(1)

    const handleDecrement = () => {
        if (count > 1) {
            setCounter(count - 1);
        }
    };

    const handleRemove = async () => {
        console.log('productId', product.id)
        try {
            const res = await axios.delete(`${import.meta.env.VITE_SERVER}/cart/${product.productId}`, {
                headers: {
                    Authorization: token,
                }
            })
            console.log(res.data)
            toast.success(res.data.message)
            document.location.reload()
        } catch (error) {
            console.log(error.response?.data)
            toast.error(error.response?.data?.message)
        }
    }

    useEffect(() => {

    }, [handleRemove, token])


    return (
        <>
            <div className="flex gap-4 products-start my-2">
                <img
                    src={product.image}
                    alt="Product"
                    className="w-24 h-24 object-contain"
                />
                <div className="flex-1">
                    <p className="text-sm font-medium">
                        <Link to={`/product/${product.productId}`}>
                            {product.title.slice(0, 60)}
                        </Link> 
                    </p>
                    <div className="flex products-center gap-3 mt-2">
                        <button className="w-6 h-6 flex products-center justify-center bg-gray-200 rounded-full">
                            <Minus className="w-4 h-4 hover:cursor-pointer" onClick={handleDecrement} />
                        </button>
                        <span>{count}</span>
                        <button className="w-6 h-6 flex products-center justify-center bg-gray-200 rounded-full">
                            <Plus className="w-4 h-4 hover:cursor-pointer" onClick={() => setCounter(count + 1)} />
                        </button>
                    </div>
                    <button onClick={handleRemove} className=" hover:cursor-pointer text-blue-500 text-sm mt-2">Remove</button>
                </div>
                <div className="text-right text-sm">
                    <p>
                        Price : <span className="font-semibold">₹ {product.price + (product.price * product.discount / 100)}</span>
                    </p>
                    <p>
                        Discount : <span className='text-green-500'> - ₹ {product.price * product.discount / 100}</span> 
                    </p>
                    <p>
                        Shipping Fee : <span className="font-bold text-green-400">FREE</span>
                    </p>
                    <p className="mt-2 font-semibold text-lg">₹ {product.price}</p>
                    <p className="text-xs text-gray-500">
                        Inclusive of all the applicable taxes
                    </p>
                </div>
            </div>
        </>
    )
}

export default CartCard