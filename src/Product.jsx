import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addItem, removeItem } from './redux/slice';
import { fetchProducts } from './redux/productSlice'
import toast from "react-hot-toast";
import SkeletonCard from './SkeletonCard';

const Product = () => {
    const dispatch = useDispatch();
    const [page, setPage] = useState(1);

    useEffect(() => {
        dispatch(fetchProducts(page));
    }, [page]);

    const productData = useSelector((state) => state.products.items);
    const loading = useSelector((state) => state.products.status);
    const cartSelector = useSelector((state) => state.cart.items);
    const getQty = (id) => {
        const cartItem = cartSelector.find(item => item.id === id);
        return cartItem ? cartItem.quantity : 0;
    };

    const handleInfinitScroll = () => {
        if (window.innerHeight + document.documentElement.scrollTop + 1 >= document.documentElement.scrollHeight) {
            if (loading === "loading") return;
            setPage((prev) => prev + 1);
        }
    }

    useEffect(() => {
        window.addEventListener("scroll", handleInfinitScroll);
        return () => {
            window.removeEventListener("scroll", handleInfinitScroll);
        };
    }, []);

    return (
        <section className="max-w-7xl mx-auto px-4 py-8">

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {
                    loading == "loading" ? (
                        Array.from({ length: 8 }).map((_, index) => (
                            <SkeletonCard key={index} />
                        ))
                    ) : (
                        productData.length && productData.map((item) => (
                            <div key={item.id} className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-4">
                                <img src={item.thumbnail} className="w-full h-40 object-cover rounded-lg mb-4" />
                                <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200">{item.title}</h3>
                                <p className="text-gray-600 dark:text-gray-300">{item.price}</p>
                                <div className="flex items-center justify-between gap-3">
                                    <button
                                        onClick={() => {
                                            dispatch(removeItem(item));
                                            toast.error("Removed from cart");
                                        }}
                                        disabled={getQty(item.id) < 1}
                                        className={`px-3 rounded text-gray-800 dark:text-gray-200 transition
                                            ${getQty(item.id) < 1
                                                ? "bg-gray-300 dark:bg-gray-600 cursor-not-allowed"
                                                : "bg-gray-300 hover:bg-gray-600 dark:bg-gray-700"
                                            }`}
                                    >
                                        -
                                    </button>
                                    <span className="text-gray-800 dark:text-gray-200 ">{getQty(item.id)}</span>
                                    <button onClick={() => { dispatch(addItem(item)); toast.success("Added to cart"); }} className="px-3 bg-gray-300 hover:bg-gray-600 dark:bg-gray-700 rounded text-gray-800 dark:text-gray-200">+</button>
                                </div>
                            </div>
                        ))
                    )}
            </div>
        </section>
    )
}

export default Product
