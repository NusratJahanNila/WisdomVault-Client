import React from 'react';
import { NavLink } from 'react-router';
import { LuNotebookPen } from "react-icons/lu";
import { FaHeart, FaListAlt, FaUser, FaUserCog, FaUsers } from "react-icons/fa";
import { IoHome } from "react-icons/io5";
import { MdDashboard, MdReportProblem } from "react-icons/md";
import useRole from '../../hooks/useRole';

const Sidebar = () => {
    const { userData } = useRole();

    return (
    <div className='space-y-2.5'>
        <li>
            <NavLink
                to={'/'}
                className={({ isActive }) => `is-drawer-close:tooltip is-drawer-close:tooltip-right ${isActive ? 'text-[#02A2A2]' : 'text-[#F69074]'}`}
                data-tip="Home">
                {/* icon */}
                <IoHome className='font-bold' />
                <span className="is-drawer-close:hidden">Home</span>
            </NavLink>
        </li>
        <li>
            <NavLink
                to={'/dashboard'}
                className={({ isActive }) => `is-drawer-close:tooltip is-drawer-close:tooltip-right ${isActive ? 'text-[#02A2A2]' : 'text-[#F69074]'}`}
                data-tip="Dashboard">
                {/* icon */}
                <MdDashboard className='font-bold' />
                <span className="is-drawer-close:hidden">Dashboard</span>
            </NavLink>
        </li>
        {
            userData?.role === "user" && <>
                {/* add lesson */}
                <li>
                    <NavLink
                        to={'/dashboard/add-lesson'}
                        className={({ isActive }) => `is-drawer-close:tooltip is-drawer-close:tooltip-right ${isActive ? 'text-[#02A2A2]' : 'text-[#F69074]'}`}
                        data-tip="Add Lesson">
                        {/* icon */}
                        <LuNotebookPen className='font-bold' />
                        <span className="is-drawer-close:hidden">Add Lesson</span>
                    </NavLink>
                </li>
                {/* my lesson */}
                <li>
                    <NavLink
                        to={'/dashboard/my-lessons'}
                        className={({ isActive }) => `is-drawer-close:tooltip is-drawer-close:tooltip-right ${isActive ? 'text-[#02A2A2]' : 'text-[#F69074]'}`}
                        data-tip="My Lesson">
                        {/* icon */}
                        <FaListAlt />
                        <span className="is-drawer-close:hidden">My Lesson</span>
                    </NavLink>
                </li>
                {/* my fav */}
                <li>
                    <NavLink
                        to={'/dashboard/my-favorites'}
                        className={({ isActive }) => `is-drawer-close:tooltip is-drawer-close:tooltip-right ${isActive ? 'text-[#02A2A2]' : 'text-[#F69074]'}`}
                        data-tip="My Favorites">
                        {/* icon */}
                        <FaHeart />
                        <span className="is-drawer-close:hidden">My Favorites</span>
                    </NavLink>
                </li>
            </>
        }

        {
            userData?.role === "admin" && <>
                {/* manage user */}
                <li>
                    <NavLink
                        to={'/dashboard/manage-users'}
                        className={({ isActive }) => `is-drawer-close:tooltip is-drawer-close:tooltip-right ${isActive ? 'text-[#02A2A2]' : 'text-[#F69074]'}`}
                        data-tip="Manage Users">
                        {/* icon */}
                        <FaUsers />
                        <span className="is-drawer-close:hidden">Manage Users</span>
                    </NavLink>
                </li>
                {/* manage lesson */}
                <li>
                    <NavLink
                        to={'/dashboard/manage-lessons'}
                        className={({ isActive }) => `is-drawer-close:tooltip is-drawer-close:tooltip-right ${isActive ? 'text-[#02A2A2]' : 'text-[#F69074]'}`}
                        data-tip="Manage Lessons">
                        {/* icon */}
                        <FaUserCog />
                        <span className="is-drawer-close:hidden">Manage Lessons</span>
                    </NavLink>
                </li>
                {/* reported lesson */}
                <li>
                    <NavLink
                        to={'/dashboard/reported-lessons'}
                        className={({ isActive }) => `is-drawer-close:tooltip is-drawer-close:tooltip-right ${isActive ? 'text-[#02A2A2]' : 'text-[#F69074]'}`}
                        data-tip="Reported Lessons">
                        {/* icon */}
                        <MdReportProblem />
                        <span className="is-drawer-close:hidden">Reported Lessons</span>
                    </NavLink>
                </li>
            </>
        }
        <li>
            <NavLink
                to={'/dashboard/profile'}
                className={({ isActive }) => `is-drawer-close:tooltip is-drawer-close:tooltip-right ${isActive ? 'text-[#02A2A2]' : 'text-[#F69074]'}`}
                data-tip="Profile">
                {/* icon */}
                <FaUser className='font-bold' />
                <span className="is-drawer-close:hidden">Profile</span>
            </NavLink>
        </li>
    </div>
);
};

export default Sidebar;