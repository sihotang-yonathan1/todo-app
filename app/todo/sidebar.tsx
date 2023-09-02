export default function Sidebar(){
    return (
        <div className="p-2">
            <div className="bg-yellow-200 flex flex-1">
                <p>User data</p>
            </div>
            {/*  sidebar menu */}
            <div className="flex flex-col">
                <button type="button">
                    Home
                </button>
                
                <button type="button">
                    Login
                </button>

                <button type="button">
                    Log-out
                </button>
            </div>
        </div>
    )
}