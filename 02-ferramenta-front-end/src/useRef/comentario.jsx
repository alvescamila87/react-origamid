import React, { useState, useRef } from 'react'

const Comentario = () => {
    const [comentarios, setComentarios] = useState([]);
    const [input, setInput] = useState('');
    const inputElement = useRef();

    function handleClick() {
        setComentarios([...comentarios, input]);
        setInput('');
        inputElement.current.focus();
    }

    return (
        <div>
            <ul>
                {comentarios.map((comentario, index) => (
                    <li key={index}>{comentario}</li>
                ))}                
            </ul>
            <input 
                type="text" 
                ref={inputElement}
                value={input} 
                onChange={(e) => setInput(e.target.value)}                
            />
            <br />
            <button 
                onClick={handleClick}
            >Enviar comentário                
            </button>
        </div>
    )
}

export default Comentario
