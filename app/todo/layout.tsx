import React from "react";
import { Header } from "./components/header";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import SidebarPage from "./components/sidebar";
import { LayoutProvider } from "./layoutContext";

export default function TodoAppLayout({children}: {children: React.ReactNode}){
    return (
        <LayoutProvider>
            <div className="flex flex-row h-screen">
                <SidebarPage />
                <div className="flex flex-col flex-grow bg-[#EE4E34]">
                    <Header/>
                    {/* Content Container */} 
                    <div className="bg-[#e79183] flex flex-col items-center justify-center flex-1">
                        {children}
                    </div>
                </div>
            </div>
        </LayoutProvider>
    )
}