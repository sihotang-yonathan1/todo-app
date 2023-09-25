import { IoSearchOutline} from "react-icons/io5";
export default function Searchcar({placeholder = "Search Here"}: {placeholder?: string}){
    return (
        <div className="rounded flex flex-row bg-white mt-1 mb-1">
            <div className="self-center pl-2 pr-2">
                <IoSearchOutline/>
            </div>
            <input
                type="text"
                placeholder={placeholder}
                className="hover:outline-none focus:outline-none"
            />
        </div>
    )
}