const entrada1 = window.prompt("Informe o seu primeiro número:")
const entrada2 = window.prompt("Informe o seu segundo número:")

const x = parseFloat(entrada1)
const y = parseFloat(entrada2)

const soma = x + y
const sub =  x - y
const mult = x * y
const div = x / y 

alert (
    "Resultados:\n" + 
    "\nSoma: " + soma + 
    "\nSubtração: " + sub + 
    "\nMultiplicação: " + mult + 
    "\nDivisão: " + div
)