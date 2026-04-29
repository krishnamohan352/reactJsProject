import React from 'react'

const Orders = () => {
    return (
        <section className="max-w-5xl mx-auto p-6">

            <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">
                My Orders
            </h2>

            <div className="space-y-6">
                <div class="bg-white dark:bg-gray-800 p-4 rounded-xl shadow">

                    <div class="flex justify-between mb-2">
                        <span class="font-semibold text-gray-800 dark:text-white">
                            Order #1001
                        </span>
                        <span class="text-sm text-gray-500">
                            12-2-2001
                        </span>
                    </div>

                    <div class="space-y-1 mb-3">
                        <div class="flex justify-between text-sm text-gray-600 dark:text-gray-300">
                            <span>name x 1</span>
                            <span>200</span>
                        </div>
                    </div>

                    <div class="flex justify-between border-t pt-2">
                        <span class="font-semibold text-gray-800 dark:text-white">Total</span>
                        <span class="text-blue-500 font-bold">300</span>
                    </div>

                </div>
                
            </div>

        </section>
    )
}

export default Orders
