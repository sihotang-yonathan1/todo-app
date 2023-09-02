"use client"

import Link from "next/link";
import { redirect } from "next/navigation";
import { useEffect, useState } from "react";

// TODO: set all config in one file
const API_CONFIG = {
    'host': 'localhost',
    'port': 3000
}

export default function LoginPage(){
    const [user_cred, setUserCredential] = useState({
        'username': '',
        'password': '',
        'is_authenticated': false
    })

    function handleLogin(event: any){
        fetch(`http://${API_CONFIG.host}:${API_CONFIG.port}/api/v1/login`, {
            method: "POST",
            body: JSON.stringify({
                'username': user_cred.username,
                'password': user_cred.password
            }),
            credentials: "include"
        })
        .then ( data => setUserCredential({...user_cred, 'is_authenticated': true}))
        .catch (err => console.error(err))
    }

    useEffect(() => {
        if (user_cred.is_authenticated){
            // TODO: user id in multiple page
            redirect('/todo')
        }
    }, [user_cred.is_authenticated])

    return (
        <div className="bg-slate-100 p-3 m-8">
            <div className="border-b-2">
                <div className="flex flex-col">
                    <p className="font-semibold text-center">Sign-In</p>
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
                        onChange={event => setUserCredential({
                            ...user_cred, 
                            'username': event.target.value
                        })}
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
                    />
                </div>

                {/* Submit button */}
                <div className="justify-center flex">
                    <button
                        type="submit"
                        className="bg-red-400 rounded p-2 my-2 text-white capitalize"
                        onClick={handleLogin}
                    >Login</button>
                </div>
            </div>

            {/* Create new account */}
            <div className="flex flex-col items-center my-2">
                <Link href="/register">
                    <button
                        type="button"
                        className="bg-green-500 p-2 border rounded text-white"
                    >Create New Account</button>
                </Link>
            </div>
        </div>
    )
}