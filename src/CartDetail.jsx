import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { addItem, removeItem, deleteItem, clearCart } from './redux/slice';

const CartDetail = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const cartSelector = useSelector((state) => state.cart.items);
    const totalCount = cartSelector.reduce(
        (total, item) => total + item.quantity,
        0
    );


   
    

    const handleCheckout = () => {
        if (cartSelector.length === 0) return;

        const existingOrders = JSON.parse(localStorage.getItem("orders")) || [];

        const newOrder = {
            id: Date.now(),
            items: cartSelector,
            total: cartSelector.reduce(
                (acc, item) => acc + item.price * item.quantity,
                0
            ).toFixed(2),
            date: new Date().toLocaleString(),
        };

        const updatedOrders = [...existingOrders, newOrder];

        localStorage.setItem("orders", JSON.stringify(updatedOrders));

        toast.success("Order placed successfully!");

        dispatch(clearCart());
        navigate("/orders");

    }

    return (
        <section className="max-w-5xl mx-auto p-6">
            <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">
                Your Cart
            </h2>
            <div className="space-y-4">
                {
                    cartSelector.length > 0 && cartSelector.map((item) => (
                        <div key={item.id} className="flex justify-between items-center bg-white dark:bg-gray-800 p-4 rounded-lg shadow">
                            <div>
                                <h3 className="text-lg font-semibold text-gray-800 dark:text-white">{item.title}</h3>
                                <p className="text-gray-600 dark:text-gray-300">{item.price}</p>
                            </div>
                            <div className="flex items-center gap-3">
                                <button onClick={() => { dispatch(removeItem(item)); toast.error("Removed from cart"); }} className="px-3 bg-gray-300 dark:bg-gray-700 rounded">-</button>
                                <span className="text-gray-800 dark:text-white"> {item.quantity}</span>
                                <button onClick={() => { dispatch(addItem(item)); toast.success("Added to cart"); }} className="px-3 bg-gray-300 dark:bg-gray-700 rounded">+</button>
                            </div>
                            <button
                                onClick={() => { dispatch(deleteItem({ id: item.id })); toast.error("Item removed from cart"); }}
                                className="text-red-500 hover:underline">
                                Delete
                            </button>
                        </div>
                    ))
                }
            </div>

            <div className="mt-6 p-4 bg-white dark:bg-gray-800 rounded-lg shadow flex justify-between items-center">
                <span className="text-lg font-semibold text-gray-800 dark:text-white">Total:</span>
                <span id="total" className="text-xl font-bold text-blue-500">
                    ₹{cartSelector.reduce((sum, item) => sum + item.price * item.quantity, 0).toFixed(2)}
                </span>
            </div>
            <button
                onClick={handleCheckout}
                disabled={cartSelector.length === 0}
                className={`mt-6 w-full py-3 rounded-lg text-white ${cartSelector.length === 0
                    ? "bg-gray-400 cursor-not-allowed"
                    : "bg-green-500 hover:bg-green-600"
                    }`} >
                Checkout
            </button>
        </section >
    )
}

export default CartDetail
