import Link from "next/link"

function SidebarMenuContainer({name, url}: {name: string, url: string}){
    return (
        <div className="hover:bg-[#84DBD6] hover:text-slate-200 py-1 text-left border-2 my-1 mx-1
        px-1">
            <Link href={url}>
                <button type="button">{name}</button>
            </Link>
        </div>
    )
}

export default function Sidebar(){
    const sidebar_menu_list = [
        {
            'id': 0,
            'name': 'Home',
            'url': '#'
        },
        {
            'id': 1,
            'name': 'Logout',
            'url': '/login'
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
                        />
                    )    
                )}
            </div>
        </div>
    )
}