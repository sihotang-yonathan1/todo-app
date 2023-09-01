export default function LoginPage(){
    return (
        <div className="bg-slate-100 p-3 m-8">
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
                />
            </div>

            {/* Submit button */}
            <div className="justify-center flex">
                <button
                    type="submit"
                    className="bg-red-400 rounded p-2 my-2 text-white capitalize"
                >Login</button>
            </div>
        </div>
    )
}