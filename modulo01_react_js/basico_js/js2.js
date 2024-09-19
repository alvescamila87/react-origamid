//fetch 1
fetch('https://fakestoreapi.com/products')
    .then(response => console.log(response))
    .catch(error => console.log(error))

// fetch 2 - parsear dados
fetch('https://fakestoreapi.com/products') // busco os dados
    .then(response => {
        console.log(response)
        return response.json() // retorna resposta parseada, response.json() - (um array de objetos)
    })
    .then(products => console.log(products)) // exibiu o valor da promisse resolvida (um array de objetos)
    .catch(error => console.log(error))

fetch('https://fakestoreapi.com/products')
    .then(response => {
        console.log(response)
        return response.json()
    })
    .then(products => {
        console.log(products)
    })
    .catch(error => console.log(error))


// asyn await

async function fetchProdutos(url) {
    const response = await fetch(url)
    const json = await response.json();
    console.log('JSON: ', json)
    return json
}

const produtos = fetchProdutos('https://fakestoreapi.com/products')

console.log("PROMISSE: ", produtos) // retorn promisse




