import React from "react";

/**
 * Com desestruturação de props
 */
const Subtitulo = ({ descricao, cor }) => {
    return (
        <div>
            <h4 style={{color: cor}}>{descricao}</h4>
        </div>
    )
}

export default Subtitulo