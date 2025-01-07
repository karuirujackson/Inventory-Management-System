import React from 'react';
import Navbar from '../(components)/Navbar';
import SideBar from '../(components)/Sidebar';

const DashboardWrapper = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className={`light flex bg-gray-50 w-full min-h-screen`}>
            <SideBar />
            <main className={` flex flex-col bg-gray-50 w-full h-full py-7 px-9 md:pl-24`}>
                <Navbar />
                {children}
            </main>
        </div>
    )
}

export default DashboardWrapper;
