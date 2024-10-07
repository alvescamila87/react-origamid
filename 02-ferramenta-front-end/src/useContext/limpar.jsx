import React from "react";
import { GlobalContext2 } from "./globalContex2";

export const Limpar = () => {

    // acessar informações de global que foram exportadas
    const {limparDados} = React.useContext(GlobalContext2);
    console.log(limparDados)

    return (
        <div>
            <button onClick={limparDados}>Limpar</button>
        </div>
    )
}