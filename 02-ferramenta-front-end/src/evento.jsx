import React from "react";

const Evento = () => {

    function handleClick(event) {
        console.log(event.target)
    }

    function handleScroll(event2) {
        console.log(event2)
    }

    window.addEventListener('scroll', handleScroll);
    return (
        <div>
            <div>
                <button onClick={handleClick}>Clique 1</button>
            </div>
            <div>
                <button onClick={() => console.log(event.target)}>Clique 2</button>
            </div>
            <div style={{height: '200vh'}}>
                <button onClick={(event2) => alert(event2.target.innerText)}>Cique 3 - Scroll</button>
            </div>
        </div>
    )
}

export default Evento