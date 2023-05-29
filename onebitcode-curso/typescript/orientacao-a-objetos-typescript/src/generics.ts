interface Ship {
    name: string
    pilot: string
  }
  
  interface Fighter extends Ship {
    weapons: number
    shields: number
  }
  
  interface Transport extends Ship {
    capacity: number
  }
  
  interface Speeder extends Ship {
    speed: number
    acceleration: number
  }
  
  
  function cloneShip<ShipType extends Ship>(ship: ShipType, newName: string, newPilot: string) {
    const newShip = ship
    newShip.name = newName
    newShip.pilot = newPilot
    return newShip
  }
  
  const falcon: Ship = {
    name: 'Millenium Falcon',
    pilot: 'Han'
  }
  
  const xWing: Fighter = {
    name: 'Red Five',
    pilot: 'Luke',
    weapons: 4,
    shields: 1
  }
  
  // A cópia funciona, porém a tipagem está incorreta
  // pois a ambas é atribuido o tipo Ship
  const copy1 = cloneShip(falcon, 'Milano', 'Peter')
  const copy2 = cloneShip(xWing, 'Black One', 'Poe')

  interface EnemyShip {
    name: string
    pilot: string
    flag?: string
  }

  const enemyCopy = cloneShip(falcon, 'Enemy', 'Enemy')
  const enemyCopy2 = cloneShip<EnemyShip>(falcon, 'Enemy', 'Enemy')

  // aqui temos um erro por conta do tipo Ship
  // enemyCopy.flag = 'Imperial'
  // já aqui temos a propriedade opcional flag
  enemyCopy2.flag = 'Imperial'