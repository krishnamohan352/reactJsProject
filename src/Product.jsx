import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addItem, removeItem } from './redux/slice';
import { fetchProducts } from './redux/productSlice'

const Product = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchProducts());
    }, []);

    const productData = useSelector((state) => state.products.items);
    const cartSelector = useSelector((state) => state.cart.items);

    return (
        <section className="max-w-7xl mx-auto px-4 py-8">
            <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">
                Products
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {
                    productData.length && productData.map((item) => (
                        <div key={item.id} className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-4">
                            <img src={item.thumbnail} className="w-full h-40 object-cover rounded-lg mb-4" />
                            <h3 className="text-lg font-semibold text-gray-800 dark:text-white">{item.title}</h3>
                            <p className="text-gray-600 dark:text-gray-300">{item.price}</p>
                            {
                                cartSelector.find(cartItem => cartItem.id === item.id) ?
                                    <button onClick={() => dispatch(removeItem(item))} className="mt-3 w-full bg-red-500 text-white py-2 rounded-lg hover:bg-red-600">
                                        Remove form Cart
                                    </button> : <button onClick={() => dispatch(addItem(item))} className="mt-3 w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600">
                                        Add to Cart
                                    </button>
                            }
                        </div>
                    ))
                }
            </div>
        </section>
    )
}

export default Product
