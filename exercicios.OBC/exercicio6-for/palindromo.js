const word = prompt("Informe uma palavra:")
let wordInverter = ""

for (let i = word.length - 1; i >= 0; i--) {
    wordInverter += word[i]
}

if (word === wordInverter) {
    alert (word + " é um palíndromo!")
} else {
    alert(
        word + " não é um palíndromo!\n\n" +
        word + " !== " + wordInverter
    )
}