import React from 'react';
import { GlobalContext } from './globalContext';

const ProdutoContext2 = () => {

  const global = React.useContext(GlobalContext);
  console.log(global);

  function handleClick() {
    global.setContar((contar) => contar + 1)
  }

  return (
    <div>
      ProdutoContext2: {global.contar}{' '}
      <button onClick={handleClick}>Add +1 onClick</button>{' '}
      <button onClick={() => global.adicionarUm()}>Add +1</button>{' '}
      <button onClick={() => global.adicionarDois()}>Add +2</button>
    </div>
  )
}

export default ProdutoContext2