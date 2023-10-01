import React from "react";
import { Header } from "./components/header";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import SidebarPage from "./components/sidebar";

export default function TodoAppLayout({children}: {children: React.ReactNode}){
    return (
        <div className="flex flex-row">
            <SidebarPage />
            <div className="flex flex-col flex-grow bg-[#EE4E34]">
                <Header/>
                {/* Content Container */} 
                <div className="bg-[#e79183] h-screen flex flex-col items-center justify-center max-h-full">
                    {children}
                </div>
            </div>
        </div>
    )
}