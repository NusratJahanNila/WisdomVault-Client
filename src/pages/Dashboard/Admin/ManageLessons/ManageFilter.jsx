import React from 'react';
import { FaEye, FaEyeSlash, FaFilter, FaFlag, FaSort } from 'react-icons/fa';

const ManageFilter = ({setFilterCategory,setFilterPrivacy,setShowReportedOnly,filterPrivacy,showReportedOnly,filterCategory,}) => {
    return (
        <div className="bg-white shadow-md rounded-lg p-4 mb-6 dark:bg-gray-800 dark:border dark:border-gray-700 dark:shadow-gray-900/50">
            <div className="flex flex-wrap items-center justify-between gap-4">
                <div className="flex items-center gap-2">
                    <FaFilter className="text-gray-500 dark:text-gray-400" />
                    <span className="font-medium dark:text-gray-300">Find lessons based on:</span>
                </div>

                <div className="flex flex-wrap gap-6">
                    {/* Category Filter */}
                    <div className="relative">
                        <button
                            className="flex items-center gap-1 text-gray-700 hover:text-primary pb-1 border-b-2 border-transparent hover:border-primary transition-all dark:text-gray-300 dark:hover:text-teal-400 dark:hover:border-teal-400"
                            onClick={() => document.getElementById('categoryDropdown').classList.toggle('hidden')}
                        >
                            Category
                            <FaSort className="text-xs" />
                        </button>
                        <div id="categoryDropdown" className="hidden absolute top-full left-0 mt-2 bg-white shadow-xl rounded-lg w-48 z-10 border dark:bg-gray-800 dark:border-gray-700 dark:shadow-gray-900/50">
                            <div className="p-2 dark:bg-gray-800">
                                <button
                                    onClick={() => { setFilterCategory('all'); document.getElementById('categoryDropdown').classList.add('hidden'); }}
                                    className={`block w-full text-left px-3 py-2 rounded ${filterCategory === 'all' ? 'bg-primary text-white dark:bg-teal-700' : 'hover:bg-gray-100 dark:hover:bg-gray-700 dark:text-gray-300'}`}
                                >
                                    All Categories
                                </button>
                                {['Personal Growth', 'Career', 'Relationships', 'Mindset', 'Productivity', 'Health & Wellness'].map(cat => (
                                    <button
                                        key={cat}
                                        onClick={() => { setFilterCategory(cat); document.getElementById('categoryDropdown').classList.add('hidden'); }}
                                        className={`block w-full text-left px-3 py-2 rounded ${filterCategory === cat ? 'bg-primary text-white dark:bg-teal-700' : 'hover:bg-gray-100 dark:hover:bg-gray-700 dark:text-gray-300'}`}
                                    >
                                        {cat}
                                    </button>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Privacy Filter */}
                    <div className="relative">
                        <button
                            className="flex items-center gap-1 text-gray-700 hover:text-secondary pb-1 border-b-2 border-transparent hover:border-secondary transition-all dark:text-gray-300 dark:hover:text-teal-400 dark:hover:border-teal-400"
                            onClick={() => document.getElementById('privacyDropdown').classList.toggle('hidden')}
                        >
                            Privacy
                            <FaSort className="text-xs" />
                        </button>
                        <div id="privacyDropdown" className="hidden absolute top-full left-0 mt-2 bg-white shadow-xl rounded-lg w-40 z-10 border dark:bg-gray-800 dark:border-gray-700 dark:shadow-gray-900/50">
                            <div className="p-2 dark:bg-gray-800">
                                <button
                                    onClick={() => { setFilterPrivacy('all'); document.getElementById('privacyDropdown').classList.add('hidden'); }}
                                    className={`block w-full text-left px-3 py-2 rounded ${filterPrivacy === 'all' ? 'bg-primary text-white dark:bg-teal-700' : 'hover:bg-gray-100 dark:hover:bg-gray-700 dark:text-gray-300'}`}
                                >
                                    All Privacy
                                </button>
                                <button
                                    onClick={() => { setFilterPrivacy('public'); document.getElementById('privacyDropdown').classList.add('hidden'); }}
                                    className={`block w-full text-left px-3 py-2 rounded ${filterPrivacy === 'public' ? 'bg-primary text-white dark:bg-teal-700' : 'hover:bg-gray-100 dark:hover:bg-gray-700 dark:text-gray-300'}`}
                                >
                                    <FaEye className="inline mr-2" /> Public
                                </button>
                                <button
                                    onClick={() => { setFilterPrivacy('private'); document.getElementById('privacyDropdown').classList.add('hidden'); }}
                                    className={`block w-full text-left px-3 py-2 rounded ${filterPrivacy === 'private' ? 'bg-primary text-white dark:bg-teal-700' : 'hover:bg-gray-100 dark:hover:bg-gray-700 dark:text-gray-300'}`}
                                >
                                    <FaEyeSlash className="inline mr-2" /> Private
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Report Filter */}
                    <div className="relative">
                        <button
                            onClick={() => setShowReportedOnly(!showReportedOnly)}
                            className={`flex items-center gap-1 pb-1 border-b-2 transition-all ${showReportedOnly ? 'text-red-600 border-red-600 dark:text-red-400 dark:border-red-400' : 'text-gray-700 hover:text-red-600 hover:border-red-600 border-transparent dark:text-gray-300 dark:hover:text-red-400 dark:hover:border-red-400'}`}
                        >
                            <FaFlag className="dark:text-gray-300" />
                            Report 
                        </button>
                    </div>

                    {/* Active Filter Display */}
                    {(filterCategory !== 'all' || filterPrivacy !== 'all' || showReportedOnly) && (
                        <button
                            onClick={() => {
                                setFilterCategory('all');
                                setFilterPrivacy('all');
                                setShowReportedOnly(false);
                            }}
                            className="text-sm text-primary hover:underline dark:text-teal-400 dark:hover:text-teal-300"
                        >
                            Clear Filters
                        </button>
                    )}
                </div>
            </div>
        </div>
    );
};

export default ManageFilter;