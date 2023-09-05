"use client"

import React, { useState } from "react";

import Sidebar from "./components/sidebar";
import { Header } from "./components/header";

export default function TodoAppLayout({children}: {children: React.ReactNode}){
    const [isSidebarVisible, setSidebarVisible] = useState(false)

    return (
        <div className="flex flex-row">
            {/*  sidebar */}
            { isSidebarVisible && <Sidebar />}
            <div className="flex flex-col flex-grow bg-[#EE4E34]">
                <Header isSidebarVisible={isSidebarVisible} setSidebarVisible={setSidebarVisible}/>
                {/* Content Container */} 
                <div className="bg-[#e79183] min-h-screen flex flex-col items-center justify-center">
                    {children}
                </div>
            </div>
        </div>
    )
}