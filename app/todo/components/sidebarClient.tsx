import Link from "next/link"
import { redirect } from "next/navigation"
import React from "react"


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
        <div className="bg-[#84b5db]">
            <div className="bg-yellow-200 flex flex-1 py-2 px-5">
                <p>User data</p>
            </div>
            {/*  sidebar menu */}
            <div className="flex flex-col py-2">
                <MenuSidebarContainer>
                    <Link href="/todo">
                        <button type="button">Home</button>
                    </Link>
                </MenuSidebarContainer>
                <MenuSidebarContainer>
                    <button>Log-out</button>
                </MenuSidebarContainer>
            </div>
        </div>
    )
}