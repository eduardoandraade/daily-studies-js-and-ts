const spaceships = [];
function addSpaceship(name, pilot, crewLimit) {
    const spaceship = {
        name,
        pilot,
        crewLimit,
        crew: [],
        inMission: false
    };
    spaceships.push(spaceship);
    alert(`A nave ${spaceship.name} foi registrada!`);
}
function findSpaceship(name) {
    let spaceship;
    spaceship = spaceships.find(ship => ship.name === name);
    return spaceship;
}
function addCrewMember(member, spaceship) {
    if (spaceship.crew.length >= spaceship.crewLimit) {
        alert(`${member} não pode ser adicionado. Limite atingido.`);
    }
    else {
        spaceship.crew.push(member);
        alert(`${member} foi adicionado a tripulação da ${spaceship.name}`);
    }
}
function sendInMission(spaceship) {
    if (spaceship.inMission) {
        alert(`${spaceship.name} não pode ser enviada. Espaçonave já está em missão.`);
    }
    else if (spaceship.crew.length < Math.floor(spaceship.crewLimit / 3)) {
        alert(`${spaceship.name} não pode ser enviada. Tripulação insuficiente.`);
    }
    else {
        spaceship.inMission = true;
        alert(`${spaceship.name} foi enviada para missão!`);
    }
}
function firstMenuOption() {
    const name = prompt('Digite o nome da espaçonave:');
    const pilot = prompt(`Digite o nome do piloto da ${name}:`);
    const crewLimit = Number(prompt(`Quantos tripulantes a ${name} suporta?`));
    const confirmation = confirm(`COnfirma o registro da espaçonave ${name}\nPipolot: ${pilot}\nLimite da tripulação: ${crewLimit}`);
    if (confirmation) {
        addSpaceship(name, pilot, crewLimit);
    }
}
function secondMenuOption() {
    const member = prompt(`Qual é o nome do tripulante?`);
    const spaceshipName = prompt(`Para qual nave o ${member} deverá ser designado?`);
    const spaceship = findSpaceship(spaceshipName);
    if (spaceship) {
        const confirmation = confirm(`Confirma a inclusão de ${member} na tripulação da ${spaceship.name}?`);
        if (confirmation) {
            addCrewMember(member, spaceship);
        }
    }
}
function thirdMenuOption() {
    const spaceshipName = prompt('Qual é o nome da nave a ser enviada?');
    const spaceship = findSpaceship(spaceshipName);
    if (spaceship) {
        const confirmation = confirm(`Confirma o envio da ${spaceship.name} na missão?`);
        if (confirmation) {
            sendInMission(spaceship);
        }
    }
}
function fourthMenuOption() {
    let list = 'Naves Registradas:\n';
    spaceships.forEach((spaceship) => {
        list += `
            Espaçonave: ${spaceship.name}
            Piloto: ${spaceship.pilot}
            Em missão: ${spaceship.inMission ? 'Sim' : 'Não'}
            Tamanho máximo da tripulação: ${spaceship.crewLimit}
            Tripulantes: ${spaceship.crew.length}
        `;
        spaceship.crew.forEach(member => {
            list += `  - ${member}\n`;
        });
    });
    alert(list);
}
let userOption = 0;
while (userOption !== 5) {
    const menu = `Painel Principal
        1 - Registrar uma nova nave
        2 - Adicionar membro da tripulaçao
        3 - Enviar nave em missão
        4 - Listar naves registradas
        5 - Encerrar
    `;
    userOption = Number(prompt(menu));
    switch (userOption) {
        case 1:
            firstMenuOption();
            break;
        case 2:
            secondMenuOption();
            break;
        case 3:
            thirdMenuOption();
            break;
        case 4:
            fourthMenuOption();
            break;
        case 5:
            alert('Encerrando o sistema...');
        default:
            alert('Opção inválida! Retornando ao painel principal...');
            break;
    }
}
