// TabBar.js
"use client"
// TabBar.js
import React, { useState } from 'react';
import { useRouter } from "next/navigation";
import Linker from './linker/page';
import Orders from './orders/page';
import Profile from './profile/page';
const TabBar = () => {
    const [activeTab, setActiveTab] = useState(1);
  const router = useRouter();

    const handleTabClick = (tabNumber) => {
        setActiveTab(tabNumber);
        switch (tabNumber) {
            case 1:
                window.history.pushState({}, '', '/dashboard/linker');
                break;
            case 2:
                window.history.pushState({}, '', '/dashboard/orders');
                break;
            case 3:
                window.history.pushState({}, '', '/dashboard/profile');
                break;
            default:
                break;
        }
    };

    return (
        <div className="max-w-4xl mx-auto my-8">
            <div className="flex justify-between bg-gray-200 p-4 rounded-md ">
                <div
                    onClick={() => handleTabClick(1)}
                    className={`cursor-pointer p-2 rounded-md ${activeTab === 1 ? 'bg-blue-500 text-white' : 'bg-gray-300 text-gray-700'}`}
                >
                    
                    Get Link
                </div>
                <div
                    onClick={() => handleTabClick(2)}
                    className={`cursor-pointer p-2 rounded-md ${activeTab === 2 ? 'bg-blue-500 text-white' : 'bg-gray-300 text-gray-700'}`}
                >
                    Orders
                </div>
                <div
                    onClick={() => handleTabClick(3)}
                    className={`cursor-pointer p-2 rounded-md ${activeTab === 3 ? 'bg-blue-500 text-white' : 'bg-gray-300 text-gray-700'}`}
                >
                    Profile
                </div>
            </div>
            <div>
                {activeTab==1 &&<Linker/>}
                {activeTab==2 &&<Orders/>}
                {activeTab==3 &&<Profile/>}
            </div>
        </div>
    );
};

export default TabBar;
