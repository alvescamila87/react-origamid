import React from "react";
import Dados from "./jsx/dados";
import Arrays1 from "./jsx/arrays1";
import Arrays2 from "./jsx/arrays2";
import Evento from "./eventos/evento";
import Header from "./componentes/header";
import Footer from "./componentes/footer";
import Form from "./form/form";

const titulo = <h1>Título da página</h1>

const Teste = () => {
  const active = true;

  if(active) {
    return <p>Teste</p>
  } else {
    return null
  }

};

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
      {/* <p style={estiloP}>JSX 1</p>    
      {titulo}
      {mostrarNome('Theodora')}
      <p>{true ? 'Ativo' : 'Inativo'} - { 10 }</p>
      <p>{new Date().getFullYear()}</p>
      <p style={estiloP}>Informações do carro (objeto)</p>
      <p style={estiloP}>{carro.marca}</p>
      <p style={estiloP}>{carro.modelo}</p>
      <p style={estiloP}>{carro.rodas}</p>
      <p className={ativo ? 'ativo' : 'inativo'}>{nome}</p>

      <p style={estiloP}>JSX 2</p>
      <Dados />
      <p style={estiloP}>JSX 2 - Arrays</p>
      <Arrays1 />
      <p style={estiloP}>JSX 2 - Arrays</p>
      <Arrays2 />
      <p style={estiloP}>Eventos: onClick | handleClick </p>
      <Evento /> 
      <p style={estiloP}>Components</p>      */}

      <Teste />
      <Header />
      <Form />
      <Footer />
    </>
  )
}

export default App
