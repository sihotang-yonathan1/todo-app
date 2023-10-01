export default function Uppersidebar(){
    return (
        <div className="flex flex-row rounded gap-1 px-1 py-2 bg-yellow-300">
            {/* User Photo */}
            <div className="px-2 bg-slate-500 rounded-full">
                <p>Image</p>
            </div>
            {/* User info */}
            <div className="flex flex-col">
                <h3 className="font-semibold text-sm">User Name</h3>
                <p className="italic text-xs">User description</p>
            </div>
        </div>
    )
}