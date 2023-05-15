// const listaDeCompras = ["Açucar", false]
// console.log(listaDeCompras)

//listaDeCompras[0] = "Arroz"
//listaDeCompras[1] = "Feijão"
//listaDeCompras[2] = 7
//listaDeCompras[5] = "Batata"

const arr = ["Frodo", "Sam", "Jerry", "Tom", "Pippin", "Gandolf", "Harry", "João", "Maria"]
console.log(arr)
// Adicionar Elementos 
// push -> add no final do array
let tamanho = arr.push("Isinha")
console.log(arr)
console.log(tamanho)

// unshit -> add no inicio do array
tamanho = arr.unshift("Nenem")
console.log(arr)
console.log(tamanho)

// Remover Elementos
// pop -> remove o ultimo elemento
let ultimoElemento = arr.pop()
console.log(arr)
console.log(ultimoElemento)

// shift -> remove o primeiro elemento
ultimoElemento = arr.shift()
console.log(arr)
console.log(ultimoElemento)


// Pesquisar por um elemento
// includes -> verifica se tem o elemento no array e retorna um valor boolean
const inclui = arr.includes("Sam")
console.log(inclui)

// indexOf -> diz o indice que o array está
const indice = arr.indexOf("Tom")
console.log(indice)

// Cortar e Concatenar
// slice -> do inglês é cortar [ como se copiasse uma parte do array que vc especificou e cola em outro lugar]
// slice não modifica o array ele faz tipo uma cópia para se ter mais segurança
const hobbits = arr.slice(0, 4)
const outros = arr.slice(-4)
console.log(arr)
console.log(hobbits)
console.log(outros)

// concat -> concatenar um array com outro pode tb adicionar mais coisas
const sociedade = hobbits.concat(outros, "Dudu")
console.log(sociedade)

// Substituição dos Elementos
// splice
const elementosRemovidos = sociedade.splice(indice, 1, "Tom e Jerry")
console.log(sociedade)
console.log(elementosRemovidos)

// Iterar sobre os elementos -> percorrer o array
// usando estruturas de repetição

for (let i = 0; i < sociedade.length; i++) {
    const elemento = sociedade[i]
    console.log(elemento + " se encontra na posição " + i)
}