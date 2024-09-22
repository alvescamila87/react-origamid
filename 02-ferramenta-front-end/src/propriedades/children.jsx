import React from "react";

const Children = (props) => {
    return (
        <div> {props.children}
            <h1>{props.titulo}</h1>
            <h2>{props.subtitulo}</h2>
            <p>{props.descricao}</p>
            Isso é o children
            <p>Teste</p>
        </div>
    )
}

export default Children