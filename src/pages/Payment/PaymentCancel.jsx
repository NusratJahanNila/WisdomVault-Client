import React from 'react';
import { Link } from 'react-router';
import { FaTimesCircle } from 'react-icons/fa';

const PaymentCancel = () => {
    return (
        <div className='flex flex-col items-center justify-center min-h-screen p-4 dark:bg-gray-900'>
            <div className='bg-white p-10 rounded-lg shadow-lg text-center max-w-md dark:bg-gray-800 dark:border dark:border-gray-700 dark:shadow-gray-900/50'>
                {/* Icon */}
                <FaTimesCircle className='w-16 h-16 text-red-500 mx-auto mb-4 dark:text-red-400' />
                
                {/* Title */}
                <h1 className='text-3xl font-bold text-gray-800 mb-2 dark:text-white'>
                    Payment Cancelled
                </h1>
                
                {/* Message */}
                <p className='text-gray-600 mb-6 dark:text-gray-400'>
                    Your payment was not completed. No charges have been made to your account.
                </p>
                
                {/* Action Buttons */}
                <div className="space-y-3">
                    <Link
                        to='/payment'
                        className='inline-block bg-primary text-white font-semibold py-3 px-6 rounded-lg hover:bg-primary/90 transition duration-300 w-full dark:bg-teal-700 dark:hover:bg-teal-600'
                    >
                        Try Payment Again
                    </Link>
                    
                    <Link
                        to='/public-lessons'
                        className='inline-block bg-secondary text-white font-semibold py-3 px-6 rounded-lg hover:bg-teal-600 transition duration-300 w-full dark:bg-teal-700 dark:hover:bg-teal-600'
                    >
                        Browse Free Lessons
                    </Link>
                    
                    <Link
                        to='/'
                        className='inline-block bg-gray-200 text-gray-700 font-semibold py-3 px-6 rounded-lg hover:bg-gray-300 transition duration-300 w-full dark:bg-gray-700 dark:text-gray-300 dark:hover:bg-gray-600'
                    >
                        Return to Home
                    </Link>
                </div>
                
                {/* Additional Info */}
                <div className="mt-8 pt-6 border-t border-gray-100 dark:border-gray-700">
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                        Need help? <Link to="/contact" className="text-primary hover:underline dark:text-teal-400">Contact Support</Link>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default PaymentCancel;