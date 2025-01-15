'use client'

import { setIsSidebarCollapsed } from '../../state/index';
import { useAppDispatch, useAppSelector } from '@/redux';
import { Archive, CircleDollarSign, Clipboard, Layout, Menu, SlidersHorizontal, User } from 'lucide-react';
import SidebarLink from '../SidebarLink';
import React from 'react';

const SideBar = () => {
    const dispatch = useAppDispatch();
    const isSidebarCollapsed = useAppSelector(
        (state) => state.global.isSidebarCollapsed
    );

    const toggleSidebar = () => {
        dispatch(setIsSidebarCollapsed(!isSidebarCollapsed));
    };

    const sidebarClassNames =`fixed flex flex-col ${isSidebarCollapsed ? 'w-0 md:w-16' : 'w-72 md:w-64'} bg-white transition-all duration-300 overflow-hidden h-full shadow-md z-40`;

    return (
        <div className={sidebarClassNames}>
            {/* TOP LOGO */}
            <div className={`flex gap-3 justify-between md:justify-normal items-center pt-8 ${isSidebarCollapsed ? 'px-5' : 'px-8'}`}>
                <div className="flex items-center">Logo</div>
                <h1 className={`${isSidebarCollapsed ? 'hidden' : 'block'} font-extrabold text-2xl`}>JayStore</h1>
                <button onClick ={toggleSidebar} className="md:hidden px-3 py-3 bg-gray-100 rounded-full hover:bg-blue-100">
                    <Menu className='w-4 h-4' />
                </button>
            </div>

            {/* LINKS */}
            <div className="flex-grow mt-8">
                <SidebarLink href='./dashboard' label='Dashboard' icon={Layout} isCollapsed={isSidebarCollapsed} />
                <SidebarLink href='./inventory' label='Inventory' icon={Archive} isCollapsed={isSidebarCollapsed} />
                <SidebarLink href='./products' label='Prouduct' icon={Clipboard} isCollapsed={isSidebarCollapsed} />
                <SidebarLink href='./users' label='Users' icon={User} isCollapsed={isSidebarCollapsed} />
                <SidebarLink href='./settings' label='Settings' icon={SlidersHorizontal} isCollapsed={isSidebarCollapsed} />
                <SidebarLink href='./expenses' label='Expenses' icon={CircleDollarSign} isCollapsed={isSidebarCollapsed} />
            </div>

            {/* FOOTER */}
            <div className={`${isSidebarCollapsed ? 'hidden' : "block"} mb-10`}>
                <p className="text-center text-xs text-gray-500">&copy; 2025 JayStore</p>
            </div>
        </div>
    );
};

export default SideBar;
