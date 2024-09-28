import React, {useEffect, useState} from 'react'

const Contador = () => {

    const [count, setCount] = useState(0);
    const [countB, setCountB] = useState(0);

    // utilização básica
    useEffect(() => {
        console.log("Roda a cada renderização")
    })

    // array de dependências
    useEffect(() => {
        console.log("Só roda ao incrementar valor!")
    }, [count])

    // array de dependências vazio (get API)
    useEffect(() => {
        console.log("Só executa uma vez!")
    }, [])

    return (
        <>
        <div>
            <button onClick={() => setCount((prevCount) => prevCount + 1)}>Renderizar</button>
            <p>{count}</p>
        </div>
        <div>
            <button onClick={() => setCountB((prevCountB) => prevCountB + 1)}>Renzerizar B</button>
            <p>{countB}</p>
        </div>
        </>
    )
}

export default Contador