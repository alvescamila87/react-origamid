import React, {useEffect, useState} from 'react'

const Contador = () => {

    const [count, setCount] = useState(0);
    const [countB, setCountB] = useState(0);
    const [user, setUser] = useState();

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

    // clear function
    useEffect(() => {
        const timer = setTimeout(() => {
            console.log(`O incrementador foi alterado ${count} vezes.`)
        }, 2000);

        return () => {
            clearTimeout(timer);
        };

    }, [count])

    // fetch com useEffect (carregar dados de API)
    useEffect(() => {
        fetch("https://api.github.com/users/alvescamila87")
            .then((res) => res.json())
            .then((json) => setUser(json))
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
            {user && (<div>
                <p>Dados do usuário</p>
                <h1>Nome: {user.name}</h1>
                <p>
                    Site: <a href={user.blog}>{user.blog}</a>
                </p>
                <img src={user.avatar_url} />
            </div>)}
        </>
    )
}

export default Contador