import React, { FC } from "react"

interface InputProps {
    id: string,
    label: string,
    value: string,
    setValue: (value: string) => void
}

const Input: FC<InputProps> = ({id, label, value, setValue}) => {
    return (
        <>
            <label htmlFor={id}>{label}</label>
            <input 
                type="text" 
                name={id} 
                id={id}
                value={value}
                onChange={(e) => setValue(e.target.value)}                
            />
        </>
    )
}

export default Input