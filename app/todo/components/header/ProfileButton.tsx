import { FiUser } from "react-icons/fi"

export function ProfileButtonInfo(){
    return (
        <div>
            <p>Profile Name</p>
            <div>
                <p>user_id</p>
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