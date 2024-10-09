import { ChangeEvent, FormEvent, useState } from "react";

export const Formulario02 = () => {

    const [form, setForm] = useState({
        name: "",
        email: "",
    });

    function handleSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();
        console.log(event);
    }

    function handleChange(event: ChangeEvent<HTMLInputElement>) {
        const { id, value } = event.target;
        console.log(id, value);

        setForm({ 
            ...form,
            [id]: value // id e value do input
        });
    }

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="name">Nome</label>
            <input type="text" name="name" id="name" value={form.name} onChange={handleChange}/>
            {/* {form.name} */}
            <label htmlFor="email">E-mail</label>
            <input type="email" name="email" id="email" value={form.email} onChange={handleChange}/>
            {/* {form.email} */}

            <button>Enviar</button>
        </form>
    )
}