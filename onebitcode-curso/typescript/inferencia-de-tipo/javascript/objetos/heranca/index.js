class Property {
    constructor(area, price) {
        this.area = area
        this.price = price
    }

    getPricePerSquareMeter() {
        return this.price / this.area
    }
}

class House extends Property { }

const land = new Property(200, 40000)
const someHouse = new House(120, 300000)

console.log(land)
console.log(someHouse)
console.log(someHouse instanceof Property)

class Apartament extends Property {
    // atributos
    constructor(number, area, price) {
        super(area, price)
        this.number = number
    }

    // metodos
    getFloor() {
        return this.number.slice(0, -2)
    }
}

const apt = new Apartament("1902", 100, 110000)

console.log(apt)
console.log(apt.getFloor())