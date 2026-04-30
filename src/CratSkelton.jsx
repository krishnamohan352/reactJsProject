const CartSkeleton = () => {
    return (
        <div className="flex justify-between items-center bg-white dark:bg-gray-800 p-4 rounded-lg shadow animate-pulse">

            {/* left text */}
            <div className="space-y-2">
                <div className="h-4 w-40 bg-gray-300 dark:bg-gray-700 rounded"></div>
                <div className="h-4 w-20 bg-gray-300 dark:bg-gray-700 rounded"></div>
            </div>

            {/* qty buttons */}
            <div className="flex items-center gap-3">
                <div className="h-8 w-8 bg-gray-300 dark:bg-gray-700 rounded"></div>
                <div className="h-4 w-6 bg-gray-300 dark:bg-gray-700 rounded"></div>
                <div className="h-8 w-8 bg-gray-300 dark:bg-gray-700 rounded"></div>
            </div>

            {/* delete */}
            <div className="h-4 w-12 bg-gray-300 dark:bg-gray-700 rounded"></div>

        </div>
    );
};

export default CartSkeleton;