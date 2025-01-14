'use client'

import { setSidebarCollapsed } from '@/app/state';
import { useAppDispatch, useAppSelector } from '@/redux';
import { Menu } from 'lucide-react';
import React from 'react'

const SideBar = () => {
    const dispatch = useAppDispatch();
    const isSidebarCollapsed =useAppSelector((state) => state.global.isDarkMode);

    const toggleSidebar = () => {
        dispatch(setSidebarCollapsed(!isSidebarCollapsed));
    };
    return (
        <div className='border border-r-gray-300'>
            {/* TOP LOGO */}
            <div className="flex gap-3 justify-between md:justify-normal items-center pt-8">
                <div className="flex items-center">Logo</div>
                <h1 className="font-extrabold text-2xl">JayStore</h1>
                <button className="md:hidden px-3 py-3 bg-gray-100 rounded-full hover:bg-blue-100" onClick={() => {}}>
                    <Menu className='w-4 h-4' />
                </button>
            </div>

            {/* LINKS */}
            <div className="flex-grow mt-8">
                <span>Links Here!</span>
            </div>

            {/* FOOTER */}
            <div>
                <p className="text-center text-xs text-gray-500">&copy; 2025 JayStore</p>
            </div>
        </div>
    )
}

export default SideBar;
