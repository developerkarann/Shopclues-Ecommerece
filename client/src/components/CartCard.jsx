import { removeFromCart } from '../redux/slices/cartSlice';
import { Minus, Plus } from 'lucide-react'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';

const CartCard = ({ product }) => {

    const dispatch = useDispatch()
    let [count, setCounter] = useState(1)

    const handleDecrement = () => {
        if (count > 1) {
            setCounter(count - 1);
        }
    };

    return (
        <>
            <div className="flex gap-4 products-start my-2">
                <img
                    // src="https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=300&h=300&fit=crop"
                    src={product.image}
                    alt="Product"
                    className="w-24 h-24 object-contain"
                />
                <div className="flex-1">
                    <p className="text-sm font-medium">
                        {product.title.slice(0,60)}
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
                    <button onClick={() => dispatch(removeFromCart(product.id))} className=" hover:cursor-pointer text-blue-500 text-sm mt-2">Remove</button>
                </div>
                <div className="text-right text-sm">
                    <p>
                        Price : <span className="font-semibold">₹ {product.price + (product.price * product.discount / 100)}</span>
                    </p>
                    <p>
                        Discount : - ₹ {product.price * product.discount / 100}
                    </p>
                    <p>
                        Shipping Fee : <span className="font-bold">FREE</span>
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