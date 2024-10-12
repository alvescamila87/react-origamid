import { useState } from "react"

const Select = () => {

    const [select, setSelect] = useState('');

    return (
        <form>
            <select 
                id="produtos" 
                value={select}
                 onChange={(e) => setSelect(e.target.value)}
            >   
                <option disabled value="">Selecione...</option>
                <option value="notebook">Notebook</option>
                <option value="smartphone">Smartphone</option>
                <option value="tablet">Tablet</option>
            </select>
            {select}
        </form>
    )
}

export default Select