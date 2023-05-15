async function asyncSum(a, b) {
    return new Promise((resolve, reject) => {
        if(typeof a !== 'number' || typeof b !== 'number') {
            reject('arguments must be of type number')
        } else {
            resolve(a + b)
        }
    })
}

function asyncSubtract(a, b) {
    return new Promise((resolve, reject) => {
        if(typeof a !== 'number' || typeof b !== 'number') {
            reject('arguments for subbtraction must be of type number')
        } else {
            resolve(a - b)
        }
    })
}

const sumResult = asyncSum(50, 30)
const subResult = asyncSubtract(10, null)

Promise.all([sumResult, subResult]).then(results => {
    console.log(results)
}).catch(err => {
    console.log(err)
})