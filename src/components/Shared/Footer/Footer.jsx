import React from 'react';
import logo from '../../../assets/WisdomVault.png'
import { Link } from 'react-router';
import {
  Github,
  Facebook,
  Linkedin
} from 'lucide-react';
const Footer = () => {
    return (
        <footer className="footer sm:footer-horizontal bg-base-300 text-base-content p-10 dark:bg-gray-900 dark:border-t dark:border-gray-800">
            <nav className="dark:text-gray-300">
                <img src={logo} alt="" className='w-20' />
                <h2 className='text-secondary font-bold text-2xl dark:text-teal-400'>Wisdom<span className='text-[#F69074] dark:text-[#F69074]'>Vault</span></h2>
            </nav>
            <nav className="dark:text-gray-300">
                <h6 className="footer-title dark:text-gray-200">Services</h6>
                <Link to={"/dashboard/add-lesson"} className="link link-hover dark:text-gray-400 dark:hover:text-teal-400">Add Lessons</Link>
                <Link to={"/public-lessons"} className="link link-hover dark:text-gray-400 dark:hover:text-teal-400">Public Lesson</Link>
                <Link to={"/payment"} className="link link-hover dark:text-gray-400 dark:hover:text-teal-400">Upgrade</Link>
            </nav>
            <nav className="dark:text-gray-300">
                <h6 className="footer-title dark:text-gray-200">Terms of use</h6>
                <Link to={"/about"} className="link link-hover dark:text-gray-400 dark:hover:text-teal-400">About us</Link>
                <Link to={"/contact"} className="link link-hover dark:text-gray-400 dark:hover:text-teal-400">Contact</Link>
                <Link to={"/help"} className="link link-hover dark:text-gray-400 dark:hover:text-teal-400">Help</Link>
            </nav>
            <nav className="dark:text-gray-300">
                <h6 className="footer-title dark:text-gray-200">Social</h6>
                <div className="grid grid-flow-col gap-4">
                    <Link to='https://github.com/NusratJahanNila' className="dark:text-gray-400 dark:hover:text-teal-400">
                        <Github/>
                    </Link>
                    <Link to='https://www.linkedin.com/in/nusrat-jahan-web' className="dark:text-gray-400 dark:hover:text-teal-400">
                        <Linkedin/>
                    </Link>
                </div>
            </nav>
        </footer>
    );
};

export default Footer;