const btn = document.querySelector("button")

const modal = document.querySelector("dialog")
const btnClose = document.querySelector("dialog button")

btn.onclick = function () {
    modal.show()
}

btnClose.onclick = function () {
    modal.close()
}