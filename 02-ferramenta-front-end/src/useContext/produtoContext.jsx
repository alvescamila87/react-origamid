import React from 'react';
import UserContext from './userContext';

const ProdutoContext = () => {

    const dados  = React.useContext(UserContext);
    console.log("User context: ", dados)

  return (
    <div>{dados.nome}</div>
  )
}

export default ProdutoContext