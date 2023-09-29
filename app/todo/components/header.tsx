import React from "react"
import { FiMenu, FiUser } from "react-icons/fi"

import Sidebar from "./sidebarClient";
import { ProfileButton } from "./header/ProfileButton";


export function Header(){
    return (
        // Header
        <header className="flex flex-row px-2 py-1 items-center justify-between">
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
            <div>
                <ProfileButton />
            </div>

        </header>
    )
}