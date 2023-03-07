
let dadosUsuario = function () {
    const primeiroNome = window.prompt("Digite o seu primeiro nome:");
    const sobrenome = window.prompt("Digite o seu sobrenome:");
    const stack = window.prompt("Qual é a sua stack?");
    const anoNascimento = window.prompt("Qual o ano do seu nascimento?");

    alert (
        "Usuario cadastrado com sucesso!\n" + 
        "\nNome completo: " + primeiroNome + " " + sobrenome + 
        "\nStack: " + stack + 
        "\nIdade: " + (2023 - anoNascimento)
    );

};

dadosUsuario();

