function calcularMedia(a, b) {
    const media = (a + b) / 2
    return media
}

const resultado = calcularMedia(7, 2)

console.log(resultado)

function criarProduto(nome, preco) {
    const produto = {
        nome,
        preco,
    }
    return produto
}

// console.log(criarProduto("Notebook Intel Core i3 8gb", 2500))

function areaRetangular(base, altura) {
    return base * altura
}

function areaQuadrada(lado) {
    return areaRetangular(lado, lado)
}

// console.log(areaRetangular(7, 3))
// console.log(areaQuadrada(5))