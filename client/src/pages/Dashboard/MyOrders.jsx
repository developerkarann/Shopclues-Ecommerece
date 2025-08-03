import {
    MapPin,
    Pencil,
    PhoneCall,
    Printer,
    XCircle
} from "lucide-react";


const MyOrders = () => {

    
const orders = [
  {
    id: "216134252",
    date: "01 Aug 2025",
    product: {
      image: "https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=300&h=300&fit=crop",
      title:
        "Digimate 3-in-1 Cable 0.29 m A3 Micro USB Cable 0.5 m Copper All In One 60W USB Fast Charging Cable Set (Compatible with Mobile, i phone, Tablet, Black, One Cable)",
      price: 398,
      qty: 2,
    },
    paymentStatus: "Payment Pending",
  },
  {
    id: "216134251",
    date: "01 Aug 2025",
  },
];


    return (
        <>

            <div>
                <div className="mb-4 border-b border-gray-200 flex gap-4">
                    <span className="pb-2 border-b-2 border-cyan-500 font-semibold">Orders</span>
                </div>
                {orders.map((order) => (
                    <div key={order.id} className="mb-6 border border-gray-200 rounded-xl overflow-hidden">
                        <div className="flex justify-between items-center bg-gray-100 p-3 text-sm font-medium">
                            <div>
                                Order ID: <span className="text-cyan-600">{order.id}</span>
                            </div>
                            <button className="text-orange-500 border border-orange-500 px-3 py-1 rounded hover:bg-orange-50">
                                Order Details
                            </button>
                        </div>
                        {order.product && (
                            <div className="flex flex-col md:flex-row gap-4 p-4">
                                <img src={order.product.image} alt="Product" className="w-20 h-20 rounded border" />
                                <div className="flex-1">
                                    <p className="text-sm font-medium">
                                        {order.product.title}
                                    </p>
                                    <p className="mt-2 text-sm">
                                        Total: ₹{order.product.price} &nbsp; | &nbsp; QTY: {order.product.qty}
                                    </p>
                                    <div className="flex items-center gap-2 mt-2">
                                        <span className="text-sm font-bold">COD: ₹{order.product.price}</span>
                                        <button className="bg-gradient-to-r from-orange-400 to-pink-500 text-white px-2 py-1 rounded hover:cursor-pointer text-sm">
                                            Prepay now
                                        </button>
                                    </div>
                                    <p className="mt-2 text-blue-600 font-semibold text-sm">
                                        {order.paymentStatus}
                                    </p>
                                </div>

                                <div className="flex flex-col gap-2 text-sm">
                                    <OrderAction icon={<Pencil size={16} />} text="Modify Order" />
                                    <OrderAction icon={<MapPin size={16} />} text="Track Order" />
                                    <OrderAction icon={<PhoneCall size={16} />} text="Customer Support" />
                                    <OrderAction icon={<Printer size={16} />} text="Print Order Detail" />
                                    <OrderAction icon={<XCircle size={16} className="text-red-600" />} text="Cancel Order" />
                                </div>
                            </div>
                        )}
                    </div>
                ))}
            </div>

        </>
    )
}



function OrderAction({ icon, text }) {
  return (
    <button className="flex items-center gap-2 text-gray-600 hover:text-black">
      {icon}
      {text}
    </button>
  );
}


export default MyOrders