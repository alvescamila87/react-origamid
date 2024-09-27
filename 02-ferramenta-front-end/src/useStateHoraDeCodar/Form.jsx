import React, { useState } from 'react'

const Form = () => {

    const [nome, setNome] = useState('Marlene');    
    const [senha, setSenha] = useState('opa');
    
    console.log(`Usuário: ${nome}`)
    console.log(`Senha: ${senha}`)

    return (
        <div>
            <label htmlFor="nome">Nome</label>
            <input 
                type="text" 
                name="nome" 
                id="nome"
                onChange={(e) => setNome(e.target.value)}
                value={nome}                
            />
            <label htmlFor="senha">Senha</label>
            <input 
                type="text" 
                name="senha" 
                id="senha"
                onChange={(e) => setSenha(e.target.value)} 
                value={senha}               
            />
        </div>
    )
}

export default Form