export function TextInput({label, name, type, ...props}: 
    {label: string, name: string, type: string}){
    const input_id = new Date().getTime.toString()
    return (
        <>
            <label htmlFor={input_id}>{label}</label>
            <input
                {...props}
                type={type}
                name={name}
                id={input_id}  
            />
        </>
    )
}