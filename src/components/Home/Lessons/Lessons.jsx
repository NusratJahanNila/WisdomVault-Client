import React, { useEffect, useState } from 'react';
import LessonCard from './LessonCard';
import axios from 'axios';
import { IoMdArrowDropdown } from "react-icons/io";

const Lessons = () => {
    const [lessons, setLessons] = useState([]);
    const [totalLesson, setTotalLessons] = useState(0);
    const [totalPage, setTotalPage] = useState(0);
    const [currentPage, setCurrentPage] = useState(0);
    const limit = 9;
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

            {/* Lessons */}
            <div className="grid md:grid-cols-3 grid-cols-1 gap-3">
                {lessons.map(lesson => (
                    <LessonCard key={lesson._id} lesson={lesson} />
                ))}
            </div>

            {/* Pagination */}
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
                        className={`btn ${i === currentPage ? "bg-primary text-white dark:bg-teal-600" : "bg-secondary text-white dark:bg-teal-700 dark:hover:bg-teal-600"} dark:border-0`}
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
        </div>
    );
};

export default Lessons;
