import React from 'react';
import { FaEye, FaEyeSlash, FaFlag } from 'react-icons/fa';

const ManageStats = ({stats}) => {
    
    return (
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-8">
            <div className="stat bg-green-100 shadow rounded-lg p-4 dark:bg-gray-800 dark:border dark:border-gray-700">
                <div className="stat-title text-sm font-bold dark:text-gray-300">
                    <FaEye size={30} color='green' className="dark:text-green-400"/>
                    Public Lessons
                </div>
                <div className="stat-value text-2xl text-green-600 dark:text-green-400">{stats?.public || 0}</div>
            </div>
            <div className="stat bg-blue-100 shadow rounded-lg p-4 dark:bg-gray-800 dark:border dark:border-gray-700">
                <div className="stat-title text-sm font-bold dark:text-gray-300">
                    <FaEyeSlash  size={30} color='blue' className="dark:text-blue-400"/>
                    Private Lessons
                </div>
                <div className="stat-value text-2xl text-blue-600 dark:text-blue-400">{stats?.private || 0}</div>
            </div>
            <div className="stat bg-red-100 shadow rounded-lg p-4 dark:bg-gray-800 dark:border dark:border-gray-700">
                <div className="stat-title text-sm font-bold dark:text-gray-300">
                    <FaFlag size={30} color='red' className="dark:text-red-400" />
                    Reported Lessons
                </div>
                <div className="stat-value text-2xl text-red-600 dark:text-red-400">{stats?.reported || 0}</div>
            </div>
        </div>
    );
};

export default ManageStats;