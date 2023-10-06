import { cookies } from "next/headers";
import SidebarClient from "./sidebarClient";
// import { redirect } from "next/navigation";

export default function SidebarPage(){
    const user_id = cookies().get('userId')?.value || "-1"
    // if (user_id?.value){
    //     return (
    //         <SidebarClient />
    //     )
    // }
    // redirect('/login')

    return (
        <SidebarClient  user_id={user_id}/>
    )
}