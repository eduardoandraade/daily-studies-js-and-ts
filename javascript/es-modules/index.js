import {  name, label, input, br } from "./funcitons.js"


console.log(name)
console.log(label({ for: 'fullname', textContent: 'Nome Completo'}))
console.log(input({ id: 'fullname', name: 'fullname', placeholder: 'Digite seu nome completo...'}))
console.log(br())
