import React from "react";
import { Header } from "./components/header";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export default function TodoAppLayout({children}: {children: React.ReactNode}){
    const cookie_list = cookies()

    if (!cookie_list.has('user_id')){
        redirect('/login')
    }
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