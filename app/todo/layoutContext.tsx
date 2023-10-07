"use client"
import { createContext, useContext, useState } from "react";

export const LayoutContext = createContext({
    'userId': -1,
    'setUserId': (e: any) => {}
})

export function LayoutProvider({children}: {children: React.ReactNode}){
    const [userId, setUserId] = useState(-1)
    return (
        <LayoutContext.Provider value={{ userId: userId, setUserId: setUserId}}>
            {children}
        </LayoutContext.Provider>
    )
}