import React from "react";

export default function LoginLayout({children}: {children: React.ReactNode}){
    return (
        <div className="flex flex-col bg-blue-400 flex-grow min-h-screen 
        justify-center px-28">
            {children}
        </div>
    )
}