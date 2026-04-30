const SkeletonCard = () => {
    return (
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-4 animate-pulse">

            <div className="w-full h-40 bg-gray-300 dark:bg-gray-700 rounded-lg mb-4"></div>

            <div className="h-4 bg-gray-300 dark:bg-gray-700 rounded w-3/4 mb-2"></div>

            <div className="h-4 bg-gray-300 dark:bg-gray-700 rounded w-1/2 mb-4"></div>

            <div className="flex justify-between">
                <div className="h-8 w-8 bg-gray-300 dark:bg-gray-700 rounded"></div>
                <div className="h-4 w-10 bg-gray-300 dark:bg-gray-700 rounded"></div>
                <div className="h-8 w-8 bg-gray-300 dark:bg-gray-700 rounded"></div>
            </div>

        </div>
    );
};

export default SkeletonCard;