import React from 'react'

const Orders = () => {
    const orders = (JSON.parse(localStorage.getItem("orders")) || []).reverse();
    return (
        <section className="max-w-5xl mx-auto p-6">

            <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">
                My Orders
            </h2>

            <div className="space-y-6">
                {orders.length === 0 ? (
                    <p className="text-gray-500">No orders yet</p>
                ) : (
                    orders.map((order) => (
                        <div key={order.id} className="bg-white dark:bg-gray-800 p-4 rounded-xl shadow">

                            <div className="flex justify-between mb-2">
                                <span className="font-semibold text-gray-800 dark:text-white">
                                    Order #{order.id}
                                </span>
                                <span className="text-sm text-gray-500">
                                    {order.date}
                                </span>
                            </div>

                            <div className="space-y-1 mb-3">
                                {order.items.map((item) => (
                                    <div key={item.id} className="flex justify-between text-sm text-gray-600 dark:text-gray-300">
                                        <span>{item.title} x {item.quantity}</span>
                                        <span>₹ {(item.price * item.quantity).toFixed(2)}</span>
                                    </div>
                                ))}
                            </div>

                            <div className="flex justify-between border-t pt-2">
                                <span className="font-semibold text-gray-800 dark:text-white">Total</span>
                                <span className="text-gray-800 dark:text-gray-200 font-bold"> ₹ {order.total.toFixed(2)}</span>
                            </div>

                        </div>
                    ))

                )}
            </div>

        </section >
    )
}

export default Orders
