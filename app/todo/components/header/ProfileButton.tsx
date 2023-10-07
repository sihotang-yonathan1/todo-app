"use client"

import { useContext } from "react"
import { FiUser } from "react-icons/fi"
import { LayoutContext } from "../../layoutContext"

export function ProfileButtonInfo(){
    const {userId} = useContext(LayoutContext)
    return (
        <div>
            <p>Profile Name</p>
            <div>
                <p>{userId}</p>
            </div>
        </div>
    )
}

export function ProfileButton(){
    return (
        <div>
            <button className=" bg-slate-500 rounded-full p-1">
                {/* TODO: change icon to user avatar if available */}
                <FiUser color="#efefef"/>
            </button>
        </div>
    )
}