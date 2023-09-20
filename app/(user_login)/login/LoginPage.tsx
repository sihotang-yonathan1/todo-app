"use client"

import Link from "next/link";
import { redirect } from "next/navigation";
import { useEffect, useState } from "react";
import { API_CONFIG } from "../../config/config";

export default function LoginPage({user_id}: {user_id: string | number}){
    const [user_cred, setUserCredential] = useState({
        'username': '',
        'password': ''
    })
    const [loginStatus, setLoginStatus] = useState({
        'is_authenticated': false,
        'is_loading': true,
        'get_error': false
    })

    const [userId, setUserId] = useState(null)

    function handleLogin(event: any){
        fetch(`http://${API_CONFIG.host}:${API_CONFIG.port}/api/v1/login`, {
            method: "POST",
            body: JSON.stringify({
                'username': user_cred.username,
                'password': user_cred.password
            }),
            credentials: "include"
        })
        .then ( data => {
            setLoginStatus({...loginStatus, 'is_loading': false})
            return data.json()
        })
            .then(res =>{
                setUserId(res?.id)
                setLoginStatus({...loginStatus, 'is_authenticated': true})
            } )
        .catch (err => {
            setLoginStatus({...loginStatus, 'is_loading': false, 'get_error': true})
            console.error(err)
        })
    }

    useEffect(() => {
        if (loginStatus.is_authenticated){
            // TODO: user id in multiple page
            redirect('/todo')
        }
    }, [loginStatus.is_authenticated])

    return (
        <div className="bg-slate-100 p-3 m-8">
            <div className="border-b-2">
                <div className="flex flex-col">
                    <p className="font-semibold text-center">Sign-In</p>
                </div>
                {loginStatus.get_error &&
                    <div className="bg-red-400 text-white px-2 mx-3">
                        {/* TODO: add error icon */}
                        <p>Error Message</p>
                    </div>
                }

                {/* Username */}
                <div className="flex flex-col m-2">
                    <label htmlFor="login-username" className="capitalize">Username</label>
                    <input
                        type="text"
                        name="username"
                        id="login-username"
                        placeholder="Username"
                        className="rounded border px-2 py-1"
                        onChange={event => setUserCredential({
                            ...user_cred, 
                            'username': event.target.value
                        })}
                        maxLength={80}
                    />
                </div>

                {/* Password */}
                <div className="flex flex-col m-2">
                <label htmlFor="login-password" className="capitalize">Password</label>
                    <input
                        type="password"
                        name="password"
                        id="login-password"
                        placeholder="Password"
                        className="rounded border px-2 py-1"
                        onChange={event => setUserCredential({
                            ...user_cred,
                            'password': event.target.value
                        })}
                        maxLength={80}
                    />
                </div>

                {/* Submit button */}
                <div className="justify-center flex">
                    <button
                        type="submit"
                        className="
                        bg-red-400 rounded p-2 my-2 text-white capitalize
                        hover:bg-zinc-600 hover:text-slate-200
                        "
                        onClick={handleLogin}
                    >Login</button>
                </div>
            </div>

            {/* Create new account */}
            <div className="flex flex-col items-center my-2">
                <Link href="/register">
                    <button
                        type="button"
                        className="bg-green-500 p-2 border rounded text-white
                        hover:bg-green-800 hover:text-slate-100"
                    >Create New Account</button>
                </Link>
            </div>
        </div>
    )
}