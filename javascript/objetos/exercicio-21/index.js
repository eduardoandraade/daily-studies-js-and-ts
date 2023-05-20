const Mage = require("./Mage");
const Thief = require("./Thief");
const Warrior = require("./Warrior");

const dudu = new Mage('Dudu', 90, 4, 2, 14)
const isa = new Thief('Isinha', 140, 22, 8)
const joe = new Warrior('Joe', 200, 14, 12, 4)

console.table({ dudu, isa, joe })

joe.switchStance()
dudu.attack(joe)
isa.attack(dudu)

console.table({ dudu, isa, joe })

joe.attack(dudu)

console.table({ dudu, isa, joe })

