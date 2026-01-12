import React, { useEffect, useState } from 'react';
import LessonCard from './LessonCard';
import axios from 'axios';
import { IoMdArrowDropdown } from "react-icons/io";

const Lessons = () => {
    const [lessons, setLessons] = useState([]);
    const [totalLesson, setTotalLessons] = useState(0);
    const [totalPage, setTotalPage] = useState(0);
    const [currentPage, setCurrentPage] = useState(0);
    const [loading, setLoading] = useState(true); // Add loading state
    const limit = 8;
    console.log(totalLesson)
    // filters
    const [category, setCategory] = useState('all');
    const [emotionalTone, setEmotionalTone] = useState('all');
    const [sortBy, setSortBy] = useState('newest');
    const [search, setSearch] = useState('');
    const [activeFilter, setActiveFilter] = useState(null);

    useEffect(() => {
        axios.get(`${import.meta.env.VITE_API_URL}/lessons`, {
            params: {
                limit,
                skip: currentPage * limit,
                category,
                emotionalTone,
                sortBy,
                search
            }
        }).then(res => {
            setLessons(res.data.result || []);
            setTotalLessons(res.data.total || 0);

            const pageCount = Math.ceil(res.data.total / limit);
            setTotalPage(pageCount);
        }).finally(() => {
            setLoading(false); // Stop loading
        });
    }, [currentPage, category, emotionalTone, sortBy, search]);

    return (
        <div className="dark:bg-gray-900 dark:text-white">
            {/* Filters */}
            <div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-6">
                <div className="flex items-center gap-8">

                    {/* Category */}
                    <div className="relative">
                        <button
                            onClick={() => setActiveFilter(activeFilter === 'category' ? null : 'category')}
                            className="flex items-center gap-1 font-semibold border-b-2 border-transparent hover:border-primary dark:text-gray-300 dark:hover:border-teal-400 dark:hover:text-teal-400"
                        >
                            Category <IoMdArrowDropdown className="dark:text-gray-400" />
                        </button>

                        {activeFilter === 'category' && (
                            <div className="absolute bg-white shadow-md rounded w-40 mt-2 z-50 dark:bg-gray-800 dark:border dark:border-gray-700 dark:shadow-gray-900/50">
                                {['all', 'Career', 'Personal Growth', 'Relationships', 'Mindset'].map(item => (
                                    <p
                                        key={item}
                                        onClick={() => {
                                            setCategory(item);
                                            setCurrentPage(0);
                                            setActiveFilter(null);
                                        }}
                                        className="px-4 py-2 hover:bg-gray-100 cursor-pointer dark:text-gray-300 dark:hover:bg-gray-700 dark:hover:text-white"
                                    >
                                        {item}
                                    </p>
                                ))}
                            </div>
                        )}
                    </div>

                    {/* Emotional Tone */}
                    <div className="relative">
                        <button
                            onClick={() => setActiveFilter(activeFilter === 'tone' ? null : 'tone')}
                            className="flex items-center gap-1 font-semibold border-b-2 border-transparent hover:border-primary dark:text-gray-300 dark:hover:border-teal-400 dark:hover:text-teal-400"
                        >
                            Emotional Tone <IoMdArrowDropdown className="dark:text-gray-400" />
                        </button>

                        {activeFilter === 'tone' && (
                            <div className="absolute bg-white shadow-md rounded w-40 mt-2 z-50 dark:bg-gray-800 dark:border dark:border-gray-700 dark:shadow-gray-900/50">
                                {['all', 'Motivational', 'Reflective', 'Sad', 'Inspiring'].map(tone => (
                                    <p
                                        key={tone}
                                        onClick={() => {
                                            setEmotionalTone(tone);
                                            setCurrentPage(0);
                                            setActiveFilter(null);
                                        }}
                                        className="px-4 py-2 hover:bg-gray-100 cursor-pointer dark:text-gray-300 dark:hover:bg-gray-700 dark:hover:text-white"
                                    >
                                        {tone}
                                    </p>
                                ))}
                            </div>
                        )}
                    </div>

                    {/* Sort */}
                    <div className="relative">
                        <button
                            onClick={() => setActiveFilter(activeFilter === 'sort' ? null : 'sort')}
                            className="flex items-center gap-1 font-semibold border-b-2 border-transparent hover:border-primary dark:text-gray-300 dark:hover:border-teal-400 dark:hover:text-teal-400"
                        >
                            Sort By <IoMdArrowDropdown className="dark:text-gray-400" />
                        </button>

                        {activeFilter === 'sort' && (
                            <div className="absolute bg-white shadow-md rounded w-40 mt-2 z-50 dark:bg-gray-800 dark:border dark:border-gray-700 dark:shadow-gray-900/50">
                                <p
                                    onClick={() => {
                                        setSortBy('newest');
                                        setActiveFilter(null);
                                    }}
                                    className="px-4 py-2 hover:bg-gray-100 cursor-pointer dark:text-gray-300 dark:hover:bg-gray-700 dark:hover:text-white"
                                >
                                    Newest
                                </p>
                                <p
                                    onClick={() => {
                                        setSortBy('mostSaved');
                                        setActiveFilter(null);
                                    }}
                                    className="px-4 py-2 hover:bg-gray-100 cursor-pointer dark:text-gray-300 dark:hover:bg-gray-700 dark:hover:text-white"
                                >
                                    Most Saved
                                </p>
                            </div>
                        )}
                    </div>
                </div>

                {/* Search */}
                <input
                    type="text"
                    placeholder="Search lessons..."
                    className="input input-bordered w-full md:w-64 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:placeholder-gray-400"
                    value={search}
                    onChange={(e) => {
                        setSearch(e.target.value);
                        setCurrentPage(0);
                    }}
                />
            </div>

            {/* Lessons Grid with Loading State */}
            {loading ? (
                <div className="grid md:grid-cols-3 lg:grid-cols-4 grid-cols-1 gap-3">
                    {/* Skeleton Loaders */}
                    {Array.from({ length: limit }).map((_, index) => (
                        <div key={index} className="bg-white dark:bg-gray-800 rounded-xl shadow-md border border-gray-200 dark:border-gray-700 p-4 animate-pulse">
                            {/* Author skeleton */}
                            <div className="flex items-center gap-3 mb-3">
                                <div className="w-10 h-10 rounded-full bg-gray-300 dark:bg-gray-700"></div>
                                <div className="flex-1 space-y-2">
                                    <div className="h-3 bg-gray-300 dark:bg-gray-700 rounded w-3/4"></div>
                                    <div className="h-2 bg-gray-200 dark:bg-gray-600 rounded w-1/2"></div>
                                </div>
                            </div>
                            {/* Title skeleton */}
                            <div className="h-4 bg-gray-300 dark:bg-gray-700 rounded w-full mb-2"></div>
                            <div className="h-4 bg-gray-300 dark:bg-gray-700 rounded w-5/6 mb-3"></div>
                            {/* Description skeleton */}
                            <div className="space-y-2 mb-3">
                                <div className="h-3 bg-gray-200 dark:bg-gray-600 rounded w-full"></div>
                                <div className="h-3 bg-gray-200 dark:bg-gray-600 rounded w-11/12"></div>
                            </div>
                            {/* Tags skeleton */}
                            <div className="flex gap-2 mb-4">
                                <div className="w-16 h-6 bg-gray-200 dark:bg-gray-600 rounded-full"></div>
                                <div className="w-14 h-6 bg-gray-200 dark:bg-gray-600 rounded-full"></div>
                            </div>
                            {/* Button skeleton */}
                            <div className="h-9 bg-gray-300 dark:bg-gray-700 rounded-lg"></div>
                        </div>
                    ))}
                </div>
            ) : (
                <div className="grid md:grid-cols-3 lg:grid-cols-4 grid-cols-1 gap-3">
                    {lessons.map(lesson => (
                        <LessonCard key={lesson._id} lesson={lesson} />
                    ))}
                </div>
            )}

            {/* Pagination - Only show when not loading */}
            {!loading && lessons.length > 0 && (
                <div className="flex justify-center flex-wrap gap-3 py-10">
                    {currentPage > 0 && (
                        <button
                            onClick={() => setCurrentPage(currentPage - 1)}
                            className="btn bg-secondary text-white dark:bg-teal-700 dark:hover:bg-teal-600 dark:border-0"
                        >
                            Prev
                        </button>
                    )}

                    {[...Array(totalPage).keys()].map(i => (
                        <button
                            key={i}
                            onClick={() => setCurrentPage(i)}
                            className={`btn ${i === currentPage ? "bg-[#F69074] text-white dark:bg-[#F69074]" : "bg-secondary text-white dark:bg-teal-700 dark:hover:bg-teal-600"} dark:border-0`}
                        >
                            {i + 1}
                        </button>
                    ))}

                    {currentPage < totalPage - 1 && (
                        <button
                            onClick={() => setCurrentPage(currentPage + 1)}
                            className="btn bg-secondary text-white dark:bg-teal-700 dark:hover:bg-teal-600 dark:border-0"
                        >
                            Next
                        </button>
                    )}
                </div>
            )}

            {/* No results message - Only show when not loading and no lessons */}
            {!loading && lessons.length === 0 && (
                <div className="text-center py-16">
                    <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gray-100 dark:bg-gray-800 mb-6">
                        <span className="text-3xl">📝</span>
                    </div>
                    <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-3">
                        No Lessons Found
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 max-w-md mx-auto">
                        Try adjusting your filters or search to find what you're looking for.
                    </p>
                </div>
            )}
        </div>
    );
};

export default Lessons;