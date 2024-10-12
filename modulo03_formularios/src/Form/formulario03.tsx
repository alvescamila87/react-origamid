import { ChangeEvent, FormEvent, useState } from "react";

// faz só para o que é diferente
const formFields = [
  {
    id: "name",
    label: "Nome",
    type: "text",
  },
  {
    id: "email",
    label: "E-mail",
    type: "email",
  },
  {
    id: "password",
    label: "Senha",
    type: "password",
  },
  {
    id: "cep",
    label: "CEP",
    type: "text",
  },
  {
    id: "street",
    label: "Rua",
    type: "text",
  },
  {
    id: "number",
    label: "Número",
    type: "text",
  },
  {
    id: "neighbor",
    label: "Bairro",
    type: "text",
  },
  {
    id: "city",
    label: "Cidade",
    type: "text",
  },
  {
    id: "uf",
    label: "Estado",
    type: "text",
  },
];

export const Formulario03 = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    cep: "",
    street: "",
    number: "",
    neighbor: "",
    city: "",
    uf: "",
  });


  function handleChange(event: ChangeEvent<HTMLInputElement>) {
    const { id, value } = event.target;
    console.log(id, value);

    setForm({
      ...form,
      [id as keyof typeof form]: value,
    });
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    console.log(event);

    fetch("https://ranekapi.origamid.dev/json/api/usuario", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      })
        .then((response) => console.log(response))
  }

  return (
    <form onSubmit={handleSubmit}>
      {formFields.map(({ id, label, type }) => (
        <div key={id}>
          <label htmlFor={id}>{label}</label>
          <input
            type={type}
            name={label}
            id={id}
            value={form[id as keyof typeof form]}
            onChange={handleChange}
          />
        </div>
      ))}
      <button>Enviar</button>
    </form>
  );
};
