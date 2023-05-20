function waitfor(seconds) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve()
        }, seconds * 1000)
    })
}

const numbers = [4, 5, 9, 13, 99]

const squares = numbers.map(async number => {
    await waitfor(2)
    return number * number
})

async function execute() {
    console.time('map')

    const squares = await Promise.all(numbers.map(async number => {
        await waitfor(2)
        return number * number 
    }))

    console.log(squares)

    console.timeEnd('map')
}

execute()