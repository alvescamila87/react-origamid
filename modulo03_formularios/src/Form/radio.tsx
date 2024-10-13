import { ChangeEvent, useState } from "react"

const Radio = () => {

    const [radio, setRadio]  = useState('');
    const [cor, setCor] = useState('');

    function handleChange(e: ChangeEvent<HTMLInputElement>){
        setRadio(e.target.value);
        setCor(e.target.value);
    }

    return (
        <form>
            <h2>Produtos</h2>
            <label>
                <input 
                    type="radio" 
                    //name="produto" 
                    id="tablet"
                    value={"tablet"}
                    checked={radio === "tablet"}
                    onChange={handleChange}
                /> Tablet
            </label>
            <label>
                <input 
                    type="radio" 
                    //name="produto" 
                    id="notebook" 
                    value={"notebook"}
                    //checked={radio === "notebook"}
                    onChange={handleChange}
                /> Notebook
            </label>                  
            <label>
                <input 
                    type="radio" 
                    //name="produto"
                    id="smartphone"
                    value={"smartphone"}
                    checked={radio === "smartphone"}
                    onChange={handleChange}
                />Smartphone
            </label> 
            {radio} 
            <h2>Cores</h2>                
            <label>
                <input type="radio" name="cor" id="vermelho" value={"vermelho"} onChange={handleChange}/>Vermelho
            </label>
            <label>
                <input type="radio" name="cor" id="azul" value={"azul"} onChange={handleChange}/>Azul
            </label>
            <label>
                <input type="radio" name="cor" id="amarelo" value={"amarelo"} onChange={handleChange}/>Amarelo
            </label>
            {cor}
        </form>
    )
}

export default Radio