import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { clearCart } from "./redux/slice";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { billingSchema } from "./validation";

const Checkout = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const cartSelector = useSelector((state) => state.cart.items);

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(billingSchema),
    });

    const placeOrder = (billing) => {
        if (cartSelector.length === 0) {
            toast.error("Cart is empty");
            return;
        }

        const totalAmount = cartSelector.reduce(
            (acc, item) => acc + item.price * item.quantity,
            0
        );

        const newOrder = {
            id: Date.now(),
            items: cartSelector,
            billing,
            total: totalAmount,
            date: new Date().toLocaleString(),
        };

        const existingOrders =
            JSON.parse(localStorage.getItem("orders")) || [];

        localStorage.setItem(
            "orders",
            JSON.stringify([...existingOrders, newOrder])
        );

        toast.success("Order placed successfully!");

        dispatch(clearCart());
        navigate("/orders");
    };

    return (
        <section className="max-w-7xl mx-auto p-6 grid md:grid-cols-2 gap-8">

            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow">
                <h2 className="text-xl font-bold text-gray-800 dark:text-white mb-4">
                    Billing Details
                </h2>

                <form onSubmit={handleSubmit(placeOrder)} className="space-y-4">

                    <div>
                        <input
                            type="text"
                            placeholder="Full Name"
                            className="w-full p-3 rounded bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-white"
                            {...register("name")}
                        />
                        <p className="text-red-500 text-sm">{errors.name?.message}</p>
                    </div>

                    <div>
                        <input
                            type="email"
                            placeholder="Email"
                            className="w-full p-3 rounded bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-white"
                            {...register("email")}
                        />
                        <p className="text-red-500 text-sm">{errors.email?.message}</p>
                    </div>

                    <div>
                        <input
                            type="text"
                            placeholder="Address"
                            className="w-full p-3 rounded bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-white"
                            {...register("address")}
                        />
                        <p className="text-red-500 text-sm">{errors.address?.message}</p>
                    </div>

                    <div>
                        <input
                            type="text"
                            placeholder="City"
                            className="w-full p-3 rounded bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-white"
                            {...register("city")}
                        />
                        <p className="text-red-500 text-sm">{errors.city?.message}</p>
                    </div>

                    <div>
                        <input
                            type="text"
                            placeholder="ZIP Code"
                            className="w-full p-3 rounded bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-white"
                            {...register("zip")}
                        />
                        <p className="text-red-500 text-sm">{errors.zip?.message}</p>
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-green-500 text-gray-800 dark:text-gray-200 py-3 rounded-lg hover:bg-green-600"
                    >
                        Place Order
                    </button>
                </form>
            </div>

            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow">
                <h2 className="text-xl font-bold text-gray-800 dark:text-white mb-4">
                    Order Summary
                </h2>

                <div className="space-y-3">
                    {cartSelector.map((item, index) => (
                        <div
                            key={index}
                            className="flex justify-between text-gray-700 dark:text-gray-200"
                        >
                            <span>
                                {item.title} × {item.quantity}
                            </span>
                            <span>₹{(item.price * item.quantity).toFixed(2)}</span>
                        </div>
                    ))}
                </div>

                <div className="border-t border-gray-300 dark:border-gray-700 mt-4 pt-4 flex justify-between">
                    <span className="text-lg font-semibold text-gray-800 dark:text-white">
                        Total
                    </span>

                    <span className="text-xl font-bold text-gray-800 dark:text-gray-200">
                        ₹{cartSelector.reduce((sum, item) => sum + item.price * item.quantity, 0).toFixed(2)}
                    </span>
                </div>
            </div>

        </section>
    );
};

export default Checkout;