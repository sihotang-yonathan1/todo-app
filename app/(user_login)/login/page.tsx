import { cookies } from "next/headers";
import LoginPageComponent from "./LoginPage";

export default function Page(){
    const user_id = cookies().get('userId')?.value || -1
    return (
        <LoginPageComponent user_id={user_id}/>
    )
}