import React, { useState, useRef } from "react";

export const Carrinho = () => {

    const [carrinho, setCarrinho] = useState(0);
    const [notificacao, setNotificacao] = useState(null);
    const timeoutRef = useRef();

    function handleClick() {
        setCarrinho(carrinho + 1);
        setNotificacao("Item adicionado com sucesso!");

        // set time out de referência única cada vez que é executado.
        clearTimeout(timeoutRef.current);
        timeoutRef.current = setTimeout(() => {
            setNotificacao(null);            
        }, 2000);
        console.log(timeoutRef.current)
    }

    return (
        <div>
            <p>{notificacao}</p>
            <button onClick={handleClick}>Adicionar carrinho {carrinho}</button>
        </div>
    )
}