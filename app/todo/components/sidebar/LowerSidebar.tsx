"use client"

import * as dotenv from 'dotenv'
import { useRouter } from 'next/navigation'
// This code using default xampp config that may not the same as other
// please change with your own configuration
dotenv.config()

export default function LowerSidebar(){
    const router = useRouter()
    return (
        <div>
            <button type="button" onClick={e => {
                const logOutFunction = async () => {
                    const response = await fetch(`http://localhost:3000/api/v1/logout`, {
                        method: "POST"
                    })
                    if (response.ok){
                        router.replace("/login")
                    }
                }
                logOutFunction()
            }}>Log-out</button>
        </div>
    )
}