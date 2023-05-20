type PlanetSituation = 'Habitado' | 'Habitável' | 'Inabitável' | 'Inexplorado'

type PlanetCoordiantes = [number, number, number, number]

type Planet = {
    name: string
    coordianetes: PlanetCoordiantes
    situation: PlanetSituation
    satellites: string[]
}

const planets: Planet[] = []

function addPlanet (name: string, coordianetes: PlanetCoordiantes, situation: PlanetSituation) {
    planets.push({
        name,
        coordianetes,
        situation,
        satellites: []
    })

    alert(`O planeta ${name} foi registrado com sucesso.`)
}

function findPlanet(name: string) {
    const planet = planets.find(planet => planet.name === name)

    return planet ?? false
}

function updateSituation(situation: PlanetSituation, planet: Planet) {
    planet.situation = situation
    alert(`A situação do planeta ${planet.name} foi atualizada para ${situation}.`)
}

function addSatellite(name: string, planet: Planet) {
    planet.satellites.push(name)

    alert(`O satélite ${name} foi adicionado ao planeta ${planet.name}.`)
}

function removeSatellite(name: string, planet: Planet) {
    planet.satellites = planet.satellites.filter(satellite => satellite !== name)

    alert(`O sátelite ${name} foi removido do planeta ${planet.name}.`)
}

function promptValidSituation() {
    let situation: PlanetSituation
    let validSituation = false

    while (!validSituation) {
        const situationInput = prompt("Informe a situação do planeta:\n1 - Habitado\n2 - Habitável\n3 - Inabitável\n4 - Inexplorado")

        switch (situationInput) {
            case "1":
                situation = "Habitado"
                validSituation = true
                break;
            case "2":
                situation = "Habitável"
                validSituation = true
                break;
            case "3":
                situation = "Inabitável"
                validSituation = true
                break;
            case "4":
                situation = "Inexplorado"
                validSituation = true
                break;
            default:
                alert("Situação inválida!")
                break;
        }
    }

    return situation
}

function promptValidPlanet(callbackfn: (planet: Planet) => void) {
    const planetName = prompt("Infomre o nome do planeta:")
    const planet = findPlanet(planetName)

    if(planet) {
        callbackfn(planet)
    } else {
        alert("Planeta não encontrado! Retornando ao menu...")
    }
}
    function firstMenuOption() {
        const name = prompt('Informe o nome do planeta:')
        const coordinateA = Number(prompt('Informe a primeira coordenada:'))
        const coordinateB = Number(prompt('Informe a segunda coordenada:'))
        const coordinateC = Number(prompt('Informe a terceira coordenada:'))
        const coordinateD = Number(prompt('Informe a quarta coordenada:'))

        const situation = promptValidSituation()

        const confirmation = confirm(`Confirma o registro do planeta ${name}?
        Coordenadas: (${coordinateA}, ${coordinateB}, ${coordinateC}, ${coordinateD})
        Situação: ${situation}`)

        if (confirmation) {
            addPlanet(name, [coordinateA, coordinateB, coordinateC, coordinateD], situation)
        }
    }

    function secondMenuOption() {
        promptValidPlanet(planet => {
            const situation = promptValidSituation()
            updateSituation(situation, planet)
        })
    }

    function thirdMenuOption() {
        promptValidPlanet(planet => {
            const satellite = prompt('Informe o nome do satélite a ser adicionado:')
            addSatellite(satellite, planet)
        })
    }

    function fourthMenuOption() {
        promptValidPlanet(planet => {
            const satellite = prompt('Informe o nome do satélite a ser removido:')
            removeSatellite(satellite, planet)
        })
    }

    function fifthMenuOption() {
        let list = 'Planetas:\n'

        planets.forEach(planet => {
            const [a, b, c, d] = planet.coordianetes

            list += `
                Nome: ${planet.name}
                Coordenadas: (${a}, ${b}, ${c}, ${d})
                Situação: ${planet.situation}
                Satélites: ${planet.satellites.length}
            `

            planet.satellites.forEach(satellite => {
                list += `      - ${satellite}\n`
            })
        })

        alert(list)
    }


    let userOption = 0

while (userOption !== 6) {
  const menu = `Menu
    1 - Registrar um novo planeta
    2 - Atualizar situação do planeta
    3 - Adicionar um satélite ao planeta
    4 - Remover um satélite do planeta
    5 - Lista todos os planetas
    6 - Sair
  `

  userOption = Number.parseInt(prompt(menu))

  switch (userOption) {
    case 1:
      firstMenuOption()
      break
    case 2:
      secondMenuOption()
      break
    case 3:
      thirdMenuOption()
      break
    case 4:
      fourthMenuOption()
      break
    case 5:
      fifthMenuOption()
      break
    case 6:
      alert('Encerrando o sistema...')
      break
    default:
      alert('Opção inválida! Retornando ao painel principal...')
      break;
  }
}