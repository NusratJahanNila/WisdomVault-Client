import React from 'react';
import { Link } from 'react-router';
import { LuNotebookPen } from "react-icons/lu";
import { FaListAlt, FaUserCog } from "react-icons/fa";
import { IoHome } from "react-icons/io5";
const Sidebar = () => {
    return (
        <div className='space-y-2.5'>
            <li>
                <Link to={'/'} className="is-drawer-close:tooltip is-drawer-close:tooltip-right" data-tip="Home">
                    {/* icon */}
                    <IoHome  className='text-primary font-bold'/>
                    <span className="is-drawer-close:hidden">Home</span>
                </Link>
            </li>
            <li>
                <Link to={'/dashboard/add-lesson'} className="is-drawer-close:tooltip is-drawer-close:tooltip-right" data-tip="Add Lesson">
                    {/* icon */}
                    <LuNotebookPen  className='text-primary font-bold'/>
                    <span className="is-drawer-close:hidden">Add Lesson</span>
                </Link>
            </li>
            <li>
                <Link to={'/dashboard/my-lessons'} className="is-drawer-close:tooltip is-drawer-close:tooltip-right" data-tip="My Lesson">
                    {/* icon */}
                    <FaListAlt className='text-primary'/>
                    <span className="is-drawer-close:hidden">My Lesson</span>
                </Link>
            </li>
            <li>
                <Link to={'/dashboard/manage-users'} className="is-drawer-close:tooltip is-drawer-close:tooltip-right" data-tip="Manage Users">
                    {/* icon */}
                    <FaUserCog className='text-primary'/>
                    <span className="is-drawer-close:hidden">Manage Users</span>
                </Link>
            </li>
        </div>
    );
};

export default Sidebar;