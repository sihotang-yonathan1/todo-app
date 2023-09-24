import React from "react";
import { Header } from "./components/header";

export default function TodoAppLayout({children}: {children: React.ReactNode}){
    return (
        <div className="flex flex-row">
            <div className="flex flex-col flex-grow bg-[#EE4E34]">
                <Header/>
                {/* Content Container */} 
                <div className="bg-[#e79183] min-h-screen flex flex-col items-center justify-center">
                    {children}
                </div>
            </div>
        </div>
    )
}