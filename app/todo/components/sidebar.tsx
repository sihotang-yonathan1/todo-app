// import { cookies } from "next/headers";
import SidebarClient from "./sidebarClient";
// import { redirect } from "next/navigation";

export default function SidebarPage(){
    // const user_id = cookies().get('userId')
    // if (user_id?.value){
    //     return (
    //         <SidebarClient />
    //     )
    // }
    // redirect('/login')

    return (
        <SidebarClient />
    )
}