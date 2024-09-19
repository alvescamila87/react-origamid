const menu = {
    selector: '.principal'
}


// acesso a propriedade
console.log(menu.selector)

console.log(menu.selector.toUpperCase())

// function
function upperName(name){
    return name.toUpperCase()
}

console.log("Nome: ", upperName('Camila'));

//arrow function

const lowerName = (name) => {
    return name.toLowerCase()
}

console.log(lowerName('Madalena'));

// desestrutruração

function handleMouse(event) {
    const x = event.clientX;
    console.log("Click do mouse na tela: ", x)

    const { clientX, clientY } = event;
    console.log("Desestruturação: ", clientX, clientY)
}

document.addEventListener('click', handleMouse)

// desestruturaão de react hooks

const frutas = ['banana', 'uva']
const [fruta1, fruta2] = frutas;

console.log(fruta2);

// rest e spread

function showList(empresa, clientes){
    clientes.forEach(cliente => {
        console.log(cliente, empresa)
    })
}

// colocar dentro do array através de ...
showList('Google', ['Zebedeu', 'Tobias'])

function showList2(empresa, ...clientes){
    clientes.forEach(cliente => {
        console.log(cliente, empresa)
    })
}

showList2('Google', 'Zebedeu', 'Tobias', 'Item 4')