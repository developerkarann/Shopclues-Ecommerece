import { useDispatch, useSelector } from "react-redux";
import OrderCard from "../components/OrderCard";


const HoverOrders = () => {


    const dispatch = useDispatch()

    const orders = useSelector((state) => state.orders.data)


    return (
        <>
            <div className="absolute right-0 mt-2 w-[700px] h-[500px] overflow-scroll scrollbar-hide p-3 bg-white border border-gray-200 rounded-md shadow-lg opacity-0 group-hover:opacity-100 group-hover:visible invisible transition-all duration-300 z-50">

                <div className="mb-4 flex gap-4">
                    <span className="pb-2 font-semibold text-2xl">My Orders</span>
                </div>
                {
                    orders.length < 1 ? <>
                        <div className="flex justify-center items-center text-2xl">
                            <h2>Please place an order</h2>
                        </div>
                    </>
                        :
                        orders.map((order, i) => (
                            <OrderCard key={i} order={order} />
                        ))}
            </div>
        </>
    )
}




export default HoverOrders