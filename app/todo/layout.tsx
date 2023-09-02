import React from "react";

import { FiMenu, FiUser } from "react-icons/fi";

export default function TodoAppLayout({children}: {children: React.ReactNode}){
    return (
        <div>
            {/* Header */}
            <div className="flex flex-row px-2 py-1 items-center">
                {/* Left */}
                <div className="flex flex-row">
                    {/* TODO: open sidebar if clicked */}
                    <FiMenu />
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
    )
}