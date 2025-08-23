import {
    MapPin,
    Pencil,
    PhoneCall,
    Printer,
    XCircle
} from "lucide-react";
import OrderCard from "../../components/orderCard";
import { useSelector } from "react-redux";



const MyOrders = () => {

    const cart = useSelector((state) => state.cart.data);
    const token = useSelector((state) => state.auth.token)
    const orders = useSelector((state) => state.orders.data)

    console.log(orders)
    // const orders = [
    //     {
    //         id: "216134252",
    //         date: "01 Aug 2025",
    //         product: {
    //             image: "https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=300&h=300&fit=crop",
    //             title:
    //                 "Digimate 3-in-1 Cable 0.29 m A3 Micro USB Cable 0.5 m Copper All In One 60W USB Fast Charging Cable Set (Compatible with Mobile, i phone, Tablet, Black, One Cable)",
    //             price: 398,
    //             qty: 2,
    //         },
    //         paymentStatus: "Payment Pending",
    //     },
    //     {
    //         id: "216134251",
    //         date: "01 Aug 2025",
    //     },
    // ];


    return (
        <>

            <div>
                <div className="mb-4 border-b border-gray-200 flex gap-4">
                    <span className="pb-2 border-b-2 border-cyan-500 font-semibold">Orders</span>
                </div>
                {orders.map((order) => (
                    <OrderCard order={order} />
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