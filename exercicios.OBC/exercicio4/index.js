const turista = prompt("Fala Turista! Qual é o seu nome?");
let cidades = "";
let contagem = 0;

let continuar = prompt("Você visitou alguma cidade? (Sim/Não)");

while (continuar === "Sim") {
    let cidade = prompt("Qual o nome da cidade visitada?");
    // cidades = cidades + ...
    cidades += " - " + cidade + "\n"
    contagem++
    continuar = prompt("Você visitou alguma outra cidade? (Sim/Não)");
}

alert(
    "Turista: " + turista +
    "\nQuantidade de cidades visitadas: " + contagem +
    "\nCidades visitadas:\n" + cidades
)