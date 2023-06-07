function execute() {
    // faz alguma coisa
    return new Promise((resolve, reject) => {
        console.log('A promise está sendo executada...')
        setTimeout(() => {
            if (false){
                reject(false)
            } else {
                console.log('Resolvendo a promise...')
                resolve(42)
            }
        }, 1000 * 2)
    })
}

execute().then((result) => {
    console.log(`A promise foi resolvida. O resultado foi: ${result}`)
}).catch((err) => {
    console.log(`A promise foi rejeitada! Motivo: ${err}`)
}).finally(() => {
    console.log('A promisse foi finalizada.')
})
