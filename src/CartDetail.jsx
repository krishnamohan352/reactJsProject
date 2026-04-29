import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addItem, removeItem, deleteItem } from './redux/slice';


const CartDetail = () => {
    const dispatch = useDispatch();
    const cartSlector = useSelector((state) => state.cart.items);
    const totalCount = cartSlector.reduce(
        (total, item) => total + item.quantity,
        0
    );

    return (
        <section className="max-w-5xl mx-auto p-6">
            <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">
                Your Cart
            </h2>
            <div className="space-y-4">
                {
                    cartSlector.length > 0 && cartSlector.map((item) => (
                        <div key={item.id} className="flex justify-between items-center bg-white dark:bg-gray-800 p-4 rounded-lg shadow">
                            <div>
                                <h3 className="text-lg font-semibold text-gray-800 dark:text-white">{item.title}</h3>
                                <p className="text-gray-600 dark:text-gray-300">{item.price}</p>
                            </div>
                            <div className="flex items-center gap-3">
                                <button onClick={() => dispatch(removeItem(item))} className="px-3 bg-gray-300 dark:bg-gray-700 rounded">-</button>
                                <span className="text-gray-800 dark:text-white"> {item.quantity}</span>
                                <button onClick={() => dispatch(addItem(item))} className="px-3 bg-gray-300 dark:bg-gray-700 rounded">+</button>
                            </div>
                            <button
                                onClick={() => dispatch(deleteItem({ id: item.id }))}
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
                    ₹{cartSlector.reduce((sum, item) => sum + item.price * item.quantity, 0).toFixed(2)}
                </span>
            </div>
            <button className="mt-6 w-full bg-green-500 text-white py-3 rounded-lg hover:bg-green-600">
                Checkout
            </button>
        </section>
    )
}

export default CartDetail
