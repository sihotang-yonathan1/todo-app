import React from "react";

export default function TodoAppLayout({children}: {children: React.ReactNode}){
    return (
        <div className="bg-slate-300 min-h-screen flex flex-col items-center justify-center">
            {children}
        </div>
    )
}