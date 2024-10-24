import './App.css';
import styled from 'styled-components';
import { Title } from './cssImport/Title';
import { Produto } from './cssModules/components/Produto';
import { useState } from 'react';

type ParagrafoProps = {
  corFundo: string,
}

type AdicionarProps = {
  ativo: boolean;
}
const Titulo = styled.h1`
  font-size: 3rem;
  color: #e248d8;
`;

const Paragrafo = styled.p<ParagrafoProps>`
  color: blue;
  font-size: 1rem;
  background-color: ${({ corFundo }) => corFundo};
`;

const Adicionar = styled.button<AdicionarProps>`
  background-color: ${({ ativo }) => (ativo ? '#000' : '#48a10e')};
  font-size: 1rem;
  border: 2px solid #000;
  border-radius: 5px;
  padding: 0.5rem;
  color: ${({ ativo }) => (ativo ? '#48a10e' : '#000')};
  cursor: pointer;
  &:hover{
    background-color: tomato;
  }
`;


function App() {

  const [ativo, setAtivo] = useState(false);

  function handleClick() {
    setAtivo(!ativo)
  }

  return (
    <>
      <h3>css Import</h3>
      <div className="container">
        <Title />
      </div>
      <h3>css Modules</h3>
      <Produto />
      <h3>css Styled components</h3>
      <Titulo>Styled Components Title</Titulo>
      <Paragrafo corFundo={"#faee0a"}>Learning about application styled components</Paragrafo>
      <Adicionar ativo={ativo} onClick={handleClick}>Adicionar itens</Adicionar>
      <h3>css Frameworks</h3>
    </>

  )
}

export default App
