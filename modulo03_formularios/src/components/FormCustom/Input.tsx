import React, { FC } from "react"

interface InputProps {
    id: string,
    label: string,
    value: string,
    setValue: (value: string) => void
}

const Input: FC<InputProps> = (props) => {
    return (
        <>
            <label htmlFor={props.id}>{props.label}</label>
            <input 
                type="text" 
                name={props.id} 
                id={props.id}
                onChange={(e) => props.setValue(e.target.value)}
                {...props}
            />
        </>
    )
}

export default Input