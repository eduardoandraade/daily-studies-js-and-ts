// Refatorando as promises do exercicio 24

async function imc(weight, height) {
        if (typeof weight !== 'number' || typeof height !== 'number')
            throw new Error('arguments must be of type number')
        else 
            return weight / (height * height)
}


async function showImc(weight, height) {
        try {
            const result = await imc(window,height)

            console.log(`O resultado do IMC foi de ${result}.`)

            if (result < 18.5) console.log('Situação: MAGREZA')
            else if (result < 25) console.log('Situação: NORMAL')
            else if (result < 30) console.log('Situação: SOBREPESO')
            else if (result < 40) console.log('Situação: OBESIDADE')
            else console.log('Situação: OBESIDADE GRAVE')
        } catch (error) {
            console.log(error.message)
        }

        console.log(`Calculando o IMC para peso ${weight} e ${height} `)
}

showImc(71, 1.74)
showImc(58, 1.64)
showImc(71, 'texto')
showImc(48, 1.72)
showImc(82, 1.50)
