import { ChangeEvent, useState } from "react"

const CheckboxMultiplos = () => {

    const [cores, setCores ] = useState(['vermelho']);

    function handleChange(event: ChangeEvent<HTMLInputElement>) {
        // console.log(event)
        if(event.target.checked){
            setCores([...cores, event.target.value])
        } else {
            setCores(cores.filter((cor) => {
                //console.log(cor)
                return cor != event.target.value;
            }));
        }
    }

    function checkColor(cor: string) {
        return cores.includes(cor);
    }

    return (
        <form>            
            <label>
                <input 
                type="checkbox" 
                value="azul" 
                checked={checkColor('azul')} 
                onChange={handleChange}
                />Azul
            </label>
            <label>
                <input 
                type="checkbox" 
                value="vermelho" 
                checked={checkColor('vermelho')} 
                //checked={cores.includes('vermelho')}
                onChange={handleChange}
                />Vermelho
            </label>
        </form>
    )
}

export default CheckboxMultiplos