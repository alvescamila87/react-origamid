import { FC } from "react"

interface RadioProps {
    options: string[],
    value: string,
    setValue: (value: string) => void,
}

const Radio: FC<RadioProps> = ({options, value, setValue, ...props}) => {
    return (
        <>
            {options.map((option) => (
                <label key={option}>
                    <input 
                        type="radio" 
                        value={option} 
                        checked={value === option}
                        onChange={({target}) => setValue(target.value)}
                        {...props}
                        /> 
                        {option}
                </label>
            ))}

        </>
    )
}

export default Radio