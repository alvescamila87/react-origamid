import React from "react";

const Arrays1 = () => {
    const produtos = ['Tablet ', 'Smartphone ', 'Notebook']
    const produtosKey = [<li key="e1">Roupas</li>, <li key="e2">Blusas</li>]
    const filmes = ['Esqueceram de mim', 'Forest Gump', 'Curtindo a vida adoidado']
    const objetos = ['Tênis', 'Luvas', 'Capacete', 'Bola']
    const livros = [
        { nome: 'O poder do hábito', ano: 2020 },
        { nome: 'Hábitos atômicos', ano: 2021 },
        { nome: 'Dom Casmurro', ano: 1860 },
    ]

    return (
        <div>
        <h4>Produtos em Array simples:</h4>
            {produtos}
        <h4>Produtos em Array li:</h4>
            {produtosKey}
        <h4>Filmes em Array map e key:</h4>  
        <ul>
            {filmes.map(filme => <li key={filme}>{filme}</li>)}
        </ul>
        <h4>Objetos em Array map e key:</h4>  
        <ul>
            {objetos.map(objeto => <li key={objeto}>{objeto}</li>)}
        </ul>
        <h4>Livros em Array map, key e filter:</h4> 
        <ul>
            {livros.map(livro => <li key={livro.nome}>{livro.nome} - Ano: {livro.ano}</li>)}
        </ul>
        <h4>Livros: Lista desestruturada no map</h4> 
        <ul>
            {livros.map(({nome, ano}) => <li key={nome}>{nome} - {ano}</li>)}
        </ul>
        <h4>Livros: Lista desestruturada no map, com filter</h4> 
        <ul>
            {livros
                .filter(({ano}) => ano >= 2021)
                .map(({nome, ano}) => (
                    <li key={nome}>{nome} - {ano}</li>
                ))}
        </ul>
        <h4>Livros: Lista desestruturada no map, com filter 2</h4> 
        <ul>
            {livros
                .filter(livro => livro.ano >= 2020)
                .map(({nome, ano}) => ( <li key={nome}>{nome} - {ano}</li>))}
        </ul>
        </div>
    )
}

export default Arrays1