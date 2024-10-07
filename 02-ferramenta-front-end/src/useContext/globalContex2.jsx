import React, {useEffect, useState} from "react";

// contexto global
export const GlobalContext2 = React.createContext();

export const GlobalStorage2 = ({ children }) => {
    //fetch de dado
    const [ dados, setDados ] = useState(null);

    useEffect(() => {
        fetch("https://ranekapi.origamid.dev/json/api/produto/")
            .then((response) => response.json())
            .then((json) => setDados(json))
    }, []);

    // funcao para limpar
    function limparDados() {
        setDados(null);
    }


    // passar as funções para value (é como se exportasse)
    return (
        <GlobalContext2.Provider value={{ dados, limparDados }}>
            {children}
        </GlobalContext2.Provider>
    )
}