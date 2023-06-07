function cloneShip(ship, newName, newPilot) {
    var newShip = ship;
    newShip.name = newName;
    newShip.pilot = newPilot;
    return newShip;
}
var falcon = {
    name: 'Millenium Falcon',
    pilot: 'Han'
};
var xWing = {
    name: 'Red Five',
    pilot: 'Luke',
    weapons: 4,
    shields: 1
};
// A cópia funciona, porém a tipagem está incorreta
// pois a ambas é atribuido o tipo Ship
var copy1 = cloneShip(falcon, 'Milano', 'Peter');
var copy2 = cloneShip(xWing, 'Black One', 'Poe');
var enemyCopy = cloneShip(falcon, 'Enemy', 'Enemy');
var enemyCopy2 = cloneShip(falcon, 'Enemy', 'Enemy');
// aqui temos um erro por conta do tipo Ship
// enemyCopy.flag = 'Imperial'
// já aqui temos a propriedade opcional flag
enemyCopy2.flag = 'Imperial';
