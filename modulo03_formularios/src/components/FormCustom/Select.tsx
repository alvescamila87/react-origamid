import { FC } from "react"

interface SelectProps {
    options: string[],
    value: string,
    setValue: (value: string) => void
}

const Select: FC<SelectProps> = ({ options, value, setValue }) => {
    return (
        <select value={value} onChange={(e) => setValue(e.target.value)}>
            <option 
                value="" 
                disabled
            >Selecione...
            </option>
            {options.map((option, index) => (
                <option key={index} value={option}>{option}</option>
            )
            )}
        </select>
    )
}

export default Select