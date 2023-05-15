const user = {
    name: "Dudu",
    email: "duduhiphop11@hotmail.com",
    friends: [{
        name: "Julio",
        address: {
            street: "Av. Pedro Alves / centro",
            number: 89
        }
    }],
    age: 25,
    phone: {
        countryCode: "+55",
        ddd: "85",
        number: "996759585"
    }
}

// console.log(user.friends[0].phone.ddd)
console.log(user.friends[0].phone?.ddd)
console.log(user?.brothers?.length)

console.log(user.brothers?.[5].name)