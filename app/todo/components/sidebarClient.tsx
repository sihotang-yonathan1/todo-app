import Link from "next/link"
import { redirect } from "next/navigation"


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

export default function Sidebar(){
    const sidebar_menu_list = [
        {
            'id': 0,
            'name': 'Home',
            'url': '#',
            'function': null,
            'has_function': false
        },
        {
            'id': 1,
            'name': 'Logout',
            'url': '/login',
            'function': LogoutMenu,
            'has_function': true
        }
    ]
    return (
        <div className="bg-[#84b5db]">
            <div className="bg-yellow-200 flex flex-1 py-2 px-2">
                <p>User data</p>
            </div>
            {/*  sidebar menu */}
            <div className="flex flex-col py-2">
                {sidebar_menu_list.map(
                    data => (
                        <SidebarMenuContainer
                            name={data.name}
                            url={data.url}
                            key={data.id}
                            clickFunction={data.function}
                            hasFunction={data.has_function}
                        />
                    )    
                )}
            </div>
        </div>
    )
}