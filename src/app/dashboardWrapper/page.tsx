'use client'

import React, { useEffect } from 'react';
import Navbar from '../(components)/Navbar';
import SideBar from '../(components)/Sidebar';
import StoreProvider, { useAppSelector } from '@/redux';



const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
    const isSidebarCollapsed = useAppSelector((state) => state.global.isSidebarCollapsed);

    const isDarkMode = useAppSelector((state) => state.global.isDarkMode);

    useEffect(() => {
        if (isDarkMode) {
            document.body.classList.add('dark');
        } else {
            document.body.classList.add('light');
        }
    });
    return (
        <div className={`${isDarkMode ? 'dark' : 'light'} flex bg-gray-50 w-full min-h-screen`}>
            <SideBar />
            <main className={` flex flex-col bg-gray-50 w-full h-full py-7 px-9 ${isSidebarCollapsed ? 'md:pl-24' : 'md:pl-72'}`}>
                <Navbar />
                {children}
            </main>
        </div>
    )
}

const DashboardWrapper = ({ children }: { children: React.ReactNode }) => {
    return (
        <StoreProvider>
            <DashboardLayout>
                {children}
            </DashboardLayout>
        </StoreProvider>
    )
}

export default DashboardWrapper;
