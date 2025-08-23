import React from 'react'
import { Trash2, ShoppingCart } from "lucide-react";
import { useSelector } from 'react-redux';


const OrderCard = ({ order }) => {

    return (
        <>
            <div key={order._id} className="mb-6 border border-gray-200 rounded-xl overflow-hidden">
                <div className="flex justify-between items-center bg-gray-100 p-3 text-sm font-medium">
                    <div>
                        Order ID: <span className="text-cyan-600">{order._id}</span>
                    </div>
                    <div>
                        Shipping Address: <span className="text-cyan-600">{order.shippingAddress.city}</span>
                    </div>

                </div>

                {order.items.map((product) => (
                    <>
                        <div className="flex flex-col md:flex-row gap-4 p-4">
                            <img src={product.image} alt="Product" className="w-20 h-20 rounded border" />
                            <div className="flex-1">
                                <p className="text-sm font-medium">
                                    {product.title}
                                </p>
                                <p className="mt-2 text-sm">
                                    Total: ₹{product.price} &nbsp; | &nbsp; QTY: 1
                                </p>


                            </div>

                            {/* <div className="flex flex-col gap-2 text-sm">
                                        <OrderAction icon={<Pencil size={16} />} text="Modify Order" />
                                        <OrderAction icon={<MapPin size={16} />} text="Track Order" />
                                        <OrderAction icon={<PhoneCall size={16} />} text="Customer Support" />
                                        <OrderAction icon={<Printer size={16} />} text="Print Order Detail" />
                                        <OrderAction icon={<XCircle size={16} className="text-red-600" />} text="Cancel Order" />
                                    </div> */}
                        </div>
                    </>
                ))}
                <div className="flex justify-between items-center bg-gray-100 p-3 text-sm font-medium">
                    <div>
                        Total Amount: <span className="text-cyan-600">{order.totalAmount}</span>
                    </div>
                    <div>
                        Order Status: <span className={`${order.status === 'PLACED' ? 'text-red-500' : 'text-green-500'}`}>{order.status}</span>
                    </div>

                </div>

            </div>
        </>
    )
}

export default OrderCard