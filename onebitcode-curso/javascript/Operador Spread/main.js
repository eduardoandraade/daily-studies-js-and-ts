const towns = ['Fortaleza', 'São Luis', 'Acopiara', 'Iguatu', 'Piquet']

console.log(towns)
console.log(...towns)
console.log(...towns[1])

const townsCopy = towns

townsCopy.pop()
townsCopy.pop()
townsCopy.push('Quixada')

console.log({ towns, townsCopy })

const townsClone = [...towns]

townsClone.push('Ascabam')

console.log({ towns, townsCopy, townsClone })

const townsObj = { ...towns }
const townsObjClone = { ...townsObj }

townsObjClone.test = 'testando'

console.log({ townsObj, townsObjClone })