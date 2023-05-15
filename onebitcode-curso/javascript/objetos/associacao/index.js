const Address = require("./Address");
const Person = require("./Person");

const addr = new Address("Cesar Cals", 1000, "Vicent Pizon", "Fortaleza", "CE")
const dudu = new Person("Eduardo Andrade", addr)

console.log(dudu)
console.log(dudu.address.fullAddress())