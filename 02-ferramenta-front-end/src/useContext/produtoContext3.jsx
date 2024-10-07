import React from 'react';
import { GlobalContext2 } from './globalContex2';

const ProdutoContext3 = () => {

  const global = React.useContext(GlobalContext2);
  console.log(global)
  if(global.dados === null) return null;
  // return <div>ProdutoContext3: {global.dados[0].nome}</div>
  return <div>ProdutoContext3: {global.dados.map((dado) => (
    <li key={dado.id}>{dado.nome}</li>
  ))}</div>
}

export default ProdutoContext3