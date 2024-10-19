import { ChangeEvent, useState } from "react";

const types = {
    cep: {
        regex: /^\d{5}-?\d{3}$/,
        message: 'CEP inválido'
    },
    email: {
        regex: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
        message: 'Email inválido',
    }
}

type TypeKeys = keyof typeof types | false; // Definir que 'type' só pode ser uma chave de 'types' // Allow 'false' to skip validation

//UseForm('CEP')
// types[type]
// types.cep

const useForm = (type: TypeKeys = false) => {
 
    const [value, setValue] = useState('');
    const [error, setError] = useState<string | null>(null); // Estado agora aceita string ou null

    function validate(value: string) {
        if(type === false) return true;
        if(value.length === 0) {
            setError("Preencha o valor para CEP");
            return false;
          } else if (types[type] && !types[type].regex.test(value)) {
            setError(types[type].message);
            return false;
          } else {
            setError(null);
            return true;
          }
    }

    function onChange({target}: ChangeEvent<HTMLInputElement>) {
        if(error) validate(target.value);
        setValue(target.value)
    }
    
    // expor funções para usar depois
    return {
        value,
        setValue,
        onChange,
        onBlur: () => validate(value),
        validate: () => validate(value),        
    }
}

export default useForm