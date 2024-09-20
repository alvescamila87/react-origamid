import React from "react";

const madalena = {
    nome: "Madalena",
    idade: 36,
    compras: [
        { item: 'Tênis', preco: 'R$ 2500' },
        { item: 'T-shirt', preco: 'R$ 500' },
        { item: 'Calça', preco: 'R$ 1200' },        
        { item: 'Bolsa', preco: 'R$ 2300' },        
        { item: 'Jaqueta', preco: 'R$ 1100' },        
    ],
    ativa: true,
}

const zebedeu = {
    nome: 'Zebedeu',
    idade: 30,
    compras: [
        { item: 'Game', preco: 'R$ 250'},
        { item: 'Notebook', preco: 'R$ 18000'},
        { item: 'Headset', preco: 'R$ 1200'},
        { item: 'Mochila', preco: 'R$ 800'},
        { item: 'Mousepad', preco: 'R$ 150'},
    ],
    ativa: false,
}

export default function dados() {

    const dados = zebedeu;

    const total = dados.compras
        .map(compra => Number(compra.preco.replace("R$ ", '')))
        .reduce((a, b) => a + b);
    console.log(total)

    return (
        <div>
            <p>Nome: {dados.nome}</p>    
            <p>Idade: {dados.idade}</p>
            <p>Situação:{' '} 
                <span style={{color: dados.ativa ? 'green' : 'red' }}>{dados.ativa ? 'Ativa' : 'Inativa'}</span>               
            </p> 
            <p>Total de gastos R$: {total}</p>
            <p>{total > 10000 ? 'Você está gastando muito!' : ''}</p>
            <p>{total > 10000 && 'Você está gastando muito!'}</p>
            {total > 10000 && <p>Você está gastando muito!</p>}
        </div>
    )
}