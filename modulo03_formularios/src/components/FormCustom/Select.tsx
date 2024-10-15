import { FC } from "react"

interface SelectProps {
    options: string[],
    value: string,
    setValue: (value: string) => void
}

const Select: FC<SelectProps> = (props) => {
    return (
        <select value={props.value} onChange={(e) => props.setValue(e.target.value)}>
            <option 
                value="" 
                disabled
            >Selecione...
            </option>
            {props.options.map((option, index) => (
                <option key={index} value={option}>{option}</option>
            )
            )}
        </select>
    )
}

export default Select