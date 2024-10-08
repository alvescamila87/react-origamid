import { useState } from "react";

export const Formulario01 = () => {
  const [nome, setNome] = useState("");

  return (
    <form action="">
      <label htmlFor="nome">Nome</label>
      <input
        type="text"
        name="nome"
        id="name"
        value={nome}
        onChange={(event) => setNome(event.target.value)}
      />
      {nome}
    </form>
  );
};
