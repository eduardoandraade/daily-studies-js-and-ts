
 function calcularVelocidades() { 
    const car1 = document.getElementById("car1");
    const car2 = document.getElementById("car2");
    const speed1 = document.getElementById("speed1").value;
    const speed2 = document.getElementById("speed2").value;
    let msg;

    if (speed1 > speed2) {
        msg = "Carro 01 é mais rápido!";
    } else if (speed2 > speed1) {
        msg = "Carro 02 é mais rápido!";
    } else {
        msg = "Os dois carros tem a mesma velocidade!";
    }

    document.getElementById("msg").innerHTML = msg;
    
} 

const atacante = prompt("Qual é o nome do personagem atacante?");
const poderDeAtaque = prompt("Qual é o seu poder de ataque?");

const defensor = prompt("Qual é o nome do personagem defensor?");
let pontosDeVida = prompt("Quantos pontos de vida ele possui?");
const poderDeDefesa = prompt("Qual é o seu poder de defesa?");
const escudo = prompt("Ele possui escudo?(Sim/Não)");

let danoCausado = 0;

if (poderDeAtaque > poderDeDefesa && escudo === "Não") {
    danoCausado = poderDeAtaque - poderDeDefesa
} else if (poderDeAtaque > poderDeAtaque && escudo === "Sim") {
    danoCausado = (poderDeAtaque - poderDeDefesa) / 2 
}

pontosDeVida = pontosDeVida - (danoCausado);

alert (atacante + " causou " + danoCausado + " pontos de dano em " + defensor);
alert (
    atacante + "\nPoder de ataque: " + poderDeAtaque + "\n\n" +
    defensor + "\nPontos de vida: " + pontosDeVida + 
    "\nPoder de defesa: " + poderDeDefesa + "\nPossui escudo: " + escudo
);



