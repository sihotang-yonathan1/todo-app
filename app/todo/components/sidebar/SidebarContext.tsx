"use client"
import { createContext, useContext, useState } from "react";

export const SidebarContext = createContext({
    'userId': -1,
    'setUserId': (e: any) => {}
})

export function SidebarProvider({children}: {children: React.ReactNode}){
    const [userId, setUserId] = useState(-1)
    return (
        <SidebarContext.Provider value={{ userId: userId, setUserId: setUserId}}>
            {children}
        </SidebarContext.Provider>
    )
}