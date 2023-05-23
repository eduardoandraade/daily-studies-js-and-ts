interface CelestialBody {
    name: string
    mass: number
}

interface Star extends CelestialBody {
    age: number
    planets: Planet[]
}

interface Planet extends CelestialBody {
    population: number
    createSatellite: (name: string) => void
}

let sun: Star = {
    name: "Sol",
    mass: 1.080 * ( 10 ** 30),
    age: 4.603 * (10 ** 9),
    planets: []
}

type Asteroid = CelestialBody & {
    size: number
}

class MilkyWayPlanet implements Planet {
    name: string
    mass: number
    population: number

    constructor(name: string, mass: number, population: number) {
        this.name = name
        this.mass = mass
        this.population = population
    }

    createSatellite(name: string) {
        // ...
    }
}

interface Planet {
    satellites?: string[]
}