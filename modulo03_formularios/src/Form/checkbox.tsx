import { useState } from "react"

const Checkbox = () => {

    const [termos, setTermos ] = useState(false);
    return (
        <form>
            {termos && <p>Aceitou os termos!</p> }
            <label>
                <input type="checkbox" value="Termos" checked={termos} onChange={(e) => setTermos(e.target.checked)}/>Li e aceito os termos.
            </label>
        </form>
    )
}

export default Checkbox