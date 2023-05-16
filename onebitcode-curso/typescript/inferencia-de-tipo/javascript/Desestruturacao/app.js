const person = {
    name: "Dudu",
    job: "Free Surfer",
    parents: ["Mãe", "Pai"]
}

const name = person.name

const { job, parents } = person

console.log(name, job, parents)

// Arrays

const [ mother, father ] = parents

console.log(mother, father)

// -------

function createUser ({ name, job, parents }) { 
    const id = Math.floor(Math.random() * 9999)
    return {
        id,
        name,
        job,
        parents
    }
}

const dudu = createUser(person)

console.log(dudu)