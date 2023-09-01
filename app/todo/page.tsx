import { Metadata } from "next";
import TodoPage from "./todo_page";

export const metadata: Metadata = {
    title: "Todo App"
}

export default function TodoPageHome(){
    return (
        <div>
            <TodoPage />
        </div>
    )
}