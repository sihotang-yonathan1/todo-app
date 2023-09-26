import { Metadata } from "next";
import TodoPage from "./todo_page";
import { cookies } from "next/headers";

export const metadata: Metadata = {
    title: "Todo App"
}

export default function TodoPageHome(){
    const user_id = cookies().get('userId')?.value || -1
    return (
        <main>
            <TodoPage user_id={user_id}/>
        </main>
    )
}