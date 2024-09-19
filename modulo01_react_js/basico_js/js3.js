//filter: 

const precos = [
    'Crédito',
    'R$ 100',
    'R$ 200',
    'Débito',
    'R$ 170',
    'R$ 390',
];

// modo 1
// const precosFiltro = precos.filter(function (preco) {
//     //console.log(preco.includes('R$'));
//     return preco.includes('R$')
// })

// modo 2
const precosFiltro = precos.filter((preco) => 
    //console.log(preco.includes('R$'));
    preco.includes('R$')
)

console.log(precosFiltro)

// map: retorna uma nova array

const precosNumero = precosFiltro.map((preco) => Number(preco.replace('R$ ', '')))

console.log(precosNumero)

// operador ternário

const grupoA = 200
const grupoB = 500

const vencedor = grupoA > grupoB ? 'Grupo A vencedor' : 'Grupo B vencedor'

console.log(vencedor)