function useLightTheme() {
    document.body.style.color = 'silver'
    document.body.style.backgroundColor = '#fff'
}

function useDarkTheme() {
    document.body.style.color = '#fff'
    document.body.style.backgroundColor = 'Black'
}

function switchTheme() {
    document.body.classList.toggle('is-light')
    document.body.classList.toggle('is-dark')
}

document.getElementById('switchBtn').addEventListener('click', switchTheme)
document.getElementById('lightBtn').addEventListener('click', useLightTheme)
document.getElementById('darkBtn').addEventListener('click', useDarkTheme)