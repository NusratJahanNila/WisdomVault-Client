const LessonCardSkeleton = () => {
    return (
        <div className="relative bg-white dark:bg-gray-800 shadow-lg border border-gray-200 dark:border-gray-700 rounded-2xl p-5 animate-pulse">
            {/* Card Content */}
            <div className="flex flex-col h-full">
                {/* Author Section Skeleton */}
                <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 rounded-full bg-gray-300 dark:bg-gray-700"></div>
                    <div className="flex-1 min-w-0 space-y-2">
                        <div className="h-3 bg-gray-300 dark:bg-gray-700 rounded w-3/4"></div>
                        <div className="h-2 bg-gray-200 dark:bg-gray-600 rounded w-1/2"></div>
                    </div>
                    <div className="w-12 h-6 bg-gray-300 dark:bg-gray-700 rounded-full"></div>
                </div>

                {/* Title Skeleton */}
                <div className="mb-3 space-y-2">
                    <div className="h-4 bg-gray-300 dark:bg-gray-700 rounded w-full"></div>
                    <div className="h-4 bg-gray-300 dark:bg-gray-700 rounded w-5/6"></div>
                </div>

                {/* Description Skeleton */}
                <div className="mb-4 flex-1 space-y-2">
                    <div className="h-3 bg-gray-200 dark:bg-gray-600 rounded w-full"></div>
                    <div className="h-3 bg-gray-200 dark:bg-gray-600 rounded w-11/12"></div>
                    <div className="h-3 bg-gray-200 dark:bg-gray-600 rounded w-4/5"></div>
                </div>

                {/* Tags Section Skeleton */}
                <div className="mb-4 min-h-[2.5rem]">
                    <div className="flex flex-wrap gap-2">
                        <div className="w-20 h-6 bg-gray-200 dark:bg-gray-600 rounded-full"></div>
                        <div className="w-16 h-6 bg-gray-200 dark:bg-gray-600 rounded-full"></div>
                    </div>
                </div>

                {/* Button Skeleton */}
                <div className="mt-auto pt-3 border-t border-gray-100 dark:border-gray-700">
                    <div className="w-full h-9 bg-gray-300 dark:bg-gray-700 rounded-lg"></div>
                </div>
            </div>
            
            {/* Corner Badge Skeleton */}
            <div className="absolute top-3 right-3">
                <div className="w-8 h-8 rounded-full bg-gray-300 dark:bg-gray-700"></div>
            </div>
        </div>
    );
};

export default LessonCardSkeleton;