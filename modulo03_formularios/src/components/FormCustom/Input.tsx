import React, { ChangeEvent, FC } from "react"

interface InputProps {
    id: string,
    label: string,
    value: string,
    setValue?: (value: string) => void
    type?: string, // Propriedade type opcional
    placeholder?: string, // Propriedade type opcional
    onBlur?: ({target}: ChangeEvent<HTMLInputElement>) => void,
    onChange?: (e: ChangeEvent<HTMLInputElement>) => void,
}

const Input: FC<InputProps> = ({ id, label, value, onChange, type, placeholder, onBlur }) => {
    return (
        <>
            <label htmlFor={id}>{label}</label>
            <input 
                type={type} // Propriedade type opcional
                name={id} 
                id={id}
                value={value}
                onChange={onChange}
                //onChange={(e) => setValue(e.target.value)}
                placeholder={placeholder} // Propriedade type opcional   
                onBlur={onBlur} // Propriedade type opcional
            />
        </>
    )
}

export default Input