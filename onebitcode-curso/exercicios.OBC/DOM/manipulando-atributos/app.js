const input = document.getElementById('input')

document.getElementById('value').addEventListener('click', function() {
    input.value = 'Olá, mundo!'

    console.log(input.value)
    console.log(input.getAttribute('value'))
})

document.getElementById('type').addEventListener('click', function () {
    input.type = input.type !== 'radio' ? 'radio' : 'text'
    // input.setAttribute('text', 'radio')
})

document.getElementById('placeholder').addEventListener('click', function () {
    input.placeholder = 'Digite algo...'
})

document.getElementById('disabled').addEventListener('click', function () {
    input.setAttribute('disabled', !input.disabled)
})

document.getElementById('data').addEventListener('click', function() {
    const data = input.dataset.somethingElse
    console.log("O valor do atribudo data-something-else é: " + data)
    input.dataset.somethingElse = 'Outro valor'
    console.log("Agora valor do atribudo data-something-else é: " + input.dataset.somethingElse)

})