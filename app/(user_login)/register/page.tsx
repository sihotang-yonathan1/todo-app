"use client"

import Link from "next/link";
import { useState } from "react";
import { FiEyeOff, FiEye } from "react-icons/fi";
import { API_CONFIG } from "../../config/config";

export default function LoginPage(){
    const [user_data, setUserData] = useState({
        'username': '',
        'password': '',
        'is_authenticated': false
    })
    const [isPasswordVisible, setPasswordVisible] = useState(false)

    function handleLogin(event: any){
        fetch(`http://${API_CONFIG.host}:${API_CONFIG.port}/api/v1/login`, {
            method: "PUT",
            body: JSON.stringify({
                'username': user_data.username,
                'password': user_data.password
            }),
            credentials: "include"
        })
        .then ( data => setUserData({...user_data, 'is_authenticated': true}))
        .catch (err => console.error(err))
    }
    return (
        <div className="bg-slate-100 p-3 m-8 rounded">
            {/* Pre border */}
            <div className="border-b-2">
                <div className="flex flex-col">
                    <p className="font-semibold text-center">Sign-Up</p>
                </div>

                {/* Username */}
                <div className="flex flex-col m-2">
                    <label htmlFor="login-username" className="capitalize">Username</label>
                    <input 
                        type="text" 
                        name="username" 
                        id="login-username" 
                        placeholder="Username"
                        className="rounded border px-2 py-1"
                        onChange={event => setUserData({
                            ...user_data,
                            'username': event.target.value
                        })}
                    />
                </div>

                {/* Password */}
                <div className="flex flex-col m-2">
                    <label htmlFor="login-password" className="capitalize">Password</label>
                    <div className="flex flex-row border rounded">
                        <div className="flex mr-2 flex-grow min-w-0">
                            <input 
                                type={isPasswordVisible ? "text": "password"} 
                                name="password" 
                                id="login-password" 
                                placeholder="Password"
                                className="rounded border px-2 py-1 flex-1 min-w-0"
                                onChange={event => setUserData({
                                    ...user_data,
                                    'password': event.target.value
                                })}
                            />
                        </div>
                        
                        {/* Password visibility option */}
                        <div 
                            className="flex items-center bg-slate-200 px-2" 
                            onClick={() => setPasswordVisible(!isPasswordVisible)}
                        >
                            { isPasswordVisible ? <FiEye /> : <FiEyeOff />}
                        </div>
                    </div>
                </div>

                {/* Submit button */}
                <div className="justify-center flex">
                    <button
                        type="submit"
                        className="bg-red-400 rounded p-2 my-2 text-white capitalize border
                        active:bg-white active:text-red-400"
                        onClick={handleLogin}
                    >Register</button>
                </div>
            </div>
            {/* After bottom border */}
            <div className="flex flex-row justify-center gap-1 flex-wrap">
                <p className="text-center text-slate-400">Already an user?
                     
                </p>
                <Link 
                    href="/login" 
                    className="underline text-blue-400"
                >Login</Link>
            </div>
        </div>
    )
}