import { useSelector } from "react-redux";
import { useTheme } from "./context/ThemeContext";
import { Link } from "react-router-dom";

export default function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const cartSelector = useSelector((state) => state.cart.items);
  const totalCount = cartSelector.reduce(
    (total, item) => total + item.quantity,
    0
  );

  return (

    <header className="bg-white dark:bg-gray-800 shadow-md">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">

        <Link to='/'>
          <h1 className="text-xl font-bold text-gray-800 dark:text-white">
            K-Shop
          </h1>
        </Link>

        <nav className="hidden md:flex space-x-6">
          <Link to='/' className="text-gray-600 dark:text-gray-300 hover:text-blue-500">Home</Link>
          <Link to='/orders' className="text-gray-600 dark:text-gray-300 hover:text-blue-500">Order</Link>
        </nav>

        <div className="flex items-center space-x-4">

          <button onClick={toggleTheme}
            className="p-2 rounded-lg bg-gray-200 dark:bg-gray-700">
            🌙
          </button>

          <div className="relative">

            <Link to='/cart' ><button className="p-2 bg-gray-200 dark:bg-gray-700 rounded-lg">
              🛒
            </button></Link>
            <span
              className="cart-count absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold px-2 py-0.5 rounded-full">
              {totalCount}
            </span>
          </div>

          <span className="text-gray-700 dark:text-gray-200 font-medium hidden"></span>

          <button className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
            Login
          </button>

          <button
            className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600">
            Logout
          </button>

        </div>
      </div>
    </header>

  );
}