"use client"
import React, { useState } from "react";

import { FiMenu, FiUser } from "react-icons/fi";

import Sidebar from "./sidebar";

export default function TodoAppLayout({children}: {children: React.ReactNode}){
    const [isSidebarVisible, setSidebarVisible] = useState(false)

    return (
        <div className="flex flex-row">
            {/*  sidebar */}
            { isSidebarVisible && <Sidebar />}
            <div className="flex flex-col flex-grow bg-[#EE4E34]">
                {/* Header */}
                <div className="flex flex-row px-2 py-1 items-center">

                    {/* Left */}
                    <div className="flex flex-row">
                        {/* TODO: open sidebar if clicked */}
                        <button 
                            type="button"
                            onClick={() => setSidebarVisible(!isSidebarVisible)}
                        >
                            <FiMenu />
                        </button>
                    </div>

                    {/* Right */}
                    <div className="ml-auto">
                        <button className=" bg-slate-500 rounded-full p-1">
                            {/* TODO: change icon to user avatar if available */}
                            <FiUser color="#efefef"/>
                        </button>
                    </div>

                </div>
                {/* Content Container */} 
                <div className="bg-[#e79183] min-h-screen flex flex-col items-center justify-center">
                    {children}
                </div>
            </div>
        </div>
    )
}