import { ChangeEvent, useState } from "react";

const coresArray = ['azul', 'roxo', 'laranja', 'verde', 'vermelho', 'cinza'];

const CheckboxLabel = () => {

    const [cores, setCores] = useState(['vermelho']);
    
    function handleChange(event: ChangeEvent<HTMLInputElement>) {
        if(event.target.checked) {
            setCores([...cores, event.target.value])
        } else {
            setCores(cores.filter((cor) => {
                return cor != event.target.value;
            }))
        }        
    }

    // function checkColor(cor: string) {
    //     return cores.includes(cor);
    // }

    return (
        <form>
            {coresArray.map((cor, index) => 
                <label 
                    key={index}
                    style={{ textTransform: 'capitalize'}}
                >
                    <input 
                        type="checkbox" 
                        value={cor + index}
                        checked={cores.includes(cor + index)}
                        onChange={handleChange}
                    />
                    {cor}
                </label> 
            )}
        </form>
    )
}

export default CheckboxLabel