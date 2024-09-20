import React from "react";
import Dados from "./dados";

const titulo = <h1>Título da página</h1>

const App = () => {

  const nome = "Camila"
  const ativo = false;

  function mostrarNome(sobrenome) {
    return "Marlene " + sobrenome
  }

  const carro = {
    marca: 'VW',
    modelo: 'Golf',
    rodas: '4'
  }

  const estiloP = {
    color: 'blue',
    fontSize: "2rem",
  }

  return (
    <> 
      <p style={estiloP}>JSX1</p>    
      {titulo}
      {mostrarNome('Theodora')}
      <p>{true ? 'Ativo' : 'Inativo'} - { 10 }</p>
      <p>{new Date().getFullYear()}</p>
      <p style={estiloP}>Informações do carro (objeto)</p>
      <p style={estiloP}>{carro.marca}</p>
      <p style={estiloP}>{carro.modelo}</p>
      <p style={estiloP}>{carro.rodas}</p>
      <p className={ativo ? 'ativo' : 'inativo'}>{nome}</p>

      <p style={estiloP}>JSX2</p>
      <Dados />
    </>
  )
}

export default App
