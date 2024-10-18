import { FC } from "react"

type CheckboxProps = {
    options: string[], // Tipagem explícita para as opções, um array de strings
    value: string[],  // Valores selecionados
    setValue: (value: string[]) => void, // Função para atualizar o estado dos valores selecionados
}

const Checkbox: FC<CheckboxProps> = ({options, value, setValue}) => {

    function handleChange({target}: React.ChangeEvent<HTMLInputElement>) {
        if(target.checked) {
            setValue([...value, target.value]); // Adiciona o valor selecionado
        } else {
            setValue(value.filter((itemValue) => itemValue != target.value)); // Remove o valor desmarcado
        }
    }

    return (
        <>
            {options.map((option) => (
                <label key={option}>
                    <input 
                        type="checkbox" 
                        value={option}
                        checked={value.includes(option)} // Define o estado checked
                        onChange={handleChange}
                    /> {option}
                </label>
            ))}
        </>
    )
}

export default Checkbox