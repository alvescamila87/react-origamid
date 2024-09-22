import React from "react";

const produtos = [
    {
        id: 1,
        nome: 'Smartphone',
        preco: 'R$ 2500',
        cores: ['#29d8d5', '#252a34', '#fc3766'],
    },
    {
        id: 2,
        nome: 'Notebook',
        preco: 'R$ 3000',
        cores: ['#ffd045', '#d4394b', '#f37c59'],
    },
    {
        id: 3,
        nome: 'Tablet',
        preco: 'R$ 1500',
        cores: ['#365069', '#47c1c8', '#f95786'],
    }    
]

const Arrays2 = () => {

    const dados = produtos.filter(produto => Number(produto.preco.replace('R$ ', '')) > 1500)

    return (
        <div>
            <h1>Camila</h1>
            {dados.map(dado => (
                <>
                    <h1 key={dado.id}>{dado.nome}</h1>
                    <p>Preço: {dado.preco}</p>

                {dado.cores.map(cor => (
                    <ul key={cor} style={{background: cor, color: 'white'}}>{cor}</ul>
                ))}
                </>
            ))}
            <h1>Origamid</h1>
            <section>
                {dados.map(({id, nome, preco, cores}) => (
                    <div key={id}>
                        <h1>{nome}</h1>
                        <p>Preço: {preco}</p>
                        <ul>
                            {cores.map((cor) => (
                                <li 
                                    key={cor}
                                    style={{backgroundColor: cor, color: 'white'}}
                                >
                                {cor}
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </section>
            <h1>Produtos</h1>
            <div>
                {produtos
                    .filter(({preco}) => Number(preco.replace('R$ ', '')) > 1500)
                    .map(produto => (
                        <>
                            <h1 key={produto.id}>{produto.nome}</h1>
                            <p>Preço: {produto.preco}</p>
                            <ul>
                                {produto.cores.map((cor) => (
                                    <li style={{background: cor, color: 'white'}} key={cor}>{cor}</li>
                                ))}
                            </ul>
                        </>
                    ))}
            </div>
        </div>
    )
}

export default Arrays2