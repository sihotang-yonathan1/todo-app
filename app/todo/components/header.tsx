import React from "react"
import { FiMenu, FiUser } from "react-icons/fi"

import Sidebar from "./sidebarClient";

export function Header(){
    return (
        // Header
        <div className="flex flex-row px-2 py-1 items-center">
            {/* Left */}
            <div className="flex flex-row">
                {/* TODO: open sidebar if clicked */}
                <button 
                    type="button"
                    // onClick={() => setSidebarVisible(!isSidebarVisible)}
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
    )
}