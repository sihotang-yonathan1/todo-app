"use client"
import React, { useState } from "react";

import { FiMenu, FiUser } from "react-icons/fi";

export default function TodoAppLayout({children}: {children: React.ReactNode}){
    const [isSidebarVisible, setSidebarVisible] = useState(false)

    return (
        <div className="flex flex-row">
            {/*  sidebar */}
            { isSidebarVisible && <div className="p-2">
                <div className="bg-yellow-200 flex flex-1">
                    <p>User data</p>
                </div>
                {/*  sidebar menu */}
                <div className="flex flex-col">
                    <button type="button">
                        Home
                    </button>
                    
                    <button type="button">
                        Login
                    </button>

                    <button type="button">
                        Log-out
                    </button>
                </div>
            </div>
            }
            <div className="flex flex-col flex-grow">
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
                    <div className="ml-auto bg-slate-500 rounded-full p-1">
                        {/* TODO: change icon to user avatar if available */}
                        <FiUser color="#efefef"/>
                    </div>
                </div>
                {/* Content Container */}
                <div className="bg-slate-300 min-h-screen flex flex-col items-center justify-center">
                    {children}
                </div>
            </div>
        </div>
    )
}