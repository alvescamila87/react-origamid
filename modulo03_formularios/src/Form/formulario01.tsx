import { FormEvent, useState } from "react";

export const Formulario01 = () => {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    console.log(nome, event);
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="nome">Nome</label>
      <input
        type="text"
        name="nome"
        id="name"
        value={nome}
        onChange={(event) => setNome(event.target.value)}
      />
      <label htmlFor="email">E-mail</label>
      <input 
        type="email" 
        name="email" 
        id="email" 
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      {nome}
      {email}
      <button>Enviar</button>
    </form>
  );
};
