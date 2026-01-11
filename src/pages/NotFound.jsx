import React from 'react';
import { Link } from 'react-router';

const NotFound = () => {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4 dark:bg-gray-900">
            <div className="bg-white shadow-md rounded-lg p-8 max-w-md w-full text-center dark:bg-gray-800 dark:border dark:border-gray-700 dark:shadow-gray-900/50">
                <h1 className="text-2xl font-bold text-gray-800 mb-4 dark:text-white">
                    Lesson Not Found
                </h1>

                <p className="text-gray-600 mb-6 dark:text-gray-400">
                    Sorry, we couldn't find the lesson you're looking for.
                </p>

                <div className="space-y-3">
                    <Link
                        to="/"
                        className="block w-full bg-blue-500 hover:bg-blue-600 text-white font-medium py-3 px-4 rounded-lg transition dark:bg-teal-700 dark:hover:bg-teal-600 dark:border-0"
                    >
                        Go Back to Home
                    </Link>

                    <Link
                        to="/public-lessons"
                        className="block w-full border border-gray-300 hover:bg-gray-50 text-gray-700 font-medium py-3 px-4 rounded-lg transition dark:border-gray-600 dark:text-gray-300 dark:hover:bg-gray-700 dark:hover:text-white"
                    >
                        View Public Lessons
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default NotFound;