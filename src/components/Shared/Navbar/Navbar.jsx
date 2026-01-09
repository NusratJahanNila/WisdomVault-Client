import Container from '../Container'
import { AiOutlineMenu } from 'react-icons/ai'
import { useEffect, useState } from 'react'
import { Link, NavLink } from 'react-router'
import useAuth from '../../../hooks/useAuth'
import avatarImg from '../../../assets/avater.png'
import logo from '../../../assets/WisdomVault.png'
import useRole from '../../../hooks/useRole'
import { Sun, Moon } from 'lucide-react' // Added theme icons

const Navbar = () => {
    const { user, logOut } = useAuth();
    const { userData } = useRole();
    const [isOpen, setIsOpen] = useState(false)

    // theme
    const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");
    useEffect(() => {
        const html = document.querySelector("html");
        html.setAttribute("data-theme", theme);
        localStorage.setItem("theme", theme);
    }, [theme]);
    
    const handleTheme = (checked) => {
        setTheme(checked ? "dark" : "light");
    };

    // Close dropdown when clicking outside
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (isOpen && !event.target.closest('.dropdown-container')) {
                setIsOpen(false);
            }
        };
        document.addEventListener('click', handleClickOutside);
        return () => document.removeEventListener('click', handleClickOutside);
    }, [isOpen]);

    // routes
    const links = <>
        <li>
            <NavLink to={'/'} className={({ isActive }) =>
                `font-medium  text-lg ${isActive ? 'text-[#F69074] dark:text-[#F69074] font-semibold' : 'text-[#02a2a2] dark:text-white hover:text-[#02a2a2] dark:hover:text-[#A0EBEB]'}`
            }>Home</NavLink>
        </li>
        {
            user && <>
                <li>
                    <NavLink to={'/dashboard/add-lesson'} className={({ isActive }) =>
                        `font-medium text-lg ${isActive ? 'text-[#F69074] dark:text-[#F69074] font-semibold' : 'text-[#02a2a2] dark:text-white hover:text-[#02a2a2] dark:hover:text-[#A0EBEB]'}`
                    }>Add Lesson</NavLink>
                </li>
                <li>
                    <NavLink to={'/dashboard/my-lessons'} className={({ isActive }) =>
                        `font-medium text-lg ${isActive ? 'text-[#F69074] dark:text-[#F69074] font-semibold' : 'text-[#02a2a2] dark:text-white hover:text-[#02a2a2] dark:hover:text-[#A0EBEB]'}`
                    }>My Lessons</NavLink>
                </li>
            </>
        }
        <li>
            <NavLink to={'/public-lessons'} className={({ isActive }) =>
                `font-medium text-lg ${isActive ? 'text-[#F69074] dark:text-[#F69074] font-semibold' : 'text-[#02a2a2] dark:text-white hover:text-[#02a2a2] dark:hover:text-[#A0EBEB]'}`
            }>Public Lessons</NavLink>
        </li>

        {
            user && !userData?.isPremium && 
            <li>
                <NavLink to={'/payment'} className={({ isActive }) =>
                    `font-medium text-lg ${isActive ? 'text-[#F69074] dark:text-[#F69074] font-semibold' : 'text-[#02a2a2] dark:text-white hover:text-[#02a2a2] dark:hover:text-[#A0EBEB]'}`
                }>
                    <span className="flex items-center gap-1">
                        ⭐ Upgrade
                    </span>
                </NavLink>
            </li>
        }
    </>

    return (
        <div className="fixed top-0 left-0 w-full bg-white shadow-sm z-50 dark:bg-gray-900 dark:border-b-2 dark:border-[#F69074] transition-colors duration-300">
            <Container>
                <div className="navbar py-3">
                    <div className="navbar-start">
                        {/* Mobile Menu Button */}
                        <div className="dropdown dropdown-container">
                            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
                                </svg>
                            </div>
                            <ul
                                tabIndex={0}
                                className="menu menu-sm dropdown-content bg-white dark:bg-gray-800 rounded-box z-100 mt-3 w-52 p-2 shadow-lg border border-gray-200 dark:border-gray-700">
                                {links}
                            </ul>
                        </div>
                        
                        {/* Logo */}
                        <Link to={'/'} className='flex gap-2 items-center'>
                            <img src={logo} alt="WisdomVault Logo" className='w-10 h-10' />
                            <span className={'font-bold text-xl text-[#02a2a2] dark:text-white'}>
                                Wisdom<span className='text-[#F69074] dark:text-[#F69074]'>Vault</span>
                            </span>
                        </Link>
                    </div>
                    
                    {/* Desktop Navigation */}
                    <div className="navbar-center hidden lg:flex">
                        <ul className="menu menu-horizontal px-1 gap-4">
                            {links}
                        </ul>
                    </div>
                    
                    <div className="navbar-end">
                        {/* Theme Toggle for Desktop */}
                        <div className="hidden lg:flex items-center mr-4">
                            <label className="swap swap-rotate">
                                <input 
                                    type="checkbox" 
                                    checked={theme === "dark"}
                                    onChange={(e) => handleTheme(e.target.checked)}
                                    className="theme-controller" 
                                />
                                <Sun className="swap-on fill-current w-5 h-5 text-[#F69074]" />
                                <Moon className="swap-off fill-current w-5 h-5 text-[#02a2a2]" />
                            </label>
                        </div>

                        {user ? (
                            <>
                                {/* Profile Dropdown */}
                                <div className="relative dropdown-container">
                                    {/* Trigger */}
                                    <button
                                        onClick={() => setIsOpen(!isOpen)}
                                        className="flex items-center gap-2 p-1.5 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-200 border border-transparent hover:border-gray-200 dark:hover:border-gray-700"
                                    >
                                        <img
                                            className="h-9 w-9 rounded-full object-cover border-2 border-white dark:border-gray-700"
                                            referrerPolicy="no-referrer"
                                            src={user?.photoURL || avatarImg}
                                            alt="profile"
                                        />
                                        <AiOutlineMenu className="text-lg text-gray-600 dark:text-gray-400" />
                                    </button>

                                    {/* Dropdown */}
                                    {isOpen && (
                                        <div className="absolute right-0 mt-2 w-56 rounded-lg bg-white dark:bg-gray-800 shadow-xl border border-gray-200 dark:border-gray-700 overflow-hidden z-50">
                                            {/* User Info */}
                                            <div className="px-4 py-3 border-b border-gray-100 dark:border-gray-700 bg-gray-50 dark:bg-gray-900/50">
                                                <p className="font-semibold text-gray-800 dark:text-white truncate">
                                                    {user?.displayName || "Anonymous User"}
                                                </p>
                                                <p className="text-sm text-gray-500 dark:text-gray-400 truncate">
                                                    {user?.email}
                                                </p>
                                                {userData?.isPremium && (
                                                    <span className="inline-block mt-1 px-2 py-0.5 text-xs bg-linear-to-r from-[#EDBC98] to-[#F69074] text-white rounded-full">
                                                        ⭐ Premium
                                                    </span>
                                                )}
                                            </div>

                                            {/* Menu Items */}
                                            <div className="py-2">
                                                <Link
                                                    to="/dashboard/profile"
                                                    className="flex items-center gap-3 px-4 py-3 hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300 transition-colors"
                                                    onClick={() => setIsOpen(false)}
                                                >
                                                    <div className="w-8 h-8 rounded-full bg-[#02a2a2]/10 dark:bg-[#A0EBEB]/10 flex items-center justify-center">
                                                        <span className="text-[#02a2a2] dark:text-[#A0EBEB]">👤</span>
                                                    </div>
                                                    <span className="font-medium">Profile</span>
                                                </Link>

                                                <Link
                                                    to="/dashboard"
                                                    className="flex items-center gap-3 px-4 py-3 hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300 transition-colors"
                                                    onClick={() => setIsOpen(false)}
                                                >
                                                    <div className="w-8 h-8 rounded-full bg-[#F69074]/10 dark:bg-[#F69074]/10 flex items-center justify-center">
                                                        <span className="text-[#F69074]">📊</span>
                                                    </div>
                                                    <span className="font-medium">Dashboard</span>
                                                </Link>

                                                {/* Mobile Theme Toggle */}
                                                <div className="lg:hidden px-4 py-3 border-t border-gray-100 dark:border-gray-700">
                                                    <div className="flex items-center justify-between">
                                                        <div className="flex items-center gap-3">
                                                            <div className="w-8 h-8 rounded-full bg-gray-100 dark:bg-gray-700 flex items-center justify-center">
                                                                {theme === "dark" ? 
                                                                    <Moon className="w-4 h-4 text-[#02a2a2]" /> : 
                                                                    <Sun className="w-4 h-4 text-[#F69074]" />
                                                                }
                                                            </div>
                                                            <span className="font-medium text-gray-700 dark:text-gray-300">Theme</span>
                                                        </div>
                                                        <input
                                                            type="checkbox"
                                                            checked={theme === "dark"}
                                                            onChange={(e) => handleTheme(e.target.checked)}
                                                            className="toggle toggle-sm"
                                                        />
                                                    </div>
                                                </div>

                                                <button
                                                    onClick={() => {
                                                        logOut();
                                                        setIsOpen(false);
                                                    }}
                                                    className="flex items-center gap-3 w-full px-4 py-3 hover:bg-red-50 dark:hover:bg-red-900/20 text-red-600 dark:text-red-400 transition-colors border-t border-gray-100 dark:border-gray-700 mt-2"
                                                >
                                                    <div className="w-8 h-8 rounded-full bg-red-100 dark:bg-red-900/30 flex items-center justify-center">
                                                        <span>🚪</span>
                                                    </div>
                                                    <span className="font-medium">Logout</span>
                                                </button>
                                            </div>
                                        </div>
                                    )}
                                </div>
                            </>
                        ) : (
                            <div className='flex items-center gap-3'>
                                {/* Theme Toggle for logged out users */}
                                <div className="hidden lg:flex items-center">
                                    <label className="swap swap-rotate">
                                        <input 
                                            type="checkbox" 
                                            checked={theme === "dark"}
                                            onChange={(e) => handleTheme(e.target.checked)}
                                            className="theme-controller" 
                                        />
                                        <Sun className="swap-on fill-current w-5 h-5 text-[#F69074]" />
                                        <Moon className="swap-off fill-current w-5 h-5 text-[#02a2a2]" />
                                    </label>
                                </div>
                                
                                <div className='flex gap-2'>
                                    <Link
                                        to='/login'
                                        className='btn btn-outline border-[#02a2a2] text-[#02a2a2] hover:bg-[#02a2a2] hover:text-white dark:border-[#A0EBEB] dark:text-[#A0EBEB] dark:hover:bg-[#02A2A2] dark:hover:text-white'
                                    >
                                        Login
                                    </Link>
                                    <Link
                                        to='/signup'
                                        className='btn bg-[#F69074] border-[#F69074] text-white hover:bg-[#F69074]/90 dark:bg-[#F69074] dark:hover:bg-[#F69074]/90'
                                    >
                                        Sign Up
                                    </Link>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default Navbar