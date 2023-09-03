import Link from "next/link"

function SidebarMenuContainer({name, url}: {name: string, url: string}){
    return (
        <Link href={url}>
            <button type="button">{name}</button>
        </Link>
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
            'name': 'Login',
            'url': '#'
        },
        {
            'id': 2,
            'name': 'Logout',
            'url': '#'
        }
    ]
    return (
        <div className="p-2 bg-[#84b5db]">
            <div className="bg-yellow-200 flex flex-1">
                <p>User data</p>
            </div>
            {/*  sidebar menu */}
            <div className="flex flex-col">
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