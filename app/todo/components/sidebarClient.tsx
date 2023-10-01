import Link from "next/link"
import { redirect } from "next/navigation"
import React from "react"
import Uppersidebar from "./sidebar/UpperSidebar"
import LowerSidebar from "./sidebar/LowerSidebar"


function LogoutMenu(){
    fetch(`/api/v1/logout`, {
        method: "POST"
    })
    // somehow the redirect is not working
    redirect('/login')
}

function SidebarMenuContainer({name, url, clickFunction, hasFunction}: {name: string, url: string, clickFunction: any, hasFunction: boolean}){
    return (
        <div className="hover:bg-[#84DBD6] hover:text-slate-200 py-1 text-left border-2 my-1 mx-1
        px-1">
            {hasFunction 
            ?
                <button type="button" onClick={clickFunction}>{name}</button>
            :
                <Link href={url}>
                    <button type="button">{name}</button>
                </Link> 

            }
        </div>
    )
}

function MenuSidebarContainer({children}: {children: React.ReactNode}){
    return (
        <div className="hover:bg-[#84DBD6] hover:text-slate-200 py-1 text-left border-2 my-1 mx-1
        px-1">
            {children}
        </div>
    )
}

export default function Sidebar(){
    return (
        <div className="bg-[#84b5db] flex flex-col">
            <Uppersidebar />
            {/*  sidebar menu */}
            <div className="flex flex-col py-2">
                <MenuSidebarContainer>
                    <Link href="/todo">
                        <button type="button">Home</button>
                    </Link>
                </MenuSidebarContainer>
            </div>
            <div className=" flex flex-col mt-auto border-t py-1 bg-orange-300 px-1">
                <LowerSidebar />
            </div>
        </div>
    )
}