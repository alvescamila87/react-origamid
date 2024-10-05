import React, { useMemo, useState } from 'react'

function operacaoLenta() {
    let c;
    for(let i = 0; i < 100000000; i++) {
        c = i + i / 10;
    }
    return c;
}


const Contagem = () => {

    const [contar, setContar] = useState(0);

    // const valor = useMemo(() => {
    //     const localItem = window.localStorage.getItem('produto');
    //     console.log('Aconteceu o memo');
    //     return localItem;
    // }, []);
    //console.log(valor);
    const t1 = performance.now();
    const valor = useMemo(() => operacaoLenta(), []);
    console.log(performance.now() - t1);

    return (
        <div>
            <button onClick={() => setContar(contar + 1)}>{contar}</button>
        </div>
    )
}

export default Contagem