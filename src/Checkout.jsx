import React from 'react'

const Checkout = () => {
    return (
        <section class="max-w-7xl mx-auto p-6 grid md:grid-cols-2 gap-8">

            <div class="bg-white dark:bg-gray-800 p-6 rounded-xl shadow">
                <h2 class="text-xl font-bold text-gray-800 dark:text-white mb-4">
                    Billing Details
                </h2>

                <form class="space-y-4">
                    <input type="text" placeholder="Full Name" required
                        class="w-full p-3 rounded bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-white" />
                    <input type="email" placeholder="Email" required
                        class="w-full p-3 rounded bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-white" />
                    <input type="text" placeholder="Address" required
                        class="w-full p-3 rounded bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-white" />

                    <input type="text" placeholder="City" required
                        class="w-full p-3 rounded bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-white" />

                    <input type="text" placeholder="ZIP Code" required
                        class="w-full p-3 rounded bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-white" />


                </form>
            </div>

            <div class="bg-white dark:bg-gray-800 p-6 rounded-xl shadow">
                <h2 class="text-xl font-bold text-gray-800 dark:text-white mb-4">
                    Order Summary
                </h2>

                <div id="orderItems" class="space-y-3"></div>

                <div class="border-t border-gray-300 dark:border-gray-700 mt-4 pt-4 flex justify-between">
                    <span class="text-lg font-semibold text-gray-800 dark:text-white">Total</span>
                    <span id="total" class="text-xl font-bold text-blue-500">$0</span>
                </div>

                <button onclick="placeOrder()"
                    class="mt-6 w-full bg-green-500 text-white py-3 rounded-lg hover:bg-green-600">
                    Place Order
                </button>
            </div>

        </section>
    )
}

export default Checkout
