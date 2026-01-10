import axios from 'axios'
import React, { useEffect } from 'react'
import { Link, useSearchParams } from 'react-router'
import { IoBagCheckOutline } from 'react-icons/io5'

const PaymentSuccess = () => {
    //get session id from stripe
    const [searchParams] = useSearchParams();
    const sessionId = searchParams.get('session_id');

    useEffect(() => {
        if (sessionId) {
            axios.post(`${import.meta.env.VITE_API_URL}/payment-success`, { sessionId })
        }
    }, [sessionId])
    return (
        <div className='flex flex-col items-center justify-center dark:bg-gray-900 min-h-screen'>
            <div className='bg-white p-10 rounded-lg shadow-lg text-center dark:bg-gray-800 dark:border dark:border-gray-700 dark:shadow-gray-900/50'>
                <IoBagCheckOutline className='w-16 h-16 text-teal-500 mx-auto mb-4 dark:text-teal-400' />
                <h1 className='text-3xl font-bold text-gray-800 mb-2 dark:text-white'>
                    Payment Successful!
                </h1>
                <p className='text-gray-600 mb-6 dark:text-gray-400'>
                    You are now upgraded to a premium user. Check out all the lessons.
                </p>
                <Link
                    to='/public-lessons'
                    className='inline-block bg-secondary text-white font-semibold py-2 px-4 rounded hover:bg-teal-600 transition duration-300 dark:bg-teal-700 dark:hover:bg-teal-600'
                >
                    Go to Public Lesson
                </Link>
            </div>
        </div>
    );
};

export default PaymentSuccess;