function dobro(x) {
    alert ("O dobro de " + x + " é " + (x*2))
}

// dobro(5)
// dobro(7)
// dobro()

function dizerOla(nome = "mundo") {
    alert("Olá, " + nome + "!")
}

// dizerOla("Dudu")
// dizerOla()


function soma(a, b) {
    alert("O resultado da soma é " + (a + b))
}

// soma (7, 6)
// soma (1, 1)

function criarUsuario(nome, email, senha, tipo = "admin") {
   const usuario = {
    nome,
    email,
    senha,
    tipo
 }

 console.log(usuario)
}



function muitosParametos(nome, telefone, endereco, aniversario, email, senha) {
    // ...
}

function objetoComoParametro(usuario) {
    // ...
    usuario.nome
    usuario.email
    usuario.telefone
}

muitosParametos("nome", "endereco", "aniversario", "email", "senha")

const dadosDoUsuario = {
    nome: "",
    telefone: "",
    email: "",
    senha: "",
    endereco: "",
    aniversario: ""
}

objetoComoParametro(dadosDoUsuario)

console.log(objetoComoParametro)