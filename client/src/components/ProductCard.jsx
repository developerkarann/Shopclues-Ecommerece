import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

const ProductCard = ({ product }) => {

    const navigate = useNavigate()


    return (
        <>
            <div
                key={product.id}
                className=" hover:cursor-pointer w-1/5 flex-shrink-0  bg-white rounded p-3 text-center  transition-all duration-200 transform hover:scale-105"
            >
                <Link to={`/product/${product.id}`} target='_blank' >
                    <img
                        src={product.image}
                        alt={product.name}
                        className="rounded mb-2"
                    />


                    <div className="text-sm text-gray-500 font-medium mb-1 truncate">
                        {product.name}
                    </div>

                    <div className="flex justify-center items-center gap-1 ">
                        <div className="text-sm font-semibold text-black">{product.price}</div>
                        <div className="text-xs line-through text-gray-400">
                            {product.originalPrice}
                        </div>
                        <div className="text-cyan-700 text-xs font-semibold">
                            50%
                        </div>
                    </div>
                </Link>

            </div>
        </>
    )
}

export default ProductCard