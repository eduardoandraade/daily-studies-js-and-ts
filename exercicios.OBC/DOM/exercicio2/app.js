function createLabel(text, htmlfor) {
    const label = document.createElement('label')
    label.htmlfor = htmlfor
    label.innerText = text
    return label
}

function createInput(id, value, name, type = 'text', placeholder = '') {
    const input = document.createElement('input')
    input.id = id
    input.value = value
    input.name = name
    input.type = type
    input.placeholder = placeholder
    return input
}

const addTechBtn = document.getElementById('addTechBtn');
const form = document.getElementById('devForm');
const developers = []
let inputRows = 0

addTechBtn.addEventListener('click', function (ev) {
    const stackInput = document.getElementById('stackInput');

    const newRow = document.createElement('li')
    const rowIndex = inputRows 
    inputRows++
    newRow.id = 'input-' + rowIndex
    newRow.className = 'InputRow'

    const techNameLabel = createLabel('Nome: ', 'techName-' + rowIndex)
    const techNameInput = createInput('techName-' + rowIndex, null, 'techName')

    newRow.append(
        techNameLabel, techNameInput
    )

    stackInput.appendChild(newRow)
})