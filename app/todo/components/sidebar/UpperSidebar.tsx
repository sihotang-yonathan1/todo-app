"use client"

import { useEffect, useState } from "react"

export default function Uppersidebar({user_id}: {user_id: string}){
    const [userInfo, setUserInfo] = useState({
        "username": "",
        "id": ""
    })
    useEffect(() => {
        const fetch_user_data = async () => {
            let data = await fetch(`http://localhost:3000/api/v1/users?user_id=${user_id}`)
            let data_json = await data.json()

            setUserInfo({
                ...userInfo,
                'username': data_json?.data?.username,
                'id': user_id
            })
        }
        fetch_user_data()
    }, [user_id, userInfo.id])
    return (
        <div className="flex flex-row rounded gap-1 px-1 py-2 bg-yellow-300">
            {/* User Photo */}
            <div className="px-2 bg-slate-500 rounded-full">
                <p>Image</p>
            </div>
            {/* User info */}
            <div className="flex flex-col">
                <h3 className="font-semibold text-sm capitalize">{userInfo?.username}</h3>
                <p className="italic text-xs">{user_id}</p>
            </div>
        </div>
    )
}