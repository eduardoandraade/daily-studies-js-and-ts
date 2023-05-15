const arr = [
   "1º Nível",
   ["2º Nível", 42, true],
   [
    ["3º Nível, 1º item", "Olá, mundo!"],
    ["3º Nível, 2º item", "Hello, World!"]
   ],
   []
]

console.log(arr)
console.log(arr[0])
console.log(arr[1])
console.log(arr[1] [0])
console.log(arr[1] [1])
console.log(arr[2])
console.log(arr[2] [1])
console.log(arr[2] [1] [0])

const matriz = [
    ["l1, c1", "l1, c2", "l1, c3", "l1, c4"],
    ["l2, c1", "l2, c2", "l2, c3", "l2, c4"],
    ["l3, c1", "l3, c2", "l3, c3", "l3, c4"]
]



// matriz.push(["Nova linha"])
// matriz[0].push("Nova coluna")

for (let i = 0; i < matriz.length; i++) {
    for (let j = 0; j < matriz[i].length; j++) {
        const elemento = matriz[i][j]
        console.log("Posição: (" + i + ", " + j + ") Valor: " + elemento)
    }
    console.log(matriz[i])
}

let matriz1 = [ [ 0, 1, 2, 3, 4 ], [ 5, 6, 7, 8, 9 ], [ 10, 11, 12, 13, 14 ], [ 15, 16, 17, 18, 19 ], 20 ]
console.log(matriz1[4] [1])